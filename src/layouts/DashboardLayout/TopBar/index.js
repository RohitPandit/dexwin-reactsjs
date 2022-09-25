import React, { useState, useEffect, useContext, createContext } from "react";
import { AppBar, Toolbar, makeStyles, Button, IconButton, Drawer, Grid, Box, Typography, MenuItem, Select, Dialog, Container, Avatar, Hidden, Tooltip } from "@material-ui/core";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { BsBellFill, BsPower } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegMoon } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { useMoralis } from "react-moralis";


import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import NavLink from "../NavLink";
import GloballySearchArea from "src/component/GloballySearchArea";
import UserProfileComponent from "src/component/UserProfileComponent";
import Logo from "src/component/Logo";
import SettingsContext, { SettingsProvider } from "src/context/SettingsContext";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationModal from "src/views/pages/Notification/NotificationModal";
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MuiAlert from '@material-ui/lab/Alert';
import App from 'src/App'
import { AuthContext } from "src/context/Auth";
import SnackbarService from 'src/services/SnackbarService';
import Web3 from "web3";
import { Biconomy } from "@biconomy/mexa";
import detectEthereumProvider from '@metamask/detect-provider';

export const submitContext = createContext();

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  dropdownStyle: {
    borderRadius: '20px'
  },

  drawerPaper: {
    width: drawerWidth,

    "& a": {
      textDecoration: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    margin: "7px 0",
    "& button": {
      borderRadius: "50px",
    },
    "& .notification": {
      color: theme.palette.text.noticetext,
      // fontSize:"30px"
    },
  },
  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  logoDrawer: {
    paddingLeft: "10px",
    width: "200px",
    marginBottom: "15px",
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",
    // background: "#1a1a1a",
    width: "260px",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  drawericon: {
    // color: "#000",
    position: "absolute",
    top: "6px",
    right: "-10px",
    fontSize: "25px",
  },
  logoImg: {
    width: "75px",
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: " 11px 1px 3px 0px",
      width: "52px",
    },
  },
  containerHeight: {
    height: "100%",
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
    minHeight: "60px !important",
  },
  menuul: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    "& li": {
      listStyle: "none",
      marginLeft: "10px",
      [theme.breakpoints.down("lg")]: {
        // marginTop: '15px',
      },
    },
    "& button": {
      height: "41px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
  menuSocial: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    "& li": { listStyle: "none", marginLeft: "10px" },
    "& .buttontopBox": {
      boxShadow: theme.palette.background.topbarButtonShadow,
      borderRadius: "50px",
      background: theme.palette.background.selectBox,
      padding: "8px",
      "& svg": {
        fontSize: "15px",
        color: "#73d98b",
      },
    },
    "&  .selectbox3": {
      backgroundColor: "#e0e0e0",
      height: "41px",
      borderRadius: "50px",
      background: theme.palette.background.selectBox,
      boxShadow: theme.palette.background.topbarButtonShadow,
      "& .MuiOutlinedInput-notchedOutline": {
        boxShadow:
          "inset -10px -10px 20px rgb(255 255 255 / 24%), inset -20px -1px 15px 6px rgb(0 0 0 / 51%) !important",
      },
      "& .selectBox": {
        display: "flex",
        alignItems: "center",
        "& h5": {
          fontSize: "14px",
          marginLeft: "7px",
          fontWeight: "700",
        },
        "& img": {
          width: "22px",
        },
      },
    },
  },
  betBuilderClass: {
    "& button": {
      whiteSpace: "pre",
      [theme.breakpoints.down("md")]: {
        fontSize: "13px",
      },
    },
  },
  modalButtonBox: {
    "& button": {
      padding: "12px 0 !important",
      "&:hover": {
        border: "1px solid #3399AA",
      },
    },
  },
  Topbar: {
    // "& .MuiAppBar-colorPrimary": {
    backgroundColor: "transparent",
    // }
  },
  houseCut: {
    color: theme.palette.text.houseCut,
    textShadow: theme.palette.background.houseshadow,
    fontSize: "13px",
  },
  whiteButton: {
    color: "#2D2D2D",
    // height: "39px",
    fontSize: "13px",
    padding: "8px 0px",
    background: "linear-gradient(180deg, #85E2D5 0%, #60C954 100%)",
    // boxShadow:
    //   "0px 0px 10px #8de6d1, -10px -10px 20px rgb(255 255 255 / 0%), 10px 10px 20px rgb(0 0 0 / 50%)",
    fontWeight: "700",
    // minWidth: "134px",
  },
}));


