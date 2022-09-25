import React from "react";
import {
  makeStyles,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Box,
  Paper,
  Avatar,
  Grid
} from "@material-ui/core";
import LeaderBoardTable from "./LeaderBoardTable";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    padding: "10px 20px",
    position: "relative",
    "& h4": {
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
    },
  },
  appBar: {
    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%), -10px -10px 20px rgb(255 255 255 / 25%), 10px 10px 20px rgb(0 0 0 / 25%)",
    borderRadius: "0px 0px 40px 40px",
    position: "relative",
    background: theme.palette.background.Refferal,
    // background: theme.palette.background.heading,
    "& h5": {
      fontSize: "13px",
    },

  },
  bin: {
    border: "1px solid #35373E",
    borderRadius: "100px",
  },
  title: {
    "& h6": {
      fontSize: "14px",
      color: "#39AED0",
      // maxWidth: "600px",
    },
    "& h5": {
      color: theme.palette.text.white,
      paddingBottom: "5px",
    },
  },
  toolbar: {
    justifyContent: "center",
    color: theme.palette.text.primary,


  },
  AvatarIcon: {
    cursor: "pointer",
  },
}));

const LeaderBoard = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Paper elevation={2} className={classes.mainBox}>

      <Grid container spacing alignItems="center">
        <Grid item xs={4}>
          <Avatar className={classes.AvatarIcon} onClick={() => history.push("/")}>   <BsArrowLeft /></Avatar>
          {/* <IconButton
            edge="start"
            color="inherit"h
            onClick={() => history.push("/")}
            aria-label="close"
          >
            <BsArrowLeft />
          </IconButton> */}
        </Grid>
        <Grid item xs={8} lg={4} md={6}>
          <Box className={classes.appBar}>
            <Toolbar className={classes.toolbar}>

              <Typography variant="h4" align="center">LEADERBOARD</Typography>
            </Toolbar>

          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>

      <Box mt={4} className={`${classes.title}`}>
        <Box align="center">
          <Typography variant="h5">
            Top-300 leaders
          </Typography>
          <Typography variant="h6" color="primary">
            Here you can find the information about our best players! They are
            already playing, earning and enjoying! Feel free to join them!
          </Typography>
        </Box>
      </Box>
      <Paper elevation={2} style={{ marginTop: "20px" }}>
        <LeaderBoardTable />
      </Paper>
    </Paper>
  );
};

export default LeaderBoard;
