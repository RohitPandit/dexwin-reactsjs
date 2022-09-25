import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles, Typography, TextField, InputAdornment, Grid, Paper } from "@material-ui/core";
import { GrFormClose } from "react-icons/gr";
import clsx from 'clsx';
import { IoBasketballOutline } from "react-icons/io5";

const useStyles = makeStyles((theme) => ({
  betBox: {
    overflow: "hidden",
    marginTop: "15px",
    background: theme.palette.background.cardbacground,
  },
  header: {

    background: theme.palette.background.heading,
    padding: "10px",
    "& svg": { marginRight: "7px", fontSize: "20px", }
  },
  betdetails: {
    padding: "10px",
  },
  textBoxBet: {
    padding: "10px",
    background: theme.palette.background.heading,
    color: "#fff",
    boxShadow: "inset -10px -10px 20px rgb(255 255 255 / 8%), inset 10px 10px 20px rgb(0 0 0 / 25%)",
    width: "120px", marginRight: "10px",
    "& h5": {
      color: "#fff",
    },
  },
  textField: {
    background: theme.palette.background.heading,
    color: theme.palette.text.white,
    boxShadow: "inset -10px -10px 20px rgb(255 255 255 / 8%), inset 10px 10px 20px rgb(0 0 0 / 25%)",
    borderRadius: "5px",
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#39AED0 !important",
    },
    "& label": {
      color: "#39AED0",
    },
    "&  input": {
      color: theme.palette.text.white,
    },
  },
}));

export default function (props) {
  const classes = useStyles();
  const { element, getBetSlips } = props;
  const [betDetails, setBetDetails] = useState([]);
  const [amount, setAmount] = useState(0);
  const [winAmount, setWinAmount] = useState(0);

  useEffect(() => {
    console.log("element : ", element)
  })

  const getTeamName = (data, bettype) => {
    if (bettype?.search("Home") > 0 || bettype?.search("home") > 0) {
      return data?.home?.name
    }else if (bettype?.search("Away") > 0 || bettype?.search("away") > 0) {
      return data?.away?.name;
    }else if (bettype?.search("even") > 0 || bettype?.search("Even") > 0) {
      return "Odd Even";
    }else{
      return "Odds";
    }
  }

  const getTeamLogo = (data, bettype) => {
    if (bettype?.search("Home") > 0 || bettype?.search("home") > 0) {
      return data?.home?.logo
    }

    if (bettype?.search("Away") > 0 || bettype?.search("away") > 0) {
      return data?.away?.logo;
    }
  }

  const cancelBet = () => {
    localStorage.setItem("betslips", "[]");
    window.location.reload();
  }

  const checkAmount = (e) => {
    const winAmount = Number(Number(e.target.value) * Number(element.odds)).toFixed(0);
    element.amount = Number(e.target.value);
    element.winAmount = Number(winAmount);
    localStorage.setItem("betslips", JSON.stringify([element]))
    setWinAmount(winAmount);
    getBetSlips()
  }

  return (
    <Paper className={classes.betBox} elevation={2}>
      <Box className={classes.header}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box className="flexjustify">
              <IoBasketballOutline />
              <Typography variant="body1" color="primary">{element?.gameData?.league?.name}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} align="right">
            <img src="images/close_icon.png" alt="image" style={{ cursor: "pointer" }} onClick={() => cancelBet()} />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.betdetails}>
        <Box className="flexjustify">
          <img src={getTeamLogo(element?.gameData?.teams, element?.betType)} alt="" style={{ marginRight: "10px", height: "1.4rem", width: "1.4rem", borderRadius: "50%" }} />
          <Typography variant="body2" color="primary">{getTeamName(element?.gameData?.teams, element?.betType)}</Typography>
        </Box>
        <Box mt={1} className="justifyBetween">
          <Box className={classes.textBoxBet} textAlign="center"><Typography variant="h5" color="primary">{element.odds}</Typography></Box>
          <Typography variant="body2" color="primary">{element?.betType}</Typography>
        </Box>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Wager"
                // placeholder="100"
                id="inputID"
                fullWidth
                maxRows="5"
                onChange={(e) => checkAmount(e)}
                className={clsx(classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start" style={{
                    color: " #FA9131",
                    fontSize: "18px"
                  }}><Typography variant="h6">$</Typography></InputAdornment>,
                }}
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}><TextField
              label="To Win"
              // placeholder="183.00"
              id="inputID"
              fullWidth
              value={winAmount}
              className={clsx(classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start" style={{
                  color: " #FA9131",
                  fontSize: "18px"
                }}><Typography variant="h6">$</Typography></InputAdornment>,
              }}
              variant="filled"/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
}
