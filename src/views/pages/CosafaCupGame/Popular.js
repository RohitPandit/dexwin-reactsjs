import React, { useState, useEffect, useContext } from "react";
import {
    Box,
    Typography,
    withStyles,
    Grid,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Container, MenuItem, Select, Menu
} from "@material-ui/core";
import Circularslider from "src/component/Circularslider";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from "@material-ui/core/styles";
import { BsSearch } from "react-icons/bs";
import CosafaFilterComponent from "src/component/CosafaFilterComponent";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import CosafaAccordion from "src/component/CosafaAccordion";
import { OddsContext } from "src/context/Odds";


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
    teamDropdown: {
        float: "left",
        background: "#191919",
        borderRadius: "30px !important"
    },
    mainBox: {
        "& h6": {
            fontSize: "12px",
        },
    },
    root: {
        width: "100%",
        height: "650px",
        overflowY: "scroll",
        "& .accordiantitle": {
            "background": "linear-gradient(180deg, #424344 0%, #232427 100%)",
        },
        "& .accordiandetails": {
            "background": "#292A2F",
            "boxShadow": "0px 0px 20px rgba(0, 0, 0, 0.2)",
            "padding": "23px 0px 8px"
        },
    },
    heading: {  
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.text.primary,
    },
    heading2: {
        display: "flex",
        alignItems: 'center',
        padding: '15px 20px',

    },
    innerIcontext: {
        display: "flex",
        alignItems: "right",
        justifyContent: "right",
        padding: "26px 0px 8px 0px",
        "& p": {
            display: "flex",
            alignItems: "center",
            color: "#39AED0",
            "& svg": {
                color: "#39AED0",
            }
        }
    },
    mainheadingbox: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    center: {
        "& h6": {

            paddingLeft: '70px',
            [theme.breakpoints.only("xs")]: {
                lineHeight: "10px",
            },
        }
    },
    navAccordionicon: {
        background: theme.palette.background.navAccordionicon,
        borderRadius: "4px",
        height: " 24px"
    },
    buttonBox: {
        "& button": {
            [theme.breakpoints.only("xs")]: {
                minWidth: "41px",
                height: "23px",
                fontSize: "10px",
            },
        },

    },

    thirdButton: {

        boxShadow: "0px 0px 0px rgb(255 255 255 / 37%), 10px 10px 20px rgb(0 0 0 / 49%)",
        borderRadius: "50px !important",
        fontSize: "18px",
        borderTop: '1px solid rgba(127, 35, 155, 1)',
        borderBottom: '1px solid rgba(240, 76, 82, 1)',
        borderLeft: "1px solid rgba(127, 35, 155, 1)",
        borderRight: "1px solid rgba(240, 76, 82, 1)",
        color: "#ffffff",
        fontWeight: "bold",
        width: "100%",

    },
    selectDrop: {
        width: '10%',
        marginLeft: '2%'
    },

    selectDrop1: {
        height: "40px",
        width: '10%',
        backgroundColor: '#1A1A1A !important'
    },
    btn1: {
        borderRadius: '50px !important'
    }
}));

var oddsdata = [];

