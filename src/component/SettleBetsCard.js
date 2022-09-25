import React from 'react';
import { makeStyles, Box, Typography, Paper } from '@material-ui/core';
import { IoBasketballSharp } from "react-icons/io5";
import { SiBinance } from "react-icons/si";
import { BsCheck2 } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
    headerBetWin: {
        background: theme.palette.background.heading,
        padding: "8px 12px",
        "& p.win": {
          color: "#39AED0",
        },
      },
      secondMainBox: { padding: "10px", },
      subtitle: {
    
        paddingTop: "5px",
        "& svg": {
          color: "#39AED0",
          fontSize: "16px",
          marginRight: "7px",
        },
        "& h6": {
          fontSize: "14px",
          lineHeight: "1.2",
          color: theme.palette.text.noticetext,
        },
      },
      winnig: {
        // background: theme.palette.background.heading,
        position: "relative",
        borderRadius: "20px 20px 10px 10px",
        boxShadow: "0px 0px 2px rgb(255 255 255 / 40%), 5px 5px 10px rgb(0 0 0 / 25%)",
        zIndex: "1",
        "&::before": {
          content:"' '",
          position:"absolute",
          top:"-2px",
          left:"-2px",
          height:"calc(100% + 4px)",
          width:"calc(100% + 4px)",
          zIndex: "-1",
          borderRadius: "10px",
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(315deg, #70fbab 10%, #4b6483 35%, #b621fe00 54%)",
          "& .mainBox": {
            position: "absolute", top: "0px",
            left: "0px"
          }
        }
      },
      loss: {
        zIndex: "1",
        position: "relative",
        borderRadius: "20px 20px 10px 10px",
        boxShadow: "0px 0px 2px rgb(255 255 255 / 40%), 5px 5px 10px rgb(0 0 0 / 25%)",
        // border: "solid 2px transparent",
        // borderImage: "linear-gradient(to bottom right, #b827fc00 0%, #2c90fc00 25%, #f9f9f900 50%, #fe3737 75%, #fd1818 100%)",
        // borderImageSlice: 1,
        "&::before": {
          content:"' '",
          position:"absolute",
          top:"-2px",
          left:"-2px",
          zIndex: "-1",
          height:"calc(100% + 4px)",
          width:"calc(100% + 4px)",
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(315deg, #c23a28 10%, #f91f55 35%, #b621fe00 54%)",
          borderRadius: "10px",
          "& .mainBox": {
            position: "absolute", top: "0px",
            left: "0px"
          }
        }
      },
      lowerbetbox: {
        "& p": {
          fontSize: "12px",
          marginBottom: "4px",
          "&.blue": { color: "#39AED0", },
        },
        "& h6": {
          fontSize: "14px",
        },
        "& svg": {
          color: "orange",
          fontSize: "14px",
          marginLeft: "10px",
        },
      },
}));

function SettleBetsCard(props) {
    const classes = useStyles();
    const { data } = props;
    return (
        <Box className={data?.result === "Win" ? `${classes.winnig}` : `${classes.loss}`}>
            <Paper className="mainBox" elevation={2}>
                <Box className={`${classes.headerBetWin} justifyBetween`}>
                    {data?.result === "Win" ? <Typography variant="body2" className="win" style={{ color: "#3BBD2A" }} >
                        Win
                    </Typography> : <Typography variant="body2" className="win" style={{ color: "#E45A5A" }} >
                        Loss
                    </Typography>}
                    <Typography variant="body2">
                        10:22 PM 7/6/2022
                    </Typography>
                </Box>
                <Box className={classes.secondMainBox}>
                    <Box my={1} className={`${classes.subtitle} flexjustify`}>
                        <IoBasketballSharp />
                        <Typography variant="body2">
                            Fritz, Taylor - Nadal, Rafael
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" style={{ color: "#39AED0" }}>
                            Winner
                        </Typography>
                    </Box>
                    <Box
                        className={`${classes.subtitle} justifyBetween`}>
                        <Typography variant="body2">Nadal, Rafael</Typography>
                        <Typography variant="h6"> 2.05 </Typography>
                    </Box>
                    <Box mt={1}>
                        <Typography variant="h6">2-3</Typography>
                    </Box>
                    <hr style={{ border: "1px solid rgba(71, 71, 71, 0.3)" }} />
                    <Box mt={1}>
                        <Box className={classes.lowerbetbox}>
                            <Box className="justifyBetween">
                                <Typography variant="body1" className="blue">Total Odds</Typography>
                                <Typography variant="h6">2.00 </Typography>
                            </Box>
                            <Box className="justifyBetween">
                                <Typography variant="body1" className="blue">Total Stake</Typography>
                                <Typography variant="body1" className="icontext"> 0.0121255  <SiBinance /> </Typography>
                            </Box>
                            <Box className="justifyBetween">
                                <Typography variant="body1" className="blue">Payout</Typography>
                                <Typography variant="body1" className="icontext green"> 0.0121255 <SiBinance /> </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default SettleBetsCard