import React, { useContext, useEffect, useState } from "react";
import {
    Paper,
    Box,
    Typography,
    IconButton,
    Grid,
    Container,
    Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FiClock } from "react-icons/fi";
import TabsComponent from './TabsComponent';
import { getSingleGame, getOddAPI } from "src/services/ApiCall";
import dateFormat from 'dateformat';
import { OddsContext } from "src/context/Odds";
import { BsRecord2 } from "react-icons/bs";
import "../../../scss/main.css"

const useStyles = makeStyles((theme) => ({
    activeBtnClass: {
        top: 0,
        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
        borderTop: "1px solid rgba(112, 213, 251, 1)",
        borderBottom: "1px solid rgba(75, 78, 131, 1)",
        borderLeft: "1px solid rgba(112, 213, 251, 1)",
        borderRight: "1px solid rgba(75, 78, 131, 1)",
        borderRadius: "10px"
    },
    PostBox: {
        height: "auto",
        marginBottom: "15px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
        borderRadius: "30px",
        "& h6": {
            color: theme.palette.text.primary,
        },
        "&  img": {
            height: "1 rem",
            width: "1 rem"

        },
        "& .titlesec": {
            height: "56px",
            background: theme.palette.background.heading,
            borderRadius: "30px 30px 0px 0px",
            paddingRight: "18px",
            "& .child": {
                padding: "12px 24px",
            },
            "& .subbaby": {
                display: "flex",
                alignItems: "center",
            },
            "&  img": {
                height: "2.5rem",
                width: "2.5rem"

            }
        },
        "& svg": { color: "white", fontSize: "20px" },
        "& .imgsec": {
            background:
                "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(/images/bansketballbanner.png)",
            height: "282px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "0px",
            "& button": {
                background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
                border: "0.2px solid #383838",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                borderRadius: "5px",
                color: "#FA9131",
                fontSize: "20px",
                height: "28px",
                transform: "scale(0.7, 1)",
            },
            "& .scorecew": {
                width: "71px",
                height: "60px",
                background: "linear-gradient(180deg, #424344 0%, #232427 100%)",
                borderRadius: "10px",
                "& body2": {
                    textAlign: "center",
                },
            },
            "& p": {
                color: '#fff'
            },
            "&.active": {
                top: '0px !important',
                border: "1px solid #70D5FB",

            },
        },
    },
    paddingsectionx: {
        padding: "10px 15px 25px 15px",
    },
    backGrid: {

    },
    btnlive: {

    }
}));