export default function Popular(props) {
    const classes = useStyles();
    const oddsContext = useContext(OddsContext)
    const [expanded, setExpanded] = React.useState("panel1");
    const [select1, setSelect1] = useState("Teams");

  const [checkBoxData, setCheckBoxData] = useState([]);

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        setCardData([]);
        getOddsContextData();
    }, []);

    const getOddsContextData = () => {
        oddsdata = [];
        var moneyLineArr = [];
        var threeWayArr = [];
        oddsContext.popularData.forEach((elements) => {
            if (elements.type == "moneyLine") {
                if (!isEmpty(elements.odds)) {
                    moneyLineArr.push({ text: "Money Line Odds", homeOdd: elements.odds.bets[0].values[0].odd, awayOdd: elements.odds.bets[0].values[1].odd });
                }
            } else if (elements.type == "overUnder" || elements.type == "spread") {
                var oddsArr = [];
                if (!isEmpty(elements.odds)) {
                    elements.odds.bets[0].values.forEach((betElement, index) => {
                        oddsArr.push({ text: betElement.value, odd: betElement.odd })
                    });
                } else {
                    oddsArr = [];
                }
                oddsdata.push({ question: elements.name, answer: oddsArr })
            } else if (elements.type == "threeWay") {
                if (!isEmpty(elements?.odds)) {
                    threeWayArr.push({ text: "Three Way Odds", homeOdd: elements?.odds?.bets[0]?.values[0]?.odd, drawOdd: elements?.odds?.bets[0]?.values[1]?.odd, awayOdd: elements?.odds?.bets[0]?.values[2]?.odd });
                }
            }
        })

        oddsdata.push({ question: "Money Line Odds", answer: moneyLineArr })
        oddsdata.push({ question: "Three Way Odds", answer: threeWayArr })
        setCardData(oddsdata);
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

 

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const getCheckBox = () => {

    }
    return (
        <div className={classes.mainBox}>
            {/*  <Box my={2}>
                 <CosafaFilterComponent type="popular" /> 
            </Box>

            <Box className="mainBox">
                <Grid container spacing={2}>
                    {cardData &&
                        cardData.map((periodicCardData, index) => {
                            return (
                                <Grid item xs={12}>
                                    <CosafaAccordion
                                        periodicCardData={periodicCardData}
                                        type={
                                            (periodicCardData.question == "Three Way Odds" && "popular-three-way") ||
                                            (periodicCardData.question == "Money Line Odds" && "popular") ||
                                            (periodicCardData.question == "Over Under Odds" && "popular-over-under-and-spread") ||
                                            (periodicCardData.question == "Spread Odds" && "popular-over-under-and-spread")
                                        }
                                    />
                                </Grid>
                            );
                        })}
                </Grid>
            </Box>*/}


            <Box my={2}> 
            <Button className={classes.teamDropdown} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        &nbsp;&nbsp;&nbsp;<span className="teamDropdown">Team</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="/images/Vector (4).svg" /></span>&nbsp;&nbsp;&nbsp;
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Team</MenuItem>
                            <MenuItem onClick={handleClose}>Team</MenuItem>
                            <MenuItem onClick={handleClose}>Team</MenuItem>
                        </Menu>
                <CosafaFilterComponent type="popular" getCheckBox={getCheckBox} setCheckBoxData={setCheckBoxData}/>
            </Box>

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
                                <Grid item xs={3}>
                                    <Typography variant="h6" style={{ fontSize: "14px", marginRight: '60%' }} >
                                        MONEY LINE
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Grid container spacing={7}>
                                        <Grid item xs={2} align="center">
                                            <Box className="center">
                                                <Typography variant="h6" align="left">
                                                    T1 vs T2
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px', marginLeft: '-23px' }}>
                                                    <img src="images/t1.png" ></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t2.png"></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} >
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px',  }}>
                                                    <img src="images/t3.png"></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t4.png"></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} align="center">
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px', marginLeft: '-15%'}}>
                                                    <img src="images/t1.png"></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t2.png"></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} align="center">
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px', marginLeft: '-20%' }}>
                                                    <img src="images/t1.png"></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t2.png"></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} align="center">
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px', marginLeft: '-3%' }}>
                                                    <img src="images/t3.png"></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t4.png" style={{ marginLeft: '4%' }}></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails className="accordiandetails">

                            <Grid container spacing={2}>

                                <Grid item xs={3} style={{ display: 'flex', marginTop: '6%', marginLeft: '2%' }}>
                                    <img src="images/Vectorsec.png" alt="Hello" style={{ height: '1rem', width: '1rem' }} />
                                    <Typography variant="body1" style={{ color: '#39AED0', marginLeft: '10px', }}>NBA Regular Season</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Box className={classes.buttonBox}>
                                        <Grid container spacing={2} style={{ marginLeft: '-8%' }}>
                                            <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                                <Typography style={{ marginRight: '30%', textAlign:"center" }}>T1</Typography>
                                                <Typography mt={5} style={{ marginRight: '30%',textAlign:"center" }}>OT</Typography>
                                                <Typography mt={5} style={{ marginRight: '30%',textAlign:"center" }}>T2</Typography>

                                            </Grid>
                                            <Grid item xs={2} className="mt-23">
                                                <Button variant="outlined" color="primary" className={classes.btn1}>+300</Button>
                                                <Box mt={1}> <Button className={classes.thirdButton}>+300 </Button> </Box>
                                                <Box mt={1}>
                                                    <Button variant="outlined" color="secondary" className={classes.btn1}>-300</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} className="mt-23">
                                                <Button variant="outlined" color="primary" className={classes.btn1}>+300</Button>
                                                <Box mt={1}> <Button className={classes.thirdButton}>+300</Button> </Box>

                                                <Box mt={1}>
                                                    <Button variant="outlined" color="secondary" className={classes.btn1}>-300</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} className="mt-23">
                                                <Button variant="outlined" color="primary" className={classes.btn1}>+300</Button>
                                                <Box mt={1}> <Button className={classes.thirdButton}>+300</Button> </Box>

                                                <Box mt={1}>
                                                    <Button variant="outlined" color="secondary" className={classes.btn1}>-300</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} className="mt-23">
                                                <Button variant="outlined" color="primary" className={classes.btn1}>+300</Button>
                                                <Box mt={1}> <Button className={classes.thirdButton}>+300</Button> </Box>

                                                <Box mt={1}>
                                                    <Button variant="outlined" color="secondary" className={classes.btn1}>-300</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2} className="mt-23">
                                                <Button variant="outlined" color="primary" className={classes.btn1}>+300</Button>
                                                <Box mt={1}> <Button className={classes.thirdButton}>+300</Button> </Box>

                                                <Box mt={1}>
                                                    <Button variant="outlined" color="secondary" className={classes.btn1}>-300</Button>
                                                </Box>
                                                {/* <Box className={classes.innerIcontext}>
 <Typography variant="body2">
 View More Bets<ChevronRightIcon />
 </Typography>
 </Box> */}

                                            </Grid>


                                            {/* <Grid item xs={10} align="right">

 <Box className={classes.innerIcontext} style={{ padding: "0px" }}>
 <Typography variant="body2">
 View More Bets<ChevronRightIcon />
 </Typography>
 </Box>
 </Grid>*/}

                                        </Grid>

                                    </Box>

                                </Grid>
                                <Grid style={{ marginTop: '6%', marginLeft: '2%' }}><KeyboardArrowRightIcon style={{ backgroundColor: '#383941' }} /></Grid>

                            </Grid>

                        </AccordionDetails>



                    </Accordion>

                </Grid>
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
                                <Grid item xs={3}>
                                    <Typography variant="h6" style={{ marginRight: '50%', display: 'flex', flexDirection: 'row' }}>
                                        SPREAD BETS
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Grid container spacing={7}>
                                        <Grid item xs={2} align="center">
                                            <Box className="center">
                                                <Typography variant="h6" align="center">
                                                    T1 vs T2
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px', marginLeft: '15%' }}>
                                                    <img src="images/t1.png" ></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t2.png"></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} align="center">
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px', marginLeft: '15%' }}>
                                                    <img src="images/t3.png"></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t4.png"></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} align="center">
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px', marginLeft: '15%' }}>
                                                    <img src="images/t1.png"></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t2.png"></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} align="center">
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px', marginLeft: '15%' }}>
                                                    <img src="images/t1.png"></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t2.png"></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} align="center">
                                            <Box className="center">
                                                <Typography variant="h6" align="center" style={{ display: 'flex', height: '25px', marginLeft: '15%' }}>
                                                    <img src="images/t3.png"></img> &nbsp;&nbsp;&nbsp;vs <img src="images/t4.png" style={{ marginLeft: '4%' }}></img>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails className="accordiandetails">
                            <Box>
                                <Box className={classes.heading2}>

                                </Box>


                                <Grid container spacing={2}>
                                    <Grid item xs={3} style={{ display: 'flex', marginLeft: '2%', marginTop: '2.5%' }}>
                                        <img src="images/Vectorsec.png" alt="Hello" style={{ height: '1rem', width: '1rem' }} />
                                        <Typography variant="body1" style={{ color: '#39AED0', marginLeft: '10px', }}>NBA Regular Season</Typography>
                                    </Grid>
                                    <Grid item xs={8} className={classes.circular}>
                                        <Grid container spacing={2}>

                                            <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: '-5%', }}>
                                                <Typography >T1</Typography>

                                                <Typography mt={5} >T2</Typography>

                                            </Grid>
                                            <Grid item xs={9}>
                                                <Grid item xs={2}
                                                    style={{
                                                        display: 'flex', width: "100%",
                                                        gap: "8rem",
                                                        flexWrap: "nowrap"
                                                    }}
                                                >
                                                <Grid item xs={6} lg={4} md={4} sm={4}>
                                                    <Circularslider type="spread" />
                                                </Grid>
                                                <Grid item xs={6} lg={4} md={4} sm={4}>
                                                    <Circularslider type="overUnder" />
                                                </Grid>
                                                <Grid item xs={6} lg={4} md={4} sm={4}>
                                                    <Circularslider type="overUnder" />
                                                </Grid>
                                                <Grid item xs={6} lg={4} md={4} sm={4}>
                                                    <Circularslider type="overUnder" />
                                                </Grid>
                                                <Grid item xs={6} lg={4} md={4} sm={4}>
                                                    <Circularslider type="overUnder" />
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid style={{ marginLeft: '2%', marginTop: '2.3%' }}><KeyboardArrowRightIcon style={{ backgroundColor: '#383941' }} /></Grid>
                            </Grid>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
        </div >
    );
}