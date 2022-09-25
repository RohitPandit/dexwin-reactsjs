import { Box } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Slide,
  IconButton
} from "@material-ui/core";
import BetBox from "src/component/BetBox";
import { useHistory } from "react-router-dom";
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import ParlaySuggestion from "src/component/ParlaySuggestion";
import MyBets from "src/views/pages/MyBets/MyBets";
import { AuthContext } from "src/context/Auth";
import { orderplace } from "src/services/MoneyLineBets";
import SnackbarService from 'src/services/SnackbarService';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useNewMoralisObject } from "react-moralis";


const useStyles = makeStyles((theme) => ({
  boxRelative: {
    position: "relative",
    height: "80vh",
    textAlign: "center",
  },
  boxFixedCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  centerIcon: {
    fontSize: "9rem",
    color: "rgba(255, 255, 255, 0.2)",
  },
  textContent: {
    color: "rgba(255, 255, 255, 0.2)",
    fontSize: "1rem",
    userSelect: "none"
  },
  UserBox: {
    "& h5": {
      color: theme.palette.text.noticetext,
    },
  },
  acitiveBox: {

    "& button": {
      minWidth: "auto",
    },
    "& button": {
      minWidth: "auto",
      borderRadius: "5px",
      padding: "6px 27px",
      background: theme.palette.button.primary,
      "&.active": {
        color: "#444343",
        background: "linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%)",
        boxShadow: "-10px -10px 20px rgba(255, 255, 255, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  acitiveBox1: {
    "& button": {
      minWidth: "auto",
      borderRadius: "10px",
      padding: "6px 27px",
      "&.active": {
        border: "1px solid #70D5FB",
        borderRadius: "10px",
      },
    },
  },
  ButtonBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    // "& .MuiButton-contained": {
    //   "&:hover": {
    //     background: theme.palette.background.default,
    //     color:theme.palette.text.white,
    //   },
    // },
    "& button": {
      borderRadius: "50px",
      minWidth: "auto",
      height: "40px",
      fontWeight: "800",
      color: theme.palette.text.white,
      background: theme.palette.background.default,
      border: "none !important",
      boxShadow: "-6px -7px 10px rgb(255 255 255 / 5%), 2px 2px 20px rgb(0 0 0 / 56%)",
      fontSize: "14px",
      whiteSpace: "pre",
      //   // "&:hover": {
      //   //   background: "none !important",
      //   // },
      // },
      // "&.hover": {
      //   color: "#444343",
      //   background: "linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%)",
      // },
      "&.active": {
        color: "#ffff",
        border: "3px solid rgba(112, 213, 251, 1) !important",
      },
    },
  },
  greenButton: {
    background: "linear-gradient(99.01deg, #8DE6D1 6.49%, #71FEA3 97.08%);",
    // boxShadow: "0px 0px 10px #8de6d1, -10px -10px 20px rgb(255 255 255 / 0%), 10px 10px 20px rgb(0 0 0 / 50%)",
    color: "#444343",
    fontSize: "17px",
    fontWeight: 700,

  },
  fullscreenModal: {
    "& .MuiDialog-paperFullScreen": {
      top: "26px",
      height: "calc(100% - 80px)",
      background: theme.palette.background.paper,
    },
  },
  appBar: {
    position: "relative",
    borderRadius: "43px",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },



}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Sidebet(props) {
  const auth = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userBets, setUserBets] = React.useState([]);
  const [tabviewsideBet, setTabViewsideBet] = useState("betSlip");
  const [loader, setLoader] = useState(false);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState('');
  const [snackBarStatus, setSnackBarStatus] = useState('');
  const { save } = useNewMoralisObject("Bets");


  const getBetSlips = () => {
    console.log("betslips : ", JSON.parse(localStorage.getItem("betslips")));
    setUserBets(JSON.parse(localStorage.getItem("betslips")))
  }

  useEffect(() => {
    getBetSlips();
  }, []);

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const betnow = async () => {
    setLoader(true);

    const betslip = JSON.parse(localStorage.getItem("betslips"));
    const amount = Number(betslip[0].amount);
    if (amount < 5) {
      snackBar("Please! Enter minimum amount $5", "danger");
      setLoader(false);
      return;
    }

    if (amount > 1000) {
      snackBar("Maximum amount $1000 for bet place.", "danger");
      setLoader(false);
      return;
    }

    const res = await orderplace();

    if (res) {
      const data = {
        odds: betslip[0].odds,
        userAddress: localStorage.getItem("userAddress").toString(),
        betType: betslip[0].betType,
        gameId: betslip[0].gameId,
        winAmount: betslip[0].winAmount,
        transactionHash: res.transactionHash,
        amount: betslip[0].amount,
        gameData: betslip[0].gameData,
      };
  
      save(data, {
        onSuccess: (monster) => {
          snackBar("Place bet successfully. With transaction has " + res.transactionHash, "success");
          localStorage.setItem("betslips", "[]");
          setTimeout(() => {
            getBetSlips();
            setLoader(false);
          }, 1000);
        },
        onError: (error) => {
          snackBar("Failed to create new object, with error code: " + error.message, "danger");
        },
      });

    } else {
      setLoader(false);
    }
  }

  const preventDefault = (event) => event.preventDefault();


   

  




  const userRightContent = () => {
    const data = JSON.parse(localStorage.getItem("betslips"));
    return (
      <Box className={classes.UserBox}>
        <Box className={classes.ButtonBox}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button fullWidth className={tabviewsideBet === "betSlip" ? "active" : ""}
                onClick={() => setTabViewsideBet("betSlip")}>BET SLIP</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth className={tabviewsideBet === "Mybets" ? "active" : ""}
                onClick={() => setTabViewsideBet("Mybets")} >MY BETS</Button>
            </Grid>
          </Grid>
        </Box>
        {tabviewsideBet === "betSlip" ? (
          (userBets &&
            userBets.length > 0 ?
            <>
              <Box mt={2}>
                <Typography variant="body2" color="primary">Your Bets</Typography>
                {
                  userBets.map(element => {
                    return (
                      <BetBox getBetSlips={getBetSlips} element={element} />
                    )
                  })
                }
              </Box>
              <Box mt={2}>
                <Box className="justifyBetween" mb={1}>
                  <Typography variant="body2" color="primary" className="textBlue">Total Odds</Typography>
                  <Typography variant="h5" color="noticetext" style={{ fontSize: "15px" }}>{userBets[0]?.odds}</Typography>
                </Box>

                <Box className="justifyBetween" mb={1}>
                  <Typography variant="body2" color="primary" className="textBlue">Total Stake</Typography>
                  <Typography variant="h5" color="white" style={{ fontSize: "15px" }}>{userBets[0]?.amount}</Typography>
                </Box>
                <Box className="justifyBetween" mb={1}>
                  <Typography variant="body2" color="primary" className="textBlue">Total Payout</Typography>
                  <Typography variant="h5" color="white" style={{ fontSize: "15px" }}>{userBets[0]?.winAmount}</Typography>
                </Box>
              </Box>
              <Box mt={2} align="center">
                {
                  loader ?
                    <Button variant="contained" size="large" disabled fullWidth className={classes.greenButton}><CircularProgress color="secondary" /></Button>
                    :
                    <Button variant="contained" size="large" onClick={() => betnow()} fullWidth className={classes.greenButton} >Bet Now</Button>
                }
              </Box>
              <Box mt={2}>
                <ParlaySuggestion />
              </Box>
              {/* <Box mt={2}>
                <Typography variant="body2" color="primary">Your Bets</Typography>
                <BetBox />
                <BetBox />
              </Box>
              <Box mt={2}>
                <Box className="justifyBetween" mb={1}>
                  <Typography variant="body2" color="primary" className="textBlue">Total Odds</Typography>
                  <Typography variant="h5" color="noticetext" style={{ fontSize: "15px" }}>2</Typography>
                </Box>

                <Box className="justifyBetween" mb={1}>
                  <Typography variant="body2" color="primary" className="textBlue">Total Stake</Typography>
                  <Typography variant="h5" color="white" style={{ fontSize: "15px" }}>0.000100</Typography>
                </Box>
                <Box className="justifyBetween" mb={1}>
                  <Typography variant="body2" color="primary" className="textBlue">Total Payout</Typography>
                  <Typography variant="h5" color="white" style={{ fontSize: "15px" }}>0.000100</Typography>
                </Box>
              </Box>
              <Box mt={2} align="center">
                <Button variant="contained" size="large" fullWidth className={classes.greenButton}>Bet Now</Button>
              </Box>
              <Box mt={2}>
                <ParlaySuggestion />
              </Box> */}
            </>
            :
            <>
              <div className={classes.boxRelative}>
                <div className={classes.boxFixedCenter}>
                  <IconButton disabled>
                    <ConfirmationNumberIcon className={classes.centerIcon} />
                  </IconButton>
                  <div className={classes.textContent}>
                    Add your event, <br />
                    choose your odd, <br />
                    Place Your Bet
                  </div>
                </div>
              </div>
            </>
          )
        ) : (
          ""
        )}

        {tabviewsideBet === "Mybets" ? (
          <>
            <MyBets type="Sidebet" />
          </>
        ) : (
          ""
        )}


      </Box>
    )
  }


  const guestRightContent = () => {
    return (
      <Box className={classes.UserBox}>
        <Box className={classes.ButtonBox}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button fullWidth className={tabviewsideBet === "betSlip" ? "active" : ""}>BET SLIP</Button>
            </Grid>
          </Grid>
        </Box>
        {tabviewsideBet === "betSlip" ? (
          <>
            <div className={classes.boxRelative}>
              <div className={classes.boxFixedCenter}>
                <IconButton disabled>
                  <ConfirmationNumberIcon className={classes.centerIcon} />
                </IconButton>
                <div className={classes.textContent}>
                  Add your event, <br />
                  choose your odd, <br />
                  Place Your Bet
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </Box>
    )
  }

  return (
    <>
      {snackBarContent && <SnackbarService msg={snackBarMsg} status={snackBarStatus} />}
      {auth.isLogin() ? userRightContent() : guestRightContent()}
    </>
  );
}
