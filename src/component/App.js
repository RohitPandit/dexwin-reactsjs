import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import Web3 from "web3";
import { Biconomy } from "@biconomy/mexa";
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import {
  Box, Typography,
  Grid,
  TextField
} from "@material-ui/core";
// import Contract from "./config";
const Contract = {
  address: "0x94c0104e7a296efde81cb69e2a5295a675e594b8",
  //"0x3Bfff6a44BbEd2956601aC33000bfa745565CaD6",
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
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfertouser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
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
let sigUtil = require("eth-sig-util");

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
// let domainData = {
//   name: "dexwin",
//   version: "2",
//   verifyingContract: config.contract.address
// };

let web3;
let contract;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  biconomy: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  link: {
    marginLeft: "5px"
  }
}));
const Heading = styled.h1`
font-family: 'K2D';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 39px;
text-transform: uppercase;
color: #FFFFFF;`;
const Division = styled.div`
background: linear-gradient(115.29deg, #F54F4F 15.07%, rgba(182, 17, 107, 0.91) 104.4%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -10px -10px 20px rgba(255, 255, 255, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25);
border-radius: 0px 0px 40px 40px;
padding: 0 52px; `;
const Division2 = styled.div`
display: flex;
align-items: center;
justify-content: center;`;
const FlexDiv = styled.div`
margin-top: 5 rem;`;

function App() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [quote, setQuote] = useState("This is a default quote");
  const [owner, setOwner] = useState("Default Owner Address");
  const [newQuote, setNewQuote] = useState("100");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [metaTxEnabled, setMetaTxEnabled] = useState(true);
  const [transactionHash, setTransactionHash] = useState("");
  console.log(Contract.address, "adderr")
  useEffect(() => {
    async function init() {
      if (
        typeof window.ethereum !== "undefined" &&
        window.ethereum.isMetaMask
      ) {
        // Ethereum user detected. You can now use the provider.
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
            contract = new web3.eth.Contract(
              Contract.abi,
              Contract.address
            );
            setSelectedAddress(provider.selectedAddress);
            getQuoteFromNetwork();
            provider.on("accountsChanged", function (accounts) {
              setSelectedAddress(accounts[0]);
            });
          }).onEvent(biconomy.ERROR, (error, message) => {
            // Handle error while initializing mexa
          });
        } else {
          showErrorMessage("Please change the network in metamask to Mumbai Testnet");
        }
      } else {
        showErrorMessage("Metamask not installed");
      }
    }
    init();
  }, []);

  const onQuoteChange = event => {
    setNewQuote(newQuote);
  };

  // const onSubmitWithPrivateKey = async () => {
  //   if (newQuote != "" && contract) {
  //     setTransactionHash("");
  //     if (metaTxEnabled) {
  //       console.log("Sending meta transaction");
  //       let privateKey = "2ef295b86aa9d40ff8835a9fe852942ccea0b7c757fad5602dfa429bcdaea910";
  //       let userAddress = "0xE1E763551A85F04B4687f0035885E7F710A46aA6";
  //       let nonce = await contract.methods.getNonce(userAddress).call();
  //       let functionSignature = contract.methods.setQuote(newQuote).encodeABI();
  //       let message = {};
  //       message.nonce = parseInt(nonce);
  //       message.from = userAddress;
  //       message.functionSignature = functionSignature;

  //       const dataToSign = {
  //         types: {
  //           EIP712Domain: domainType,
  //           MetaTransaction: metaTransactionType
  //         },
  //         domain: domainData,
  //         primaryType: "MetaTransaction",
  //         message: message
  //       };

  //       const signature = sigUtil.signTypedMessage(new Buffer.from(privateKey, 'hex'), {data: dataToSign}, 'V4');
  //       let { r, s, v } = getSignatureParameters(signature);
  //       let executeMetaTransactionData = contract.methods.executeMetaTransaction(userAddress, functionSignature, r, s, v).encodeABI();
  //       let txParams = {
  //         "from": userAddress,
  //         "to": config.contract.address,
  //         "value": "0x0",
  //         "gas": "100000",
  //         "data": executeMetaTransactionData
  //       };
  //       const signedTx = await web3.eth.accounts.signTransaction(txParams, `0x${privateKey}`);
  //       let receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction, (error, txHash) => {
  //         if (error) {
  //             return console.error(error);
  //         }
  //         console.log("Transaction hash is ", txHash);
  //         showInfoMessage(`Transaction sent to blockchain with hash ${txHash}`);
  //       });
  //       setTransactionHash(receipt.transactionHash);
  //       showSuccessMessage("Transaction confirmed");
  //       getQuoteFromNetwork();
  //     } else {
  //       console.log("Sending normal transaction");
  //       contract.methods
  //         .setQuote(newQuote)
  //         .send({ from: selectedAddress })
  //         .on("transactionHash", function(hash) {
  //           showInfoMessage(`Transaction sent to blockchain with hash ${hash}`);
  //         })
  //         .once("confirmation", function(confirmationNumber, receipt) {
  //           setTransactionHash(receipt.transactionHash);
  //           showSuccessMessage("Transaction confirmed");
  //           getQuoteFromNetwork();
  //         });
  //     }
  //   } else {
  //     showErrorMessage("Please enter the quote");
  //   }
  // }

  const onSubmit = async event => {
    if (contract) {
      setTransactionHash("");
      if (metaTxEnabled) {
        console.log("Sending meta transaction");
        let userAddress = selectedAddress;
        let nonce = await contract.methods.getNonce(userAddress).call();
        let functionSignature = contract.methods.transferer20("0x94c0104e7a296efde81cb69e2a5295a675e594b8", "1").encodeABI();
        //let functionSignature = contract.methods.placebet("1","1","324","0","moneyline","278").encodeABI();
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
        contract.methods
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

  const getQuoteFromNetwork = () => {
    if (web3 && contract) {
      contract.methods
        .balanceOf()
        .call()
        .then(function (result) {
          //  console.log(result);
          if (
            result &&
            result.currentQuote != undefined &&
            result.currentOwner != undefined
          ) {
            if (result.currentQuote == "") {
              showErrorMessage("No quotes set on blockchain yet");
            } else {
              setQuote(result.currentQuote);
              setOwner(result.currentOwner);
            }
          } else {
            showErrorMessage("Not able to get quote information from Network");
          }
        });
    }
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
    if (web3 && contract) {
      try {
        let gasLimit = await contract.methods
          .executeMetaTransaction(userAddress, functionData, r, s, v)
          .estimateGas({ from: userAddress });
        let gasPrice = await web3.eth.getGasPrice();
        console.log(gasLimit);
        console.log(gasPrice);
        let tx = contract.methods
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

  return (
    <div className="App">
      <section>
        <Box className={classes.biconomy} mt={2} p={2}>
          <Division>
            <Heading>Deposit your token in DEXWIN ecosystem</Heading>
          </Division>
        </Box>
        <Division2>
          <FlexDiv>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter the number"
              type="tel"
            />

          </FlexDiv>
        </Division2>
      </section>
      <section>
        <Division2>
          <Box align="center" mt={3}>
            <Button variant="contained" color="primary" size="large" fullWidth
              className="gradientButton" onClick={onSubmit}>Submit</Button>
          </Box>
        </Division2>
      </section>
      <NotificationContainer />
    </div>
  );
}





export default App;