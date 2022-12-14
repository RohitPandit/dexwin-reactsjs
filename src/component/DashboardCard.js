import React, { useContext, useEffect, useState } from "react";
import {
  makeStyles,
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
  Divider,
  Paper,
  withStyles,
  Select,
  MenuItem
} from "@material-ui/core";
import { FiClock } from "react-icons/fi";
import Todaybutton from "src/views/pages/Dashboard/Todaybutton";
import Countnumber from "./Countnumber";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Circularslider from "./Circularslider";
import { useHistory } from "react-router-dom";
import { ModalContext } from "src/component/context";
import Modal from "src/component/Modal";
import CosafaCupGame from "src/views/pages/CosafaCupGame/Index";
import GameTwoButton from "src/views/pages/Dashboard/GameTwoButton";
import dateFormat from 'dateformat';
import { OddsContext } from "src/context/Odds";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import styled from 'styled-components'
const Accordion = withStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    borderRadius: "20px !important",
    background: theme.palette.background.heading,
    boxShadow: "-4px -8px 20px rgb(77 73 73 / 40%), 8px 10px 20px rgb(0 0 0 / 25%)", boxSizing: "border-box",
    borderRadius: "20px !important",
    background: theme.palette.background.heading,
    boxShadow: "-4px -8px 20px rgb(77 73 73 / 40%), 8px 10px 20px rgb(0 0 0 / 25%)",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      border: " 1px solid #3d3d3d",
      background:
        "linear-gradient( 152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      backdropFilter: "blur(42px)",
    },
  },
}))(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    borderRadius: "20px !important",
    background: theme.palette.background.heading,
    "&$expanded": {
      minHeight: 50,
      borderBottom: "0",
      color: "#FFF",
      background: theme.palette.background.cardhead,
      border: " none !important",
      borderRadius: '30px 30px 0px 0px'
    },
    "@media(max-width:605px)": {
      fontSize: "10px",
      "&$expanded": {
        borderBottom: "0",
        color: "#FFF",
        // backgroundColor: "transparent",
        border: " none !important",
      },
    },
  },
  content: {
    background: "000 !important",
    color: "#fff",
    borderRadius: "5px",
    "&$expanded": {
      margin: "0px 0",
      border: " none !important",
    },
  },
  expanded: {
    margin: "0",
  },
}))(MuiAccordionSummary);


