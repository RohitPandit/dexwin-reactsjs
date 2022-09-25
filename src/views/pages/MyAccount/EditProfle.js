import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  IconButton,
  Button,
  makeStyles,
  TextField,
  Paper,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";
import ProfileCard from "src/component/ProfileCard";
import { FiEdit2 } from "react-icons/fi";
const useStyles = makeStyles((theme) => ({
  editAcountBox: {
    marginTop: "20px",
    position: "relative",
    padding: "50px 15px",
    "& .editprofileImg": {
      position: 'relative',
      margin: "0px",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      border: "4px solid #515151",
      "& img": {
        minWidth: "100%",
        minHeight: "100%",
      },
      "& .EditIconButton": {
        position: "absolute",
        bottom: "0px",
        right: "0px",
        background: theme.palette.background.secondDeault,
      }
    },
    "& .editrightBorder": {
      borderRight: "1px solid #413F3F",
      marginTop: "30px",
      display: "flex",
      alignItems: "center",
      // justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        border: "none",
      },
    },

    "& .editinfoBox": {
      alignItems: "center",
      padding: "6px 0px",
      display: "flex",
      [theme.breakpoints.only("xs")]: {
        padding: "10px 0px 0px",
      },

      "& input::placeholder": {
        fontSize: "13px",
      },
      "& svg": {
        color: "#787878 !important",
        marginRight: "12px",
        fontSize: "20px",
        [theme.breakpoints.down("md")]: {
          marginRight: "5px",
          fontSize: "17px",
        },
      },
      "& h5": {
        fontSize: "15px",
        color: theme.palette.text.primary,
        fontWeight: "600",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },

    },
    "& .editaccountText": {
      color: theme.palette.text.primary,
      fontSize: "19px !important",
      fontWeight: "700",
      marginBottom: "40px",
      color: "#39AED0",
      [theme.breakpoints.down("md")]: {
        marginBottom: "10px",
      },
    },
    "& .editspaceBox": {
      paddingLeft: "30px !important",
      [theme.breakpoints.only("xs")]: {
        paddingLeft: "10px !important",
      },
    },
    "& .updatabtn": {
      color: "#fff",
      background: "linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%), linear-gradient(105.19deg, #8DE6D1 2.66%, #2FB3FC 81.96%)",
    },
    "& p": {
      whiteSpace: "nowrap",
      width: "100px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },

}));

const EditProfileInfo = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className="textField1">
        <ProfileCard />
        <Paper className={classes.editAcountBox} mt={2} elevation={2}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              className="editrightBorder">
              <Box className="editprofileImg" align="center">
                {/* <figure> */}
                <img
                  src="images/profile_img.png"
                  width="85%"
                  alt="Profile Pic "
                />
                {/* </figure> */}
                <IconButton className="EditIconButton">
                  <FiEdit2 style={{    fontSize: "15px",}} />
                </IconButton>
              </Box>
              <Box mt={1} className="flexCenter">
                <Typography variant="body2">
                  0xc51s5aa1ed5wdsa.....&nbsp;
                </Typography>
                <MdOutlineContentCopy style={{
                  color: "rgb(250, 145, 49)",
                  cursor: "pointer",
                  fontSize: "18px",
                  marginLeft: "5px",
                }} />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              className="editspaceBox"

            >
              <Typography className="editaccountText" variant="h6" >
                My Account
              </Typography>

              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={12} lg={4} md={5}>
                  <Box className="editinfoBox">
                    <PersonIcon />
                    <Typography variant="h5">User Name &nbsp;:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={8} md={7}>
                  <TextField
                    variant="outlined"
                    color="primary"
                    placeholder="Enter name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} lg={4} md={5}>
                  <Box className="editinfoBox">
                    <EmailIcon />
                    <Typography variant="h5">Email Address &nbsp;:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={8} md={7}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Enter email"
                  />
                </Grid>
                <Grid item xs={12} sm={12} lg={4} md={5}>
                  <Box className="editinfoBox">
                    <PhoneIphoneIcon />
                    <Typography variant="h5">Phone Number &nbsp;:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={8} md={7}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter phone number "
                  />
                </Grid>
                <Grid item xs={12} sm={12} lg={4} md={5}>
                  <Box className="editinfoBox">
                    <FaFacebook />
                    <Typography variant="h5">Facebook URL &nbsp;:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={8} md={7}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Enter facebook url"
                  />
                </Grid>
                <Grid item xs={12} sm={12} lg={4} md={5}>
                  <Box className="editinfoBox">
                    <InstagramIcon />
                    <Typography variant="h5">Instagram &nbsp;:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={8} md={7}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Enter instagram url"
                  />
                </Grid>
                <Grid item xs={12} sm={12} lg={4} md={5}>
                  <Box className="editinfoBox">
                    <FiTwitter />
                    <Typography variant="h5">Twitter URL &nbsp;:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} lg={8} md={7}>
                  <TextField
                    variant="outlined"
                    placeholder="Enter twitter url"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} lg={4} md={5}>
                  <Box className="editinfoBox">
                    <FaDiscord />
                    <Typography variant="h5">Discord &nbsp;:</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} lg={8} md={7}>
                  <TextField
                    variant="outlined"
                    placeholder="Enter discord url"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} lg={4} md={5}></Grid>
                <Grid item xs={12} sm={12}  md={7}>
                  <Box align="center" mt={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className="updatabtn">
                      Update
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );


};

export default EditProfileInfo;
