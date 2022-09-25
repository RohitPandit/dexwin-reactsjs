import React from "react";
import {
    Box,
    Container,
    Typography,
    makeStyles,
    Grid, Paper
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    NotificationBox: {
        padding: "25px 15px",
        margin: "0px 0 20px",
        "& img": {
            borderRadius: "50px",
            height: "45px",
            width: "45px",
            objectFit: "cover",
        },
    },
    notiHead: {
        background: theme.palette.background.heading,
        borderRadius: "100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        marginBottom: "10px",
        "@media (max-width:425px)": {
            display: 'block',
            padding: '10px',
        },

        "& h4": {
            fontSize: "13px",
        },

        "& h3": {
            color: "#39AED0",
            fontSize: "16px",
            cursor:"pointer",
            [theme.breakpoints.down("xs")]: {
                textAlign: 'right',
            }


        },

    },
    notificate: {
        padding: "10px 17px",
        borderRadius: "20px",
        marginBottom: "8px",
        position: "relative",
        "& h5": {
            fontSize: "12px",
            lineHeight: "16px",

            text: theme.palette.text.noticetext,
            [theme.breakpoints.down("xs")]: {
                fontSize: '13px',
                lineHeight: '18px',
            }
        },
        "& h6": {
            color: "#39AED0",
            maxWidth: "400px",
            lineHeight: "15px",
            fontSize: "11px",
        },
        "& p": {
            fontSize: "11px",
            fontWeight: "400",
            color: "#787878",
        },
    },
    secondgrid: {
        [theme.breakpoints.down("xs")]: {
            marginTop: '-13px'
        }
    },
    paragraphbox: {
        marginTop: '6px',
        [theme.breakpoints.down("xs")]: {
            marginTop: '2px',
        }
    }
}));
const notificationData = [
    {
        img: "images/notification_img.png",
        id: 1,
        title: "Receipt of fund 3000.00 BTC via epayment (Successful !)",
        subTitle:
            "Deposit transaction in the amount of 3000.00 BNB via epayment complete successfully.",
        date: "04th July 2022",
        time: "01:00 PM",
    },
    {
        img: "images/notification_img.png",
        id: 1,
        title: "Receipt of fund 3000.00 BTC via epayment (Successful !)",
        subTitle:
            "Deposit transaction in the amount of 3000.00 BNB via epayment complete successfully.",
        date: "04th July 2022",
        time: "01:00 PM",
    },
    {
        img: "images/notification_img.png",
        id: 1,
        title: "Receipt of fund 3000.00 BTC via epayment (Successful !)",
        subTitle:
            "Deposit transaction in the amount of 3000.00 BNB via epayment complete successfully.",
        date: "04th July 2022",
        time: "01:00 PM",
    },
    {
        img: "images/notification_img.png",
        id: 1,
        title: "Receipt of fund 3000.00 BTC via epayment (Successful !)",
        subTitle:
            "Deposit transaction in the amount of 3000.00 BNB via epayment complete successfully.",
        date: "04th July 2022",
        time: "01:00 PM",
    },

];

const Notification = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Paper className={classes.NotificationBox} elevation={2}>
            <Box className={classes.notiHead}>
                <Typography variant="h4">Pending Notifications</Typography>
                <Typography variant="h3">Clear All</Typography>
                <Typography variant="h3" onClick={() => history.push("/notifications")}>View All</Typography>
            </Box>

            <Grid container spacing={1} >
                {notificationData.map((allData) => {
                    return (
                        <>
                            <Grid item xs={12}>
                                <Paper className={classes.notificate} elevation={2}>
                                    <Grid container spacing={5} alignItems="center">
                                        <Grid item lg={2} md={4} xs={12}>
                                            <img src={allData.img} alt="image" width="100%" />
                                        </Grid>

                                        <Grid item lg={10} md={8} xs={12} >
                                            <Box className={classes.secondgrid}>
                                                <Typography variant="h5">{allData.title}</Typography>
                                                <Box className={classes.paragraphbox}>
                                                    <Typography variant="h6" style={{}}>
                                                        {allData.subTitle}
                                                    </Typography>
                                                </Box>

                                                <Box mt={1}>
                                                    <Typography variant="body1">
                                                        {allData.date} &nbsp;&nbsp; {allData.time}{" "}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Paper>
                            </Grid>
                        </>
                    );
                })}

            </Grid>

        </Paper>


    );
};

export default Notification;
