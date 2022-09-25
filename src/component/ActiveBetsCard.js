import React, { useState } from 'react';
import { makeStyles, Box, Typography, Paper, Button } from '@material-ui/core';
import { IoBasketballSharp } from "react-icons/io5";
import { SiBinance } from "react-icons/si";
import { BsCheck2 } from "react-icons/bs";
import dateFormat from 'dateformat';
import { claimBet } from "src/services/MoneyLineBets";
import SnackbarService from 'src/services/SnackbarService';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useMoralis } from "react-moralis";

const useStyles = makeStyles((theme) => ({
    headerBetWin: {
        background: theme.palette.background.heading,
        padding: "8px 12px",
        "& p.win": {
            color: "#E45A5A",
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
    mainBox: {
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
    loweroponent: {
        borderTop: "1px dashed rgba(102, 162, 211, 0.3);",
        paddingTop: "7px",
    },
    footerBetWin: {
        background: "#39AED0",
        padding: "8px 12px",
        cursor: "pointer",
        "& p.win": {
            color: "#E45A5A",
        },
    },
    cashoutButton: {
        padding: "unset !important",
        margin: "unset",
        height: "auto",
        background: "transparent",
        border: "unset",
        outline: "unset",
        boxShadow: "unset",

        "&:hover": {
            padding: "unset !important",
            margin: "unset",
            height: "auto",
            background: "transparent",
            border: "unset",
            outline: "unset",
            boxShadow: "unset",
        },
    }
}));

function ActiveBetsCard(props) {
    const classes = useStyles();
    const { Moralis } = useMoralis();
    const [loader, setLoader] = useState(false);
    const [snackBarContent, setSnackBarContent] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState('');
    const [snackBarStatus, setSnackBarStatus] = useState('');
    const { data } = props;


    const snackBar = (msg, status) => {
        setSnackBarMsg(msg);
        setSnackBarStatus(status);
        setSnackBarContent(true);
        setTimeout(() => {
            setSnackBarContent(false);
        }, 2000);
    }

    const deleteData = async (obj) => {
        const query = new Moralis.Query('Bets')
        query.equalTo('objectId', obj)
        const object = await query.first()
        if (object) {
            object.destroy({ useMasterKey: true }).then(() => {
                console.log("Deleted Successfully!");
            }, (error) => {
                console.log(error);
            })
        }
    }

    const claim = async (odds, amount, objectId) => {
        setLoader(true);
        console.log("objectId: ", objectId);

        const res = await claimBet(Number(odds) + 2, amount);// amount);
        if(res){
            snackBar("Claim bet successfully", "success");
            setLoader(false);
            // deleteData(objectId);
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }else{
            snackBar("Something went wrong", "danger");
            setLoader(false);
        }
    }

    return (
        <>
            {snackBarContent && <SnackbarService msg={snackBarMsg} status={snackBarStatus} />}
            <Paper className={classes.mainBox} elevation={2}>
                <Box className={`${classes.headerBetWin} flexjustifycenter`}>

                    <Typography variant="body2">
                        {dateFormat(data.attributes?.createdAt, "hh:MM TT dd/mm/yyyy")}
                    </Typography>
                </Box>
                <Box className={classes.secondMainBox}>
                    <Box pb={1}>
                        <Box my={1} className={`${classes.subtitle} flexjustify`}>
                            <IoBasketballSharp />
                            <Typography variant="body2">
                                {data.attributes?.betType}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" style={{ color: "#39AED0" }}>
                                Correct Score
                            </Typography>
                        </Box>
                        <Box
                            className={`${classes.subtitle} justifyBetween`}>
                            <Typography variant="h6"><BsCheck2 />{data.attributes?.odds}</Typography>
                            <Typography variant="h6" color="primary"> {data.attributes?.odds} </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6">2-3</Typography>
                        </Box>
                    </Box>
                    {/* <Box className={classes.loweroponent}>
                        <Box my={1} className={`${classes.subtitle} flexjustify`}>
                            <IoBasketballSharp />
                            <Typography variant="body2">
                                Fritz, Taylor - Nadal, Rafael
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" style={{ color: "#39AED0" }}>
                                Correct Score
                            </Typography>
                        </Box>
                        <Box
                            className={`${classes.subtitle} justifyBetween`}>
                            <Typography variant="h6"><BsCheck2 />2:3</Typography>
                            <Typography variant="h6" color="primary"> 2.05 </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" >2-3</Typography>
                        </Box>
                    </Box> */}
                    <hr style={{ border: "1px solid rgba(71, 71, 71, 0.3)" }} />
                    <Box mt={1}>
                        <Box className={classes.lowerbetbox}>
                            <Box className="justifyBetween">
                                <Typography variant="body1" className="blue">Total Odds</Typography>
                                <Typography variant="h6">{data.attributes?.odds}</Typography>
                            </Box>
                            <Box className="justifyBetween">
                                <Typography variant="body1" className="blue">Total Stake</Typography>
                                <Typography variant="body1" className="icontext"> $ {data.attributes?.amount}  {/*<SiBinance />*/} </Typography>
                            </Box>
                            <Box className="justifyBetween">
                                <Typography variant="body1" className="blue">Payout</Typography>
                                <Typography variant="body1" className="icontext green"> $ {data.attributes?.winAmount} {/*<SiBinance />*/} </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>
                <Box className={`${classes.footerBetWin} flexjustifycenter`}>
                    {
                        loader ?
                            <Button variant="contained" size="large" disabled fullWidth className={`${classes.cashoutButton}`}><CircularProgress color="secondary" /></Button>
                            :
                            <Button variant="contained" size="large" onClick={() => claim(data.attributes?.odds, data.attributes?.winAmount, data.id)} fullWidth className={`${classes.cashoutButton}`}>Cashout $ {data.attributes?.winAmount}</Button>
                    }
                </Box>
            </Paper>
        </>
    )
}

export default ActiveBetsCard;