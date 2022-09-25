import React, { useState } from 'react';
import { makeStyles, Box, Typography, Grid, IconButton, Select, MenuItem, Divider, Button, TextField, InputAdornment } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
    root: {
        "& .headingBox": {
            background: theme.palette.background.heading,
            display: " flex",
            alignItems: "center",
            justifyContent: "space-between",
            "& .headingContent": {
                display: " flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px 0px",
                paddingLeft: "35px",
                "& figure": {
                    margin: "5px",
                },
                "& div": {
                    paddingLeft: "25px",
                }
            }
        },
        '& .mainBox': {
            padding: "30px"
        }
    },
    SwapDetails: {
        boxShadow: "inset 0.2rem 0.2rem 1rem 1px #151717, inset -0.2rem -0.2rem 0.5rem 8px #2b2a2a",
        padding: "8px 20px",
        borderRadius: "30px"
    },
    rightDetails: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        "& figure": {
            margin: 0,
            width: "25px",
            height: "25px",
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            "& img": {
                minWidth: "100%",
                minHeight: "100%"
            }
        },
    },
    leftDetails: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        "& .PolygonInput": {
            width: "60px"
        }
    },
    selectBox: {
        borderRadius: "30px"
    },
    selectContent: {
        display: "flex",
        alignItems: "center",
        padding: "5px 0px",
        "& figure": {
            margin: "0px",
            width: "25px",
            height: "25px",
            "& img": {
                minWidth: "100%",
                minHeight: "100%"
            }
        },
        "& div": {
            marginLeft: "8px",
            "& h5": {
                fontSize: "14px",
                marginLeft: "7px",
            },
            "& p": {
                fontSize: "8px",
                marginLeft: "7px",
                color: "#B0B0B0"
            }
        }
    },
    textField: {
        // background: theme.palette.background.heading,
        color: theme.palette.text.white,
        borderRadius: "5px",
        "& label": {
            color: "#39AED0",
        },
        "&  input": {
            color: theme.palette.text.white,
        },
        "& .MuiFilledInput-input": {
            padding: "0px !important"
        }
    },
}));


function SwapModal(props) {
    const classes = useStyles();
    const { handleCloseSwap } = props;
    const [select1, setSelect1] = useState("BTC");
    const handleChange1 = (event) => {
        setSelect1(event.target.value);
    };
    return (
        <>
            <Box className={classes.root}>
                <Box className='headingBox'>
                    <Box className='headingContent'>
                        <figure>
                            <img src='images/SwapImage.png' alt='SwapImage' />
                        </figure>
                        <Box>
                            <Typography variant='h6'>CROSS CHAIN SWAP</Typography>
                            <Typography variant='body1'>Powered by Swing.xyz </Typography>
                        </Box>
                    </Box>
                    <IconButton variant='contained' color="primary" onClick={handleCloseSwap}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box className='mainBox'>
                    <Grid container spacing={3} direction={"column"}>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={6} md={6}>
                                    <Box my={1}>
                                        <Typography variant='body2'>Send</Typography>
                                    </Box>
                                    <Select
                                        className={classes.selectBox}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        name="weather"
                                        value={select1}
                                        onChange={handleChange1}
                                    >
                                        <MenuItem value={"BTC"}>
                                            <Box className={classes.selectContent}>
                                                <figure>
                                                    <img src="images/eth.png" alt="image" />
                                                </figure>
                                                <Box>
                                                    <Typography variant="h5">Ethereum</Typography>
                                                    <Typography variant="body1">Blockchain</Typography>
                                                </Box>
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value={"BNB"}>
                                            <Box className={classes.selectContent}>
                                                <figure>
                                                    <img src="images/eth.png" alt="image" />
                                                </figure>
                                                <Box>
                                                    <Typography variant="h5">Ethereum</Typography>
                                                    <Typography variant="body1">Blockchain</Typography>
                                                </Box>
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value={"ETH"}>
                                            <Box className={classes.selectContent}>
                                                <figure>
                                                    <img src="images/eth.png" alt="image" />
                                                </figure>
                                                <Box>
                                                    <Typography variant="h5">Ethereum</Typography>
                                                    <Typography variant="body1">Blockchain</Typography>
                                                </Box>
                                            </Box>
                                        </MenuItem>
                                    </Select>

                                </Grid>

                                <Grid item xs={12} lg={6} md={6}>
                                    <Box my={1}>
                                        <Typography variant='body2'>Send</Typography>
                                    </Box>
                                    <Box className={classes.SwapDetails}>
                                        <Grid container spacing={1} alignItems="center" justifyContent='center'>
                                            <Grid item xs={7}>
                                                <Box className={classes.leftDetails}>

                                                    <TextField
                                                        placeholder="150"
                                                        id="inputID"
                                                        fullWidth
                                                        variant="filled"
                                                        className={clsx(classes.textField)}
                                                    />

                                                    <Button style={{ color: "#61BE52", fontSize: "12px" }}>MAX</Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Box className={classes.rightDetails}>
                                                    <Divider orientation="vertical" flexItem />
                                                    <figure>
                                                        <img src='images/eth.png' alt='ETH Image' />
                                                    </figure>
                                                    <Box>
                                                        <Typography variant="body2">ETH</Typography>
                                                        <Typography variant="body1" style={{ color: "#B0B0B0", fontSize: "8px" }}>260</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3} >
                            <Grid item xs={12} lg={6} md={6}>
                                    <Box my={1}>
                                        <Typography variant='body2'>Receive</Typography>
                                    </Box>

                                    <Select
                                        className={classes.selectBox}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        name="weather"
                                        value={select1}
                                        onChange={handleChange1}
                                    >
                                        <MenuItem value={"BTC"}>
                                            <Box className={classes.selectContent}>
                                                <figure>
                                                    <img src="images/Polygon.png" alt="image" />
                                                </figure>
                                                <Box>
                                                    <Typography variant="h5">Polygon</Typography>
                                                    <Typography variant="body1">Blockchain</Typography>
                                                </Box>
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value={"BNB"}>
                                            <Box className={classes.selectContent}>
                                                <figure>
                                                    <img src="images/Polygon.png" alt="image" />
                                                </figure>
                                                <Box>
                                                    <Typography variant="h5">Polygon</Typography>
                                                    <Typography variant="body1">Blockchain</Typography>
                                                </Box>
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value={"ETH"}>
                                            <Box className={classes.selectContent}>
                                                <figure>
                                                    <img src="images/Polygon.png" alt="image" />
                                                </figure>
                                                <Box>
                                                    <Typography variant="h5">Polygon</Typography>
                                                    <Typography variant="body1">Blockchain</Typography>
                                                </Box>
                                            </Box>
                                        </MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <Box my={1}>
                                        <Typography variant='body2'>Receive</Typography>
                                    </Box>
                                    
                                    <Box className={classes.SwapDetails}>
                                        <Grid container spacing={1} alignItems="center" justifyContent='center'>
                                            <Grid item xs={8}>
                                                <Box className={classes.leftDetails}>
                                                    <Box className='PolygonInput'>
                                                        <TextField
                                                            placeholder="150"
                                                            id="inputID"
                                                            fullWidth
                                                            variant="filled"
                                                            className={clsx(classes.textField)}
                                                        />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box className={classes.rightDetails}>
                                                    <figure>
                                                        <img src='images/Polygon.png' alt='ETH Image' />
                                                    </figure>
                                                    <Box>
                                                        <Typography variant="body2">MATIC</Typography>
                                                        <Typography variant="body1" style={{ color: "#B0B0B0", fontSize: "8px" }}>26,000</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            
            </Box>
        </>
    ) 
}

export default SwapModal;