export default function CosafaCupGame(props) {
    const { setpopup, handleClosecosafa, matchId } = props;
    const [matchDetails, setMatchDetails] = useState([])
    const classes = useStyles();
    const oddsContext = useContext(OddsContext);
    const [threeWayOdds, setThreeWayOdds] = useState([]);
    const [tabview, setTabView] = useState("LIVE");

    useEffect(() => {
        console.log("MatchId : ", matchId);
        getMatcheDetails();
        getThreeWayOddAPIOddUsignGameId();
    }, []);

    const getMatcheDetails = async () => {
        try {
            const endPoint = 'getSingleGameDetails';
            const response = await getSingleGame(endPoint, matchId);
            if (response) {
                setMatchDetails(response.data.Data)
            } else {
                setMatchDetails([]);
            }
        } catch (error) {
            console.log("error" + error);
        }
    };

    const getThreeWayOddAPIOddUsignGameId = async () => {
        try {
            const endPoint = "threeWayOddAPI";
            const response = await getOddAPI(endPoint, matchId);
            if (response.data.status == "success") {
                setThreeWayOdds(response.data.data[0].bookmakers[0].bets[0].values);
            } else {
                setThreeWayOdds([])
            }
        } catch (error) {
            console.log({ error: error });
        }
    };

    return (
        <Paper className={classes.PostBox}>
            <Grid style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3rem",
                paddingTop: "3rem",
                paddingBottom: "2rem",

            }}>
                <Grid className={classes.btnlive}>
                    <Button variant="contained" color="primary" size="large" style={{
                        borderRadius: "10px", borderTop: "1px solid rgba(112, 213, 251, 1)",
                        borderBottom: "1px solid rgba(75, 78, 131, 1)",
                        borderLeft: "1px solid rgba(112, 213, 251, 1)",
                        borderRight: "1px solid rgba(75, 78, 131, 1)",
                    }}
                        className={tabview === "LIVE" ? "activeBtnClass" : ""}
                        onClick={() => setTabView("LIVE")}
                    > <BsRecord2 fontSize="25px" />
                        LIVE
                    </Button>
                </Grid>
                <Grid>
                    <Button variant="contained" color="primary" size="large" style={{ borderRadius: "10px" }}
                        className={tabview === "UPCOMING" ? "activeBtnClass" : ""}
                        on Click={() => setTabView("UPCOMING")}
                    >  UPCOMING </Button></Grid>
                <Grid>
                    <Button variant="contained" color="primary" size="large" style={{ borderRadius: "10px" }}
                        className={tabview === "UPCOMING" ? "activeBtnClass" : ""}
                        on Click={() => setTabView("UPCOMING")}
                    >  FUTURES </Button></Grid>

            </Grid>


            {/*<Box className="child">
                    <Box className="baby">
                        <Box className="subbaby">
                            <img src={matchDetails.length > 0 ? matchDetails[0].league.logo : ""} alt="image" />
                            &nbsp;&nbsp;&nbsp;
                            <Typography variant="h6">{matchDetails.length > 0 ? matchDetails[0].league.name : "-"}</Typography>
                        </Box>
                    </Box>
    </Box>*/}

            {/*<Box className="imgsec" width="100%" pt={2}>
                {matchDetails.length > 0 && (matchDetails[0].status.long != "Not Started" &&
                    <>
                        <Box className="flexCenter">
                            <Typography variant="body2">
                                {matchDetails.length > 0 ? matchDetails[0].status.long : "-"} <FiClock style={{ fontSize: "11px" }} /> {matchDetails.length > 0 ? dateFormat( new Date() , "hh : mm") : "-"}
                            </Typography>
                        </Box>
                        <Container
                            maxWidth="sm"
                            className="justifyBetween"
                            mt={1}
                            style={{ display: "flex", marginTop: "5px" }}
                        >
                            <Box display="flex" alignItems="center">
                                <img src={matchDetails.length > 0 ? matchDetails[0].teams.away.logo : "-"} alt="hello" /> &nbsp;&nbsp;
                                <Typography variant="body2">{matchDetails.length > 0 ? matchDetails[0].teams.away.name : "-"}</Typography>
                            </Box>
                            <Box className="justifyBetween" style={{ display: "flex" }}>
                                <Button>{matchDetails.length > 0 ? matchDetails[0].scores.away.total : "-"}</Button>&nbsp;&nbsp;
                                <img src="/images/vs1.png" />
                                <Button>{matchDetails.length > 0 ? matchDetails[0].scores.home.total : "-"}</Button>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <img src={matchDetails.length > 0 ? matchDetails[0].teams.home.logo : "-"} alt="hello" /> &nbsp;&nbsp;
                                <Typography variant="body2">
                                    {matchDetails.length > 0 ? matchDetails[0].teams.home.name : "-"}
                                </Typography>
                            </Box>
                        </Container>
                        <Container maxWidth="xs" style={{ marginTop: '15px', marginBottom: '15px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}></Grid>
                                <Grid item xs={1}>
                                    <Box className={classes.textTop}>
                                        <Typography variant="body1">Q1</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={1}>
                                    <Box className={classes.textTop}>
                                        <Typography variant="body1">Q2</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={1}>
                                    <Box className={classes.textTop}>
                                        <Typography variant="body1">Q3</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={1}>
                                    <Box className={classes.textTop}>
                                        <Typography variant="body1">Q4</Typography>
                                    </Box>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={4}></Grid>
                                    <Grid item xs={1}>
                                        <Box className={classes.textTop}>
                                            <Typography variant="body1">{matchDetails.length > 0 ? (matchDetails[0].scores.away.quarter_1 != null ? matchDetails[0].scores.away.quarter_1 : "-") : "-"}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Box className={classes.textTop}>
                                            <Typography variant="body1">{matchDetails.length > 0 ? (matchDetails[0].scores.away.quarter_2 != null ? matchDetails[0].scores.away.quarter_2 : "-") : "-"}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Box className={classes.textTop}>
                                            <Typography variant="body1">{matchDetails.length > 0 ? (matchDetails[0].scores.away.quarter_3 != null ? matchDetails[0].scores.away.quarter_3 : "-") : "-"}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Box className={classes.textTop}>
                                            <Typography variant="body1">{matchDetails.length > 0 ? (matchDetails[0].scores.away.quarter_4 != null ? matchDetails[0].scores.away.quarter_4 : "-") : "-"}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={4}></Grid>
                                    <Grid item xs={1}>
                                        <Box className={classes.textTop}>
                                            <Typography variant="body1">{matchDetails.length > 0 ? (matchDetails[0].scores.home.quarter_1 != null ? matchDetails[0].scores.home.quarter_1 : "-") : "-"}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Box className={classes.textTop}>
                                            <Typography variant="body1">{matchDetails.length > 0 ? (matchDetails[0].scores.home.quarter_2 != null ? matchDetails[0].scores.home.quarter_2 : "-") : "-"}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Box className={classes.textTop}>
                                            <Typography variant="body1">{matchDetails.length > 0 ? (matchDetails[0].scores.home.quarter_3 != null ? matchDetails[0].scores.home.quarter_3 : "-") : "-"}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Box className={classes.textTop}>
                                            <Typography variant="body1">{matchDetails.length > 0 ? (matchDetails[0].scores.home.quarter_4 != null ? matchDetails[0].scores.home.quarter_4 : "-") : "-"}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                        <Box width="100%" className="flexCenter" mt={1} style={{marginTop: "2rem"}}>
                            <Box className="scorecew flexCenter">
                                <Box>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                        style={{ textAlign: "center", color: "#5C82A8" }}
                                    >
                                        W1
                                    </Typography>
                                    <Typography variant="body2">
                                        {threeWayOdds.length > 0 ? threeWayOdds[0].odd : "-"}
                                    </Typography>
                                </Box>
                            </Box>
                            &nbsp;&nbsp;&nbsp;
                            <Box className="scorecew flexCenter">
                                <Box>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                        style={{ textAlign: "center", color: '#5C82A8' }}
                                    >
                                        X
                                    </Typography>
                                    <Typography variant="body2">
                                        {threeWayOdds.length > 0 ? threeWayOdds[1].odd : "-"}
                                    </Typography>
                                </Box>
                            </Box>
                            &nbsp;&nbsp;&nbsp;
                            <Box className="scorecew flexCenter">
                                <Box>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                        style={{ textAlign: "center", color: '#5C82A8' }}
                                    >
                                        W2
                                    </Typography>
                                    <Typography variant="body2">
                                        {threeWayOdds.length > 0 ? threeWayOdds[2].odd : "-"}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
                {matchDetails.length > 0 && (matchDetails[0].status.long == "Not Started" &&
                    <>
                        <Box className="flexCenter">
                            <Typography variant="body2">
                                {matchDetails.length > 0 ? matchDetails[0].status.long : "-"}
                            </Typography>
                        </Box>

                        <Container
                            maxWidth="sm"
                            className="justifyBetween"
                            mt={1}
                            style={{ display: "flex", marginTop: "2rem" }}
                        >
                            <Box display="flex" alignItems="center">
                                <img src={matchDetails.length > 0 ? matchDetails[0].teams.away.logo : "-"} alt="hello" /> &nbsp;&nbsp;
                                <Typography variant="body2">{matchDetails.length > 0 ? matchDetails[0].teams.away.name : "-"}</Typography>
                            </Box>
                            <Box className="justifyBetween" style={{ display: "flex" }}>
                                <img src="/images/vs1.png" />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <img src={matchDetails.length > 0 ? matchDetails[0].teams.home.logo : "-"} alt="hello" /> &nbsp;&nbsp;
                                <Typography variant="body2">
                                    {matchDetails.length > 0 ? matchDetails[0].teams.home.name : "-"}
                                </Typography>
                            </Box>
                        </Container>
                        <Box width="100%" className="flexCenter" mt={1} style={{marginTop: "5rem"}}>
                            <Box className="scorecew flexCenter">
                                <Box>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                        style={{ textAlign: "center", color: "#5C82A8" }}
                                    >
                                        W1
                                    </Typography>
                                    <Typography variant="body2">
                                        {threeWayOdds.length > 0 ? threeWayOdds[0].odd : "-"}
                                    </Typography>
                                </Box>
                            </Box>
                            &nbsp;&nbsp;&nbsp;
                            <Box className="scorecew flexCenter">
                                <Box>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                        style={{ textAlign: "center", color: '#5C82A8' }}
                                    >
                                        X
                                    </Typography>
                                    <Typography variant="body2">
                                        {threeWayOdds.length > 0 ? threeWayOdds[1].odd : "-"}
                                    </Typography>
                                </Box>
                            </Box>
                            &nbsp;&nbsp;&nbsp;
                            <Box className="scorecew flexCenter">
                                <Box>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                        style={{ textAlign: "center", color: '#5C82A8' }}
                                    >
                                        W2
                                    </Typography>
                                    <Typography variant="body2">
                                        {threeWayOdds.length > 0 ? threeWayOdds[2].odd : "-"}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
               { matchDetails[0].status.long != "Not Started" ? getLiveGameDetails() : <h1>HI</h1> } 
    </Box>*/}
            <Box className={classes.paddingsection}>
                <TabsComponent matchId={matchId} />
            </Box>
        </Paper>
    );
}