export default function Header({ buttonClick}) {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [provider,SetProvider]= useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState('');
  const [snackBarStatus, setSnackBarStatus] = useState('');
  const [chainID, setChainID] = useState("80001");
  const [metaTxEnabled, setMetaTxEnabled] = useState(true);
  const [transactionHash, setTransactionHash] = useState("");

  const auth = useContext(AuthContext);
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  }
  let web3;
  //let Contract;
  const Contract = {
    address: "0x3Bfff6a44BbEd2956601aC33000bfa745565CaD6",
    abi: [
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "userAddress",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "functionSignature",
            "type": "bytes"
          },
          {
            "internalType": "bytes32",
            "name": "sigR",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "sigS",
            "type": "bytes32"
          },
          {
            "internalType": "uint8",
            "name": "sigV",
            "type": "uint8"
          }
        ],
        "name": "executeMetaTransaction",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "string",
            "name": "newQuote",
            "type": "string"
          }
        ],
        "name": "setQuote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "a",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferer20",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "userAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address payable",
            "name": "relayerAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "functionSignature",
            "type": "bytes"
          }
        ],
        "name": "MetaTransactionExecuted",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "getNonce",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getQuote",
        "outputs": [
          {
            "internalType": "string",
            "name": "currentQuote",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "currentOwner",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "quote",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
  }
  const domainType = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" }
  ];
  
  const metaTransactionType = [
    { name: "nonce", type: "uint256" },
    { name: "from", type: "address" },
    { name: "functionSignature", type: "bytes" }
  ];
  
  let domainData = {
    name: "TestContract",
    version: "1",
    verifyingContract: Contract.address
  };