const AccordionDetails = withStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    borderRadius: " 0px 0px 20px 20px !important",
    padding: "1px 0px 8px",
    "& svg": {
      color: "red",
    },
  },
}))(MuiAccordionDetails);
const useStyles = makeStyles((theme) => ({
  gradientButton1: {
    font: "normal 700 18px/24px Red Hat Mono",
    color: "#FFFFFF",
    background: "linear-gradient(115.29deg, #F54F4F 15.07%, rgba(182, 17, 107, 0.91) 104.4%)",
    borderRadius: "22px",
    maxWdth: "85px",
    height: "32px",
    padding: "0 11px"
  },
  gradientButton2: {
    font: "normal 700 18px/24px Red Hat Mono",
    color: "#FFFFFF",
    background: "linear-gradient(115.29deg, rgba(182, 17, 107, 0.91) 15.07%, rgba(96, 44, 181, 0.57) 104.4%)",
    borderRadius: "22px",
    maxWdth: "85px",
    height: "32px",
    padding: "0 11px"
  },
  DashboardCardbox: {
    borderRadius: "20px",
    "& .headingBox": {
      background: theme.palette.background.heading,
      borderRadius: "20px 20px 0px 0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      "& h6": {
        color: theme.palette.text.primary,
        // fontSize: "12px",
        display: "flex",
        alignItems: "center",
      },
    },
    "& img": {
      height: "1.5rem",
      width: "1.5rem",
    },
    "& .subheading": {
      display: "flex",
      background: theme.palette.background.cardbackground,
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      "& p": {
        color: "#39AED0",
        display: "flex",
        alignItems: "center",
      },
    },
    "& .mainContentBox": {
      padding: "15px 10px",
      "& .innerContent": {
        display: "flex",
        alignItems: "center",
      },
      "& .innerIcontext": {
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        paddingTop: "15px",
        "& p": {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          color: "#39AED0",
        },
      },
    },
  },
  innerContentBox: {
    display: "flex",
    alignItems: "center",
    padding: "5px",
    "& div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  liveAndUpcomingmainContentBox: {
    padding: "0px 20px 20px",
    "& .innerIcontext": {
      display: "flex",
      alignItems: "center",
      justifyContent: "right",
      paddingTop: "15px",
      "& p": {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        color: "#39AED0",
      },
    },
  },

  playerName: {
    display: "flex",
    alignItems: "center",
    "& img": {
      height: "1.5rem",
      width: "1.5rem",
      borderRadius: "50%",
    },
  },
}));
const SelectionDiv = styled.div`
    display: flex;
    gap: 5rem;
`;
const YESDiv = styled.p`
font: nomal 600 12px/16px K2D;
color: #9B9B9B;`;
const FlexDiv = styled.div`
display: flex;
gap: 1rem;`;
const FlexDiv1 = styled.div`
display: flex;
align-items: center;
width: 100%;
max-width: 18rem;
`;
const ButtonGradient1 = styled.button`
font: normal 700 18px/24px Red Hat Mono;
color: #FFFFFF;
background: linear-gradient(115.29deg, #F54F4F 15.07%, rgba(182, 17, 107, 0.91) 104.4%);
border-radius: 22px;
max-width: 85px;
height: 32px;
padding: 0 16px;
`;
const ButtonGradient2 = styled(ButtonGradient1)`
background: linear-gradient(115.29deg, rgba(182, 17, 107, 0.91) 15.07%, rgba(96, 44, 181, 0.57) 104.4%);
`;
const ParentFlex = styled.div`
display: flex;
width: 62rem;
justify-content: space-between;
`;
const Div = styled.div`
display: flex;
flex-direction: column;
gap: 4rem;`;
export default function   DashboardCard(props) {
  const oddsContext = useContext(OddsContext);
  const classes = useStyles();
  const [select1, setSelect1] = useState("Points");
  const { type, liveLeaguesdata, upcommingleaguesData } = props;
  const [showModal, updateShowModal] = React.useState(false);
  const [gameId, setGameId] = useState('');


  const handleChange1 = (event) => {
    setSelect1(event.target.value);
};
  const toggleModal = () => {
    updateShowModal((state) => !state)
    if (showModal) {
      oddsContext.clearData()
    }
  };

  const modelClick = (id) => {
    setGameId(id);
    oddsContext.getPopularOdds(id);
    oddsContext.getPeriodicOdds(id);
    oddsContext.getExoticOdds(id);
    toggleModal();
  }
  const [expanded, setExpanded] = React.useState("panel1");

  return (
    <>
      {type === "future" ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Accordion
                square
                defaultExpanded={true}
              >
                <AccordionSummary
                  id="panel1a-header"
                  expandIcon={
                    <Box className={classes.navAccordionicon} >
                      {expanded === true ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </Box>
                  }
                >
                  <Grid container spacing={2}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '57rem', alignItems: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '26rem', alignItems: 'center' }}>
                        <Typography variant="h6" style={{ fontSize: "14px" }}>
                          ASSISTS
                        </Typography>
                        <SelectionDiv>
                          <YESDiv>Yes</YESDiv>
                          <YESDiv>No</YESDiv>
                        </SelectionDiv>
                      </div>
                      <SelectionDiv>
                        <YESDiv>Yes</YESDiv>
                        <YESDiv>No</YESDiv>
                      </SelectionDiv>
                    </div>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails className="accordiandetails">
                  <ParentFlex>
                    <div style={{ display: 'flex' }} >
                      <FlexDiv1>
                        <Box className={classes.heading2}>
                          <Typography variant="body1" style={{ color: '#39AED0', marginLeft: '10px', width: '17rem' }}>Luka Doncic to have 7+ assists</Typography>
                        </Box>
                      </FlexDiv1>
                      <Grid container spacing={2}>
                        <FlexDiv>
                          <Box mt={2} className={classes.buttonBox}>
                            <Button variant="contained" className={classes.gradientButton1}>+300</Button>
                          </Box>
                          <Box mt={2} className={classes.buttonBox}>
                            <Button
                              variant="contained"
                              className={classes.gradientButton2}
                            >
                              -150
                            </Button>
                          </Box>
                        </FlexDiv>
                        {/* <Grid item xs={10} align="right">
                                  <Box className={classes.innerIcontext} style={{ padding: "0px" }}>
                                      <Typography variant="body2">
                                          View More Bets<ChevronRightIcon />
                                      </Typography>
                                  </Box>
                              </Grid> */}
                      </Grid>
                    </div>
                    <div style={{
                      background: "#5B5B5B",
                      transform: "matrix(-1, 0, 0, 1, 0, 0)",
                      width: "1px"
                    }}></div>
                    <div style={{ display: 'flex', gap: '4rem' }} >
                      <FlexDiv1>
                        <Box className={classes.heading2}>
                          <Typography variant="body1" style={{ color: '#39AED0', marginLeft: '10px' }}>Lebron James to have less than 5 assists</Typography>
                        </Box>
                      </FlexDiv1>
                      <Grid container spacing={2}>
                        <FlexDiv>
                          <Box mt={2} className={classes.buttonBox}>
                            <Button variant="contained" className={classes.gradientButton1}>+300</Button>
                          </Box>
                          <Box mt={2} className={classes.buttonBox}>
                            <Button
                              variant="contained"
                              className={classes.gradientButton2}
                            >
                              -150
                            </Button>
                          </Box>
                        </FlexDiv>
                      </Grid>
                    </div>
                  </ParentFlex>
                </AccordionDetails>
              </Accordion>
            </Grid>

          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Accordion
                square
                defaultExpanded={true}
              >
                <AccordionSummary
                  id="panel1a-header"
                  expandIcon={
                    <Box className={classes.navAccordionicon} >
                      {expanded === true ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </Box>
                  }
                >
                  <Grid container spacing={2}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '57rem', alignItems: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '26rem', alignItems: 'center' }}>
                        <Typography variant="h6" style={{ fontSize: "14px" }}>
                          ASSISTS
                        </Typography>
                        <SelectionDiv>
                          <YESDiv>Yes</YESDiv>
                          <YESDiv>No</YESDiv>
                        </SelectionDiv>
                      </div>
                      <SelectionDiv>
                        <YESDiv>Yes</YESDiv>
                        <YESDiv>No</YESDiv>
                      </SelectionDiv>
                    </div>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails className="accordiandetails">
                  <ParentFlex>
                    <div style={{ display: 'flex' }} >
                      <FlexDiv1>
                        <Box className={classes.heading2}>
                          <Typography variant="body1" style={{ color: '#39AED0', marginLeft: '10px', width: '17rem' }}>Luka Doncic to have 7+ assists</Typography>
                        </Box>
                      </FlexDiv1>
                      <Grid container spacing={2}>
                        <FlexDiv>
                          <Box mt={2} className={classes.buttonBox}>
                            <Button variant="contained" className={classes.gradientButton1}>+300</Button>
                          </Box>
                          <Box mt={2} className={classes.buttonBox}>
                            <Button
                              variant="contained"
                              className={classes.gradientButton2}
                            >
                              -150
                            </Button>
                          </Box>
                        </FlexDiv>
                      </Grid>
                    </div>
                    <div style={{
                      background: "#5B5B5B",
                      transform: "matrix(-1, 0, 0, 1, 0, 0)",
                      width: "1px"
                    }}></div>
                    <div style={{ display: 'flex', gap: '4rem' }} >
                      <FlexDiv1>
                        <Box className={classes.heading2}>
                          <Typography variant="body1" style={{ color: '#39AED0', marginLeft: '10px' }}>Lebron James to have less than 5 assists</Typography>
                        </Box>
                      </FlexDiv1>
                      <Grid container spacing={2}>
                        <FlexDiv>
                          <Box mt={2} className={classes.buttonBox}>
                            <Button variant="contained" className={classes.gradientButton1}>+300</Button>
                          </Box>
                          <Box mt={2} className={classes.buttonBox}>
                            <Button
                              variant="contained"
                              className={classes.gradientButton2}
                            >
                              -150
                            </Button>
                          </Box>
                        </FlexDiv>
                      </Grid>
                    </div>
                  </ParentFlex>
                </AccordionDetails>
              </Accordion>
            </Grid>

          </Grid>
        </>
      ) : (
        (type === "live" ? liveLeaguesdata : upcommingleaguesData).map(
          (value) => {

            return (
              <Paper className={classes.DashboardCardbox} elevation={2}>
                <Box className="headingBox">
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={6}>
                      <Grid
                        container
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={7}>
                          <Box className="flexjustify">
                            <img
                              src={value.league.logo}

                              className="leagueLogo"
                            />{" "}
                            &nbsp; &nbsp;
                            <Typography
                              variant="body2"
                              style={{ color: "#39AED0" }}
                              id={value.league.id}
                            >
                              {value.league.name}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={5} align="center">
                          {type === "live" ? (
                            <>
                              <Typography
                                variant="body2"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                Quarter 1-4
                              </Typography>
                            </>
                          ) : (
                            <>
                              <Typography
                                variant="body2"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                LAST FIVE GAMES
                              </Typography>
                            </>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={1} >
                        <Grid item xs={4} align="center"
                          pt={4} style={{ paddingTop: "15px" }}>
                          <Typography
                            variant="body2"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",

                            }}
                          >
                            SPREAD
                          </Typography>
                        </Grid>
                        <Grid item xs={4} align="center">
                          <Typography
                            variant="body2"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "relative",
                              top: "10px"
                            }}
                          >
                            TOTAL
                          </Typography>
                          <div className="pointsdropdown">
                            <select style={{ borderRadius: '10px', backgroundColor: "#222222", color: "#787878" }}>
                              <option value="Points">Points</option>
                              <option value="Points1">Points1</option>
                              <option value="Points2">Points2</option>
                            </select>
                          </div>
                        </Grid>

                        <Grid item xs={4} align="center" style={{ paddingTop: "15px" }}>
                          <Typography variant="body2">GAME</Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                  </Grid>

                </Box>
                <Box className="subheading">
                  <Typography variant="body1">
                    {" "}
                    <img src="images/Vectorsec.png" />{" "}
                    &nbsp;&nbsp;&nbsp; {dateFormat(value.date, "dS mmmm, yyyy")}
                  </Typography>
                </Box>
                <Box className={classes.liveAndUpcomingmainContentBox} mt={1}>
                  <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={12} lg={6} md={6} sm={6}>
                      <Grid
                        container
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={7}>
                          <Box className={classes.playerName}>
                            <img
                              src={value.teams.away.logo}

                              id={value.teams.away.id}
                            />
                            &nbsp;&nbsp;
                            <Typography variant="h6" id={value.teams.away.id}>
                              {value.teams.away.name}
                            </Typography>
                          </Box>
                          <Box align="center" mt={1} mb={1}>
                            <Typography
                              variant="h5"
                              style={{ color: "#39AED0", marginLeft: "-55px" }}
                            >
                              VS
                            </Typography>
                          </Box>
                          <Box className={classes.playerName}>
                            <img
                              src={value.teams.home.logo}

                              id={value.teams.home.id}
                            />
                            &nbsp;&nbsp;
                            <Typography variant="h6" id={value.teams.home.id}>
                              {value.teams.home.name}{" "}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={5}>
                          <Box>
                            {type === "live" ? (
                              <Countnumber
                                TotalAway={value.scores.away.total}
                                TotalHome={value.scores.home.total}
                                AQuater1={value.scores.away.quarter_1}
                                AQuater2={value.scores.away.quarter_2}
                                AQuater3={value.scores.away.quarter_3}
                                AQuater4={value.scores.away.quarter_4}
                                HQuater1={value.scores.home.quarter_1}
                                HQuater2={value.scores.home.quarter_2}
                                HQuater3={value.scores.home.quarter_3}
                                HQuater4={value.scores.home.quarter_4}
                              />
                            ) : (
                              //gameid={ value.gameId }
                              <Div>
                              <Box>
                                <Grid container spacing={0} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Right.svg" alt="right-tick" />
                                  </Grid>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Cross.svg" alt="right-tick" />
                                  </Grid>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Minus.svg" alt="right-tick" />
                                  </Grid>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Right.svg" alt="right-tick" />
                                  </Grid>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Right.svg" alt="right-tick" />
                                  </Grid>
                                </Grid>
                              </Box>
                              <Box>
                                <Grid container spacing={0} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Right.svg" alt="right-tick" />
                                  </Grid>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Cross.svg" alt="right-tick" />
                                  </Grid>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Minus.svg" alt="right-tick" />
                                  </Grid>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Right.svg" alt="right-tick" />
                                  </Grid>
                                  <Grid item xs={1} className="tick">
                                    <img src="./images/Right.svg" alt="right-tick" />
                                  </Grid>
                                </Grid>
                              </Box>
                            </Div>
                            )}
                          </Box>
                        </Grid>

                        {/* <Grid item xs={5}>
                          <Div>
                            <Box>
                              <Grid container spacing={0} style={{ display: "flex", justifyContent: "center", alignItems: "center" ,  gap: "12px"}}>
                                <Grid item xs={1}>
                                  <img src="./images/Right.svg" alt="right-tick" />
                                </Grid>
                                <Grid item xs={1}>
                                  <img src="./images/Cross.svg" alt="right-tick" />
                                </Grid>
                                <Grid item xs={1}>
                                  <img src="./images/Minus.svg" alt="right-tick" />
                                </Grid>
                                <Grid item xs={1}>
                                  <img src="./images/Right.svg" alt="right-tick" />
                                </Grid>
                                <Grid item xs={1}>
                                  <img src="./images/Right.svg" alt="right-tick" />
                                </Grid>
                              </Grid>
                            </Box>
                            <Box>
                              <Grid container spacing={0} style={{ display: "flex", justifyContent: "center", alignItems: "center" , gap: "12px"}}>
                                <Grid item xs={1}>
                                  <img src="./images/Right.svg" alt="right-tick" />
                                </Grid>
                                <Grid item xs={1}>
                                  <img src="./images/Cross.svg" alt="right-tick" />
                                </Grid>
                                <Grid item xs={1}>
                                  <img src="./images/Minus.svg" alt="right-tick" />
                                </Grid>
                                <Grid item xs={1}>
                                  <img src="./images/Right.svg" alt="right-tick" />
                                </Grid>
                                <Grid item xs={1}>
                                  <img src="./images/Right.svg" alt="right-tick" />
                                </Grid>
                              </Grid>
                            </Box>
                          </Div>
                        </Grid> */}

                      </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} sm={6}>
                      <Grid
                        container
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={6} lg={4} md={4} sm={4}>
                          <Circularslider type="spread" gameId={value.gameId} />
                        </Grid>
                        <Grid item xs={6} lg={4} md={4} sm={4}>
                          {/* <Grid >
                        <Select
                            className={classes.selectDrop1}
                            variant="outlined"
                            size="small"
                            fullWidth
                            name="weather"
                            value={select1}
                            onChange={handleChange1} style={{ marginRight: '90%' }}
                          >
                            <MenuItem value={"BTC"}>
                              <Box className="selectBox" style={{ display: "flex", alignItems: "center", }}>
                                <Typography variant="" style={{
                                  fontSize: "14px",

                                }}>Teams</Typography>
                              </Box>
                            </MenuItem>

                          </Select>
                          </Grid> */}
                          <Circularslider type="overUnder" gameId={value.gameId} />
                        </Grid>
                        <Grid item xs={6} lg={4} md={4} sm={4}>
                          <GameTwoButton gameId={value.gameId} gameData={value} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box className="innerIcontext">
                    <Button onClick={() => modelClick(value.gameId)}>
                      <Typography variant="body2">
                        View More Bets
                        <ChevronRightIcon />
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Paper>
            );
          }
        )
      )}
      <ModalContext.Provider value={{ showModal, toggleModal }}>
        <div>
          <Modal canShow={showModal} updateModalState={toggleModal}>
            <CosafaCupGame matchId={gameId} />
          </Modal>
        </div>
      </ModalContext.Provider>
    </>
  );
}
