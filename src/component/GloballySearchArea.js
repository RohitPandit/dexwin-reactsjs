import React, { useState, useContext } from 'react';
import { makeStyles, TextField, Box, IconButton, InputAdornment, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { BsSearch } from "react-icons/bs";
import FuturesComponent from "src/views/pages/Dashboard/FuturesComponent";
import { OddsContext } from "src/context/Odds";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        // maxWidth:"300px",
        // padding: "0px 15px"
        "& .searchBox": {
            "& .MuiOutlinedInput-root": {
                borderRadius: "100px",
                // maxWidth: "256px",
                "& .MuiOutlinedInput-input": {
                    height: "28px",
                },
            },
        },
    }
}));

function GloballySearchArea(props) {
    const { type, setCardData, cardData, getOddsContextData } = props;
    const classes = useStyles();
    const oddsContext = useContext(OddsContext);

    const [query, setQuery] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false)

    const handleClickOpen = () => {
        setDialogOpen(true);
    };
    const handleClose = () => {
        setDialogOpen(false);
    };

    const changeHandler = event => {
        console.log("event : ", event)
        console.log("event.target.value : " + event.target.value)
        setQuery(event.target.value)
        if(query != "" && query != null && query != undefined ){
            console.log("oddsContext.getPeriodicOdds() : ", oddsContext.periodicOdds);
            const filterData = cardData.filter(item => {
                return item.question.includes(query);
            });
            console.log("filterData: ", filterData);
            console.log("cardData :", cardData);
            // setCardData(filterData);
        }else{
            getOddsContextData();
        }
    }

    return (
        <>
            <Box className={classes.root}>
                {/* //Only for Headers Topbar  */}
                {
                    type === "TopHeaderSearchArea" ? (
                        <TextField
                            id="outlined-basic"
                            type="text"
                            value={"Search"}
                            variant="outlined"
                            fullWidth
                            placeholder="Search"
                            className="searchBox"
                            onClick={() => setDialogOpen(true)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {" "}
                                        <IconButton
                                            style={{ fontSize: "20px", padding: "0px" }}
                                            className="iconbtn"
                                        >
                                            <BsSearch style={{ color: "#8d8d8f", fontSize: "16px" }} />
                                        </IconButton>{" "}
                                    </InputAdornment>
                                ),
                            }}
                        />
                    ) : (
                        <Box>
                            {/* //For Globally Sear Area */}
                            <TextField
                                id="outlined-basic"
                                type="search"
                                variant="outlined"
                                fullWidth
                                placeholder="Search"
                                className="searchBox"
                                value={query}
                                onChange={(event) => changeHandler(event)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {" "}
                                            <IconButton
                                                style={{ fontSize: "20px", padding: "0px" }}
                                                className="iconbtn"
                                            >
                                                <BsSearch style={{ color: "#8d8d8f", fontSize: "16px" }} />
                                            </IconButton>{" "}
                                        </InputAdornment>
                                    ),
                                }}
                            />

                        </Box>
                    )
                }
            </Box>
            <Dialog
                maxWidth="lg"
                open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Search...</DialogTitle>
                <IconButton className={classes.icons} onClick={handleClose}
                    style={{ position: "absolute", top: "5px", right: "0", zIndex: "999" }}>
                    <img src="images/close.png" alt="image" onClick={handleClose} />
                </IconButton>
                <DialogContent dividers>
                    <Box className={classes.root} mb={3}>
                        <TextField
                            id="outlined-basic"
                            type="search"
                            // value="Search"
                            variant="outlined"
                            fullWidth
                            placeholder="Search"
                            className="searchBox"

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {" "}
                                        <IconButton
                                            style={{ fontSize: "20px", padding: "0px" }}
                                            className="iconbtn"
                                        >
                                            <BsSearch style={{ color: "#8d8d8f", fontSize: "16px" }} />
                                        </IconButton>{" "}
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <FuturesComponent />
                </DialogContent>
            </Dialog>

        </>
    )
}

export default GloballySearchArea;