const onSubmit = async event => {
    if (Contract) {
      setTransactionHash("");
      if (metaTxEnabled) {
        console.log("Sending meta transaction");
        let userAddress = selectedAddress;
        let nonce = await Contract.methods.getNonce(userAddress).call();
        let functionSignature = Contract.methods.transferer20("0x3Bfff6a44BbEd2956601aC33000bfa745565CaD6", "1").encodeABI();
        //let functionSignature = Contract.methods.placebet("1","1","324","0","moneyline","278").encodeABI();
        console.log(Contract.address, 'adddress contract ')
        let message = {};
        message.nonce = parseInt(nonce);
        message.from = userAddress;
        message.functionSignature = functionSignature;

        const dataToSign = JSON.stringify({
          types: {
            EIP712Domain: domainType,
            MetaTransaction: metaTransactionType
          },
          domain: domainData,
          primaryType: "MetaTransaction",
          message: message
        });
        console.log(domainData);
        console.log();
        web3.currentProvider.send(
          {
            jsonrpc: "2.0",
            id: 999999999999,
            method: "eth_signTypedData_v4",
            params: [userAddress, dataToSign]
          },
          function (error, response) {
            console.info(`User signature is ${response.result}`);
            if (error || (response && response.error)) {
              showErrorMessage("Could not get user signature");
            } else if (response && response.result) {
              let { r, s, v } = getSignatureParameters(response.result);
              console.log(userAddress);
              console.log(JSON.stringify(message));
              console.log(message);
              console.log(getSignatureParameters(response.result));

              // const recovered = sigUtil.recoverTypedSignature_v4({
              //   data: JSON.parse(dataToSign),
              //   sig: response.result
              // });
              // console.log(`Recovered ${recovered}`);
              sendSignedTransaction(userAddress, functionSignature, r, s, v);
            }
          }
        );
      } else {
        console.log("Sending normal transaction");
        Contract.methods
          .placebet("0", "2", "156", "0", "moneyline", "123")
          .send({ from: selectedAddress })
          .on("transactionHash", function (hash) {
            showInfoMessage(`Transaction sent to blockchain with hash ${hash}`);
          })
          .once("confirmation", function (confirmationNumber, receipt) {
            setTransactionHash(receipt.transactionHash);
            showSuccessMessage("Transaction confirmed");
          });
      }
    } else {
      showErrorMessage("Please enter the quote");
    }
  };

  const getSignatureParameters = signature => {
    if (!web3.utils.isHexStrict(signature)) {
      throw new Error(
        'Given value "'.concat(signature, '" is not a valid hex string.')
      );
    }
    var r = signature.slice(0, 66);
    var s = "0x".concat(signature.slice(66, 130));
    var v = "0x".concat(signature.slice(130, 132));
    v = web3.utils.hexToNumber(v);
    if (![27, 28].includes(v)) v += 27;
    return {
      r: r,
      s: s,
      v: v
    };
  };


  const showErrorMessage = message => {
    NotificationManager.error(message, "Error", 5000);
  };

  const showSuccessMessage = message => {
    NotificationManager.success(message, "Message", 3000);
  };

  const showInfoMessage = message => {
    NotificationManager.info(message, "Info", 3000);
  };

  const sendSignedTransaction = async (userAddress, functionData, r, s, v) => {
    if (web3 && Contract) {
      try {
        let gasLimit = await Contract.methods
          .executeMetaTransaction(userAddress, functionData, r, s, v)
          .estimateGas({ from: userAddress });
        let gasPrice = await web3.eth.getGasPrice();
        console.log(gasLimit);
        console.log(gasPrice);
        let tx = Contract.methods
          .executeMetaTransaction(userAddress, functionData, r, s, v)
          .send({
            from: userAddress,
            gasPrice: gasPrice,
            gasLimit: gasLimit
          });

        tx.on("transactionHash", function (hash) {
          console.log(`Transaction hash is ${hash}`);
          showInfoMessage(`Transaction sent by relayer with hash ${hash}`);
        }).once("confirmation", function (confirmationNumber, receipt) {
          console.log(receipt);
          setTransactionHash(receipt.transactionHash);
          showSuccessMessage("Transaction confirmed on chain");
          // getQuoteFromNetwork();
        });
      } catch (error) {
        console.log(error);
      }
    }
  };


  // const login = async () => {
  //   if (window.ethereum) { //check if Metamask is installed
  //     try {
  //       const address = await window.ethereum.enable(); //connect Metamask
  //       const obj = {
  //         connectedStatus: true,
  //         status: "",
  //         address: address
  //       }
  //       // biconomy 
  //       //const provider = window["ethereum"];
  //       await provider.enable();
  //       if (provider.networkVersion == "80001") {
  //         domainData.chainId = 80001;
  //         const biconomy = new Biconomy(provider, {
  //           apiKey: "O3-IjZClP.ce1ab5be-6f1d-4355-a450-f6a553818f12"//"MublK0H-b.864389b3-e421-4ddb-b56b-e5a1bca3e109"
  //           ,
  //           debug: true
  //   var isMetamask = await isMetaMaskInstalled();
  //   if(isMetamask){
  //     if (!isAuthenticated) {
  //       await authenticate({signingMessage: "Log in using Moralis" })
  //         .then(async function(user) {
  //           await localStorage.setItem("userStatus", true);
  //           await localStorage.setItem("userId", user.id);
  //           await localStorage.setItem("userAddress", user?.get("ethAddress"));
  //           if(auth.isLogin()){
  //             snackBar("User Login Successful.", "success");
  //             window.location.reload();
  //           }
  //         })
  //         .catch(function (error) {
  //           console.log("metamast-connect-error: " + error);
  //         });
  //     }
  //   }else{
  //     snackBar("Metamsk is not found.", "error");
  //   }
  // }

  const login = async () => {
    if (window.ethereum) { //check if Metamask is installed
      try {
        const address = await window.ethereum.enable(); //connect Metamask
        const obj = {
          connectedStatus: true,
          status: "",
          address: address
        }
        // biconomy 
        const provider = window["ethereum"];
        await provider.enable();
        if (provider.networkVersion == "80001") {
          domainData.chainId = 80001;
          const biconomy = new Biconomy(provider, {
            apiKey: "O3-IjZClP.ce1ab5be-6f1d-4355-a450-f6a553818f12"//"MublK0H-b.864389b3-e421-4ddb-b56b-e5a1bca3e109"
            ,
            debug: true
          });
          web3 = new Web3(biconomy);

          biconomy.onEvent(biconomy.READY, () => {
            // Initialize your dapp here like getting user accounts etc
            Contract = new web3.eth.Contract(
              Contract.abi,
              Contract.address
            );
          //  setSelectedAddress(provider.address);
           
            provider.on("accountsChanged", function (accounts) {
              setSelectedAddress(accounts[0]);
              snackBar('selected address is',address);
            });
          }).onEvent(biconomy.ERROR, (error, message) => {
            // Handle error while initializing mexa
          });
        } else {
          snackBar  ("Please change the network in metamask to Mumbai Testnet");
        }
          //biconomy 
      
        await localStorage.setItem("userStatus", true);
        await localStorage.setItem("userAddress", address);
        setAccountAddress(address);
        const chainID1 = await window.ethereum.request({ method: "eth_chainId" });
       // const provider = await detectEthereumProvider();
       // SetProvider()
        await localStorage.setItem("chainID", chainID1);
        console.log("chainid", chainID1);
        setChainID(chainID1);
        if (auth.isLogin()) {
          snackBar("User Login Successful.", "success");
          window.location.reload();
        }
        return obj;

      } catch (error) {
        snackBar("🦊 Connect to Metamask using the button on the top right."+error, "danger")
      }

    } else {
      snackBar("🦊 You must install Metamask into your browser: https://metamask.io/download.html", "danger")

    }
  };


  const clearAccount = () => {
    setAccountAddress('0x0');
    setIsConnected(false);
    console.log('clearAccount');
  };

  const logOut = async () => {
    await logout();
    await localStorage.setItem("userStatus", false);
    await localStorage.setItem("userAddress", null);
    await localStorage.setItem("cahinID", null);
    window.ethereum.on('disconnect', clearAccount);

    // await localStorage.setItem("userId", null);
    snackBar("User logout Successful.", "success");
    setTimeout(() => {
      window.location.replace('/');
    }, 1000);
  }

  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  }

  const checkConnect = async () => {
    if (auth.isLogin()) {
      setIsConnected(true);
      localStorage.setItem("userStatus", true);
    } else {
      setIsConnected(false);
      localStorage.setItem("userStatus", false);
    }
  }

  useEffect(() => {
    checkConnect();
  }, []);

  const {
    toolbar,
    Topbar,
    drawerPaper,
    drawerContainer,
    drawericon,
    logoDrawer,
    containerHeight,
    houseCut,
    betBuilderClass,
    mainHeader,
    menuSocial,
    modalButtonBox,
  } = useStyles();
  const classes = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  const themeSeeting = useContext(SettingsContext);
  const history = useHistory();
  const [showModal, updateShowModal] = React.useState(false);
  const toggleModal = () => updateShowModal((state) => !state);
  const changeTheme = (type) => {
    themeSeeting.saveSettings({
      theme: type,
    });
  };
  useEffect(() => {

    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const [select1, setSelect1] = useState("ETH");
  const handleChange1 = (event) => {
    setSelect1(event.target.value);
  };
  const [openUserProfile, setOpenUserProfile] = React.useState(false);
  const [openUsenotification, setOpenUsenotification] = React.useState(false);

  const handleClickOpen = () => {
    setOpenUserProfile(true);
  };
  const handleClose = () => {
    setOpenUserProfile(false);
  };
  const handleClickOpen1 = () => {
    setOpenUsenotification(true);
  };
  const handleClose1 = () => {
    setOpenUsenotification(false);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  var data = {
    onSubmit : onSubmit
};
  const displayDesktop = (props) => {
    return (
      <>
       <submitContext.Provider value={data}>{props?.children}</submitContext.Provider >
        <Container maxWidth="fixed" className="p-0">
          <div className="App-header">
            {isConnected ? (
              <div>
                <Toolbar className={toolbar}>
                  <Grid container spacing={1} alignItems='center' justifyContent="center">
                    <Grid item md={7}>
                      <Grid container spacing={2} alignItems='center' justifyContent="center">
                        <Grid item xs={6}>
                          <Grid container spacing={3} alignItems="center">
                            <Grid item md={2}>
                              {productLogo}
                            </Grid>
                            <Grid item xs={9}>
                              <GloballySearchArea type="TopHeaderSearchArea" />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container spacing={3} alignItems="center">
                            <Grid item xs={6} md={4}>
                              <Button variant="contained" color="primary" fullWidth onClick={() => history.push("/LeaderBoard")} >
                                LEADERBOARD
                              </Button>
                            </Grid>
                            <Grid item xs={6} md={4}>
                              <Box className={betBuilderClass}>
                                <Button variant="contained" color="primary" fullWidth style={{ border: "1px solid #3399AA" }} onClick={() => history.push("/bet-builder")}>
                                  BET BUILDER
                                </Button>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={4}>
                              <Box className={betBuilderClass}>
                                <Button variant="contained" color="primary" fullWidth style={{ border: "1px solid #3399AA" }} onClick={() => history.push("/bet-builder")}>
                                  COMPARE ODDS
                                </Button>
                              </Box>
                            </Grid>

                          </Grid>

                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={1} >
                      <Box style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                        <Typography variant="h6" className={houseCut}>HOUSE CUT : 3%</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box className={menuSocial}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item md={3}>
                            <Button variant="contained" fullWidth
                              onClick={() => history.push("/wallet")} className={classes.whiteButton}> DEPOSIT</Button>
                          </Grid>
                          <Grid item md={3}>
                            <Select
                              className="selectbox3"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="weather"
                              value={select1}
                              onChange={handleChange1}
                              MenuProps={{ classes: { paper: classes.dropdownStyle } }}
                            >
                              <MenuItem value={"BTC"}>
                                <Box className="selectBox" style={{ display: "flex", alignItems: "center" }}>
                                  <img src="images/btc.png" alt="image" style={{ width: "22px" }} />
                                  <Typography variant="h5" style={{
                                    fontSize: "14px",
                                    marginLeft: "7px",
                                  }}>BTC</Typography>
                                </Box>
                              </MenuItem>
                              <MenuItem value={"BNB"}>
                                <Box className="selectBox" style={{ display: "flex", alignItems: "center" }}>
                                  <img src="images/bnb.png" alt="image" style={{ width: "22px" }} />
                                  <Typography variant="h5" style={{
                                    fontSize: "14px",
                                    marginLeft: "7px",
                                  }}>BTC</Typography>
                                </Box>
                              </MenuItem>
                              <MenuItem value={"ETH"}>
                                <Box className="selectBox" style={{ display: "flex", alignItems: "center" }}>
                                  <img src="images/eth.png" alt="image" style={{ width: "22px" }} />
                                  <Typography variant="h5" style={{
                                    fontSize: "14px",
                                    marginLeft: "7px",
                                  }}>BTC</Typography>
                                </Box>
                              </MenuItem>
                            </Select>
                          </Grid>
                          <Grid item md={3}>
                            <Button variant="contained" color="primary" fullWidth onClick={() => history.push("/wallet")} className="buttontopBox">
                              <BsFillPlusCircleFill />&nbsp;&nbsp;$ 1254.00
                            </Button>
                          </Grid>
                          <Grid item md={3}>
                            <Box style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-around"
                            }} >
                               <Tooltip title="Notification" arrow>
                              <IconButton variant="contained" color="primary" style={{ background: "transparent" }}>
                                <BsBellFill onClick={handleClickOpen1} />
                              </IconButton></Tooltip>
                              <Tooltip title="LogOut" arrow>
                              <IconButton variant="contained" color="primary" style={{ background: "transparent" }}>
                                <BsPower onClick={logOut} />
                              </IconButton>
                              </Tooltip>
                              <Tooltip title="Profile" arrow>
                              <Avatar alt="Remy Sharp" src="/images/user.png" onClick={handleClickOpen}
                                style={{ cursor: "pointer" }} /></Tooltip>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Toolbar>
              </div>
            ) : (
              <img src="" className="App-logo" alt="" />
            )}
            {isConnected ? (
              <p
                className="info"
                style={{ marginLeft: "93%", marginTop: "-1.5%" }}
              >
                {" "}
              </p>
            ) : (
              <div>
                <Toolbar className={toolbar} disabled={true}>
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    style={{ marginTop: "-2%" }}
                  >
                    <Grid item md={5}>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={6}>
                          <Grid container spacing={3} alignItems="center">
                            <Grid item md={3}>
                              {productLogo}
                            </Grid>
                            <Grid item xs={9}>
                              <GloballySearchArea type="TopHeaderSearchArea" />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid container spacing={3} alignItems="center">
                            <Grid item xs={6}>
                              <Button
                                variant="contained"
                                color="primary"
                                disabled
                                fullWidth
                                onClick={() => history.push("/LeaderBoard")}
                              >
                                LEADERBOARD
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <Box className={betBuilderClass}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  disabled
                                  fullWidth
                                  style={{ border: "1px solid #3399AA" }}
                                  onClick={() => history.push("/bet-builder")}
                                >
                                  BET BUILDER
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={2}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h6" className={houseCut}>
                          HOUSE CUT : 3%
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={5}>
                      <Box className={menuSocial}>
                        <Grid container spacing={2} alignItems="center">
                          <Box width="100%" textAlign="right">
                            <IconButton onClick={() => login()}>
                              <AccountBalanceWalletOutlinedIcon style={{ color: "white", fontSize: "2.5rem" }}></AccountBalanceWalletOutlinedIcon>
                            </IconButton>
                          </Box>
                          {/* <button
                              onClick={connectWallet}
                              style={{
                                borderRadius: "10px",
                                backgroundColor: "#222222",
                                border: "2px solid grey",
                                marginLeft: "85%",
                                marginTop: "-3%",
                                color: "white",
                                padding: "1%",
                              }}
                            >
                              Connect
                            </button> */}
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Toolbar>
              </div>
            )}
          </div>

          {openUserProfile && (
            <Dialog
              fullWidth
              maxWidth="xs"
              open={openUserProfile}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <UserProfileComponent />
            </Dialog>
          )}

          <Dialog
            fullWidth
            maxWidth="xs"
            open={openUsenotification}
            keepMounted
            onClose={handleClose1}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <NotificationModal />
          </Dialog>

          {/* <ModalContext.Provider value={{ showModal, toggleModal }}>
            <div>
              <BetBuilderModal canShow={showModal} updateModalState={toggleModal}>
                <BetBuilder />
              </BetBuilderModal>
            </div>
          </ModalContext.Provider> */}
        </Container>
      </>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img className={logoDrawer} src="images/logotype02.png" alt="" />
            <Box style={{ width: "100%", padding: "0px 10px" }}>
              <GloballySearchArea />
            </Box>
            <UserProfileComponent />
            <Box className={menuSocial} px={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => history.push("/LeaderBoard")}
                  >
                    Leaderboard
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => history.push("/bet-builder")}
                  >
                    Bet Builder
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className={houseCut}>
                    HOUSE CUT : 3%
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => history.push("/wallet")}
                    className="buttontopBox"
                  >
                    <BsFillPlusCircleFill />
                    &nbsp;&nbsp;Deposit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Select
                    className="selectbox3"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="weather"
                    value={select1}
                    onChange={handleChange1}
                  >
                    <MenuItem value={"BTC"}>
                      <Box
                        className="selectBox"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src="images/btc.png"
                          alt="image"
                          style={{ width: "22px" }}
                        />
                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "14px",
                            marginLeft: "7px",
                          }}
                        >
                          BTC
                        </Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"BNB"}>
                      <Box
                        className="selectBox"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src="images/bnb.png"
                          alt="image"
                          style={{ width: "22px" }}
                        />
                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "14px",
                            marginLeft: "7px",
                          }}
                        >
                          BTC
                        </Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"ETH"}>
                      <Box
                        className="selectBox"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src="images/eth.png"
                          alt="image"
                          style={{ width: "22px" }}
                        />
                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "14px",
                            marginLeft: "7px",
                          }}
                        >
                          BTC
                        </Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" fullWidth>
                    <FaDollarSign /> 1254.00
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* {menuLinks} */}
          </div>
        </Drawer>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              style={{ justifyContent: "end" }}
            >
              <CloseIcon style={{ fontSize: "23px" }} />
            </IconButton>
            <Box className={drawerPaper}>
              <NavLink />
            </Box>
          </Drawer>
        </Hidden>
        <Box className="iconLeftSide">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          // className={classes.menuButton}
          >
            <HiMenuAlt2 />
          </IconButton>
        </Box>

        <div>{productLogo}</div>

        <Grid container>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <Box className="iconLeftSide">
              <IconButton
                className={drawericon}
                {...{
                  edge: "start",
                  color: "inherit",
                  "aria-label": "menu",
                  "aria-haspopup": "true",
                  onClick: handleDrawerOpen,
                }}
              >
                <MenuIcon
                  width="60px"
                  height="60px"
                  style={{ fontSize: "30px" }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const productLogo = (
    <Box>
      <Link to="/">
        <Logo className="logoImg" alt="image" />
      </Link>
    </Box>
  );

  return (
    <>
      {snackBarContent && <SnackbarService msg={snackBarMsg} status={snackBarStatus} />}
      <AppBar className={Topbar} elevation={0}>
        <Container maxWidth="fixed" className={containerHeight}>
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>
      <Box className="themeButton">
        <IconButton
          variant="contained"
          color="primary"
          onClick={() => {
            changeTheme("LIGHT");
          }}
        >
          <FiSun />
        </IconButton>
        <IconButton
          variant="contained"
          color="primary"
          onClick={() => {
            changeTheme("DARK");
          }}
        >
          <FaRegMoon />
        </IconButton>
      </Box>
    </>
  );
}
