import React, { useEffect, useState, useContext } from "react";
import { Box, Button } from "@material-ui/core";
import { getMoneyLineOddAPI } from "src/services/PopularOddsAPI";
import { addBetSlip } from "src/services/placeBet"
import SnackbarService from 'src/services/SnackbarService';
import { AuthContext } from "src/context/Auth";
import { makeStyles } from "@material-ui/core/styles";
export default function (props) {

  const { gameId, gameData } = props;
  const auth = useContext(AuthContext);
  const [home, setHome] = React.useState(0);
  const [away, setAway] = React.useState(0);
  const [odds, setOdds] = React.useState([]);
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState('');
  const [snackBarStatus, setSnackBarStatus] = useState('');




  const useStyles = makeStyles((theme) => ({
    black: {
      background: "#222222",
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
      borderTop: '1px solid rgba(127, 35, 155, 1)',
      borderBottom: '1px solid rgba(240, 76, 82, 1)',
      borderLeft: "1px solid rgba(127, 35, 155, 1)",
      borderRight: "1px solid rgba(240, 76, 82, 1)",
    }



  }));
  useEffect(() => {
    getMoneyLine();
  }, []);

  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  }

  const _addBetSlip = async (gameId, odds, betType, gameData) => {
    if (auth.isLogin()) {
      const res = await addBetSlip(gameId, odds, betType, gameData);
      if (res) {
        snackBar("Add bet successfully.", "success");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } else {
      snackBar("User not login.", "danger");
    }
  }

  const getMoneyLine = async () => {
    const responseSpreads = await getMoneyLineOddAPI(gameId);
    console.log(gameId + ".responseSpreads: ", responseSpreads);
    if (!isEmptyObj(responseSpreads)) {
      (responseSpreads.bets[0].values[0]
        ? (responseSpreads.bets[0].values[0].value == "Home" ? setHome(responseSpreads.bets[0].values[0].odd) : setAway(responseSpreads.bets[0].values[0].odd))
        : setHome(0));
      (responseSpreads.bets[0].values[1]
        ? (responseSpreads.bets[0].values[1].value == "Home" ? setHome(responseSpreads.bets[0].values[1].odd) : setAway(responseSpreads.bets[0].values[1].odd))
        : (away != undefined ? setHome(0) : setAway(0)));
    } else {
      setHome(0);
      setAway(0);
    }
  }

  const isEmptyText = (value) => {
    if (value != null && value != undefined && value != 0) {
      return true;
    } else {
      return false
    }
  }

  const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
  }

  const classes = useStyles();
  return (
    <>
      {snackBarContent && <SnackbarService msg={snackBarMsg} status={snackBarStatus} />}
      <Box>
        <Button variant="outlined" color="primary" onClick={() => _addBetSlip(gameId, home, "Money Line Home", gameData)}>
          {home}
        </Button>
        <Box mt={2}>
          <Button variant="outlined" color="primary" className={classes.black} onClick={() => _addBetSlip(gameId, home, "Money Line Home", gameData)}>{away}</Button>
        </Box>
        <Box mt={2}>
          <Button variant="outlined" color="secondary" onClick={() => _addBetSlip(gameId, away, "Money Line Away", gameData)}>
            {away}
          </Button>
        </Box>
      </Box>
    </>
  )
}