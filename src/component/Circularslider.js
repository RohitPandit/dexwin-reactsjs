import React, { useEffect } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircleSlider } from "react-circle-slider";
import { getSpreadOddAPI, getOverUnderOddAPI } from "src/services/PopularOddsAPI";

const useStyles = makeStyles((theme) => ({
    mainCircularSlider: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .minuscounter": {
            position: 'absolute',
            top: "-30px",
        },
        "& .pluscounter": {
            position: 'absolute',
            bottom: "-30px",
        },
        "& .PostBox": {
            boxSizing: "border-box",
            width: "100px",
            height: "100px",
            minWidth: "100px",
            background: theme.palette.CircularSlider.background,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& svg": { position: "absolute", },
            "& .innerbox": {
                top: "32%",
                left: "50%",
                width: "72px",
                height: "40px",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                borderRadius: "150px 150px 0 0",
                background: theme.palette.background.heading,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            "& .innerbottom": {
                top: " 65%",
                left: "50%",
                width: "72px",
                height: " 40px",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                borderRadius: " 0px 0px 150px 150px",
                display: " flex",
                justifyContent: "center",
                alignItems: " center",
                background: theme.palette.background.default,
                boxShadow: theme.palette.CircularSlider.boxShadow
            }

        },
    }
}));

export default function (props) {
    const classes = useStyles();
    const { type, gameId } = props;
    const [value, setValue] = React.useState(0);

    const [over, setOver] = React.useState(0);
    const [under, setUnder] = React.useState(0);
    const [home, setHome] = React.useState(0);
    const [away, setAway] = React.useState(0);

    useEffect(() => {
      if(type == "spread"){
        getSpreadOddsAPI();
      }else if(type == "overUnder"){
        getOverUnderOddsAPI();
      }
    }, []);

    // Calculate Percentage
    const getParcentage = (num1, num2) => {
      let number1 = 0;
      let number2 = 0;
      let result = 0;
      if(num1 == 0 && num2 == 0){
        result = 0;
      }else if(num1 >= num2){
        number1 = num2; 
        number2 = num1;
        result = Math.floor((number1 / number2) * 100)
      }else{
        number1 = num1; 
        number2 = num2;
        result = Math.floor((number1 / number2) * 100)
      }
      return Number(result);
    }

    // Get All Popular Odds
    const getSpreadOddsAPI = async () => {
      const responseSpreads = await getSpreadOddAPI(gameId);
      if(!isEmptyObj(responseSpreads)){
        setHome(responseSpreads.bets[0].values[0].odd);
        setAway(responseSpreads.bets[0].values[1].odd);
      }else{
        setHome(0);
        setAway(0);
      }
    };

    const getOverUnderOddsAPI = async() => {
      const responseSpreads = await getOverUnderOddAPI(gameId);
      if(!isEmptyObj(responseSpreads)){
        setOver(responseSpreads.bets[0].values[0].odd);
        setUnder(responseSpreads.bets[0].values[1].odd);
      }else{
        setOver(0);
        setUnder(0);
      }
    }
    
    const isEmptyText = (value) =>{
      if(value != null && value != undefined && value != 0){
        return true;
      }else{
        return false
      }
    }

    const isEmptyObj = (obj) => {
      return Object.keys(obj).length === 0;
    }

    const handleChange = (value) => {
      console.log(`Changed value ${value}`);
      setValue(value)
    };

    // Spread Circular Section/Content
    const spreadCircular = () => {
        return (
            <Box className={classes.mainsec}>
                <Box className={classes.mainCircularSlider}>
                    <Box className="minuscounter">
                        <Typography variant="h6"  >-5</Typography>
                    </Box>
                    <Box className="PostBox">
                        <Box className="innerbox">
                            &nbsp;&nbsp;
                            <Typography
                                variant="body1"
                                position="absolute"
                                style={{ color: "#fff" }}
                            >
                                { isEmptyText(home) ? home : 0 }
                            </Typography>
                        </Box>
                        <Box className="innerbottom">
                            &nbsp;&nbsp;
                            <Typography
                                variant="body1"
                                position="absolute"
                                style={{ color: "#fff" }}
                            >
                                { isEmptyText(away) ? away : 0 }
                            </Typography>
                        </Box>
                        <CircleSlider
                            disabled={true}
                            value={getParcentage(away, home)}
                            size={118}
                            shadow={false}
                            circleWidth={0}
                            knobRadius={6}
                            progressWidth={6}
                            knobColor="#FFFFFF"
                            gradientColorFrom="#BB005A"
                            gradientColorTo="#FA9131"
                            circleColor="#3F3F3F"
                            onChange={() => handleChange()}
                        />
                    </Box>
                    <Box className="pluscounter">
                        <Typography variant="h6">{value}</Typography>
                    </Box>
                </Box>
            </Box>
        )
    }

    // Over Under Circular Section/Content
    const overUnderCircular = () => {
        return (
            <Box className={classes.mainsec}>
                <Box className={classes.mainCircularSlider}>
                    <Box className="PostBox">
                        <Box className="innerbox">
                            <Typography
                                variant="body1"
                                position="absolute"
                                style={{ color: "#FA9131" }}
                            >
                                O
                            </Typography>
                            &nbsp;&nbsp;
                            <Typography
                                variant="body1"
                                position="absolute"
                                style={{ color: "#fff" }}
                            >
                                { isEmptyText(over) ? over : 0 }
                            </Typography>
                        </Box>
                        <Box className="innerbottom">
                            <Typography
                                variant="body1"
                                position="absolute"
                                style={{ color: "#FA9131" }}
                            >
                                U
                            </Typography>
                            &nbsp;&nbsp;
                            <Typography
                                variant="body1"
                                position="absolute"
                                style={{ color: "#fff" }}
                            >
                                { isEmptyText(under) ? under : 0 }
                            </Typography>
                        </Box>
                        <CircleSlider
                            disabled={true}
                            value={getParcentage(over, under)}
                            size={118}
                            shadow={false}
                            circleWidth={0}
                            knobRadius={6}
                            progressWidth={6}
                            knobColor="#FFFFFF"
                            gradientColorFrom="#BB005A"
                            gradientColorTo="#FA9131"
                            circleColor="#3F3F3F"
                            onChange={() => handleChange()}
                        />
                        <Box className="pluscounter">
                        <Typography variant="h6">200</Typography>
                    </Box>
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <>
            {type == "spread" && spreadCircular()}
            {type == "overUnder" && overUnderCircular()}
        </>
    );
}
