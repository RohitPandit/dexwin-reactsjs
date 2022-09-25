import React from "react";
import CosafaAccordion from "src/component/CosafaAccordion";
import { makeStyles, Box, Grid, Button } from "@material-ui/core";
import CosafaFilterComponent from "src/component/CosafaFilterComponent";
import GloballySearchArea from 'src/component/GloballySearchArea';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const CardData = [
    {
        heading: "Spot Bets",
        description: [
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
        ]
    },
    {
        heading: "Spot Bets",
        description: [
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
        ]
    },
    {
        heading: "Spot Bets",
        description: [
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
            {
                text: " Will Lebron James wear the Lebron 18 for Christmas Game",
                num1: "+300",
                num2: "+150"
            },
        ]
    },
]
const useStyles = makeStyles((theme) => ({
    teamDropdown: {
        float: "left",
        background: "#191919",
        borderRadius: "30px !important"
    },
   
}));
export default function Spot(props) {
    const classes = useStyles();
    const { type, } = props;
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box my={2}>
                <Grid container spacing={2} alignItems="center" justifyContent="center" >
                    <Grid item xs={12} md={4} sm={6}>
                        {/* <GloballySearchArea /> */}

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

                    </Grid>
                    <Grid item xs={12} md={8} sm={6}>
                        {/* <CosafaFilterComponent /> */}
                    </Grid>
                </Grid>
            </Box>
            <Box className="mainBox">
                <Grid container spacing={2} alignItems="center" justifyContent="center" >
                    {
                        CardData && CardData?.map((spotCarddata, index) => {
                            return (
                                <Grid item xs={12}>
                                    <CosafaAccordion spotCarddata={spotCarddata} type="spot" />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    );
}
