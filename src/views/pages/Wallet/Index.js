import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  makeStyles,
  TextField,
  Select,
  Dialog,
  InputAdornment,
  MenuItem,
  Paper,
  Button
} from "@material-ui/core";
import { BiCopy } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import FormControl from "@material-ui/core/FormControl";
import Deposit from "./Deposit";
import SwapModal from "src/component/SwapModal";
import DepositFromExchange from "./DepositFromExchange";
import Withdraw from "./Withdraw";
import WithdrawFromExchange from "./WithdrawFromExchange";
import ProfileCard from "src/component/ProfileCard";
import { FiEdit2 } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  centering: {
    "& .profileBoxImg": {
      position: "relative",
      "& img": {
        cursor: "pointer",
        position: "relative",
        maxWidth: "148px",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: "4px solid #515151",
      },
      "& .editprofile": {
        position: "absolute",
        marginLeft: "-26px",
        bottom: "50px",
        width: "32px",
        height: "32px",
      background: theme.palette.background.secondDeault,
        borderRadius: "50%",
        Transform: "translate(-50%, -50%)",
        cursor: "pointer",
      },
    },
    "& p": {
      whiteSpace: "nowrap",
      width: "102px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    borderRight: "1px solid #413F3F",
    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },
  profileBox: {
    marginTop: "20px",
    // boxShadow: "6px -1px 15px rgb(255 255 255 / 25%), 25px 25px 25px 25px rgb(0 0 0 / 36%)",
    borderRadius: "20px",
    position: "relative",
    padding: "50px 15px",
    "& h4": {
      color: "#7784DA !important",
    },
    "& input::placeholder": {
      fontSize: "13px",
    },
    "& .depositeBox": {
      marginRight: "10px",
      // width: "200px",
      // height: "50px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },

      "& .MuiInput-root": {
        border: "1px solid rgb(51, 153, 170)",
      },
    },
    "& .withdrawBox": {
      // height: "50px",
      borderRadius: "50px",
      // width: "200px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },

    },
  },
  exchange: {
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  const [tabViews, setTabViews] = useState("deposit");
  const [tabViews1, setTabViews1] = useState("withdraw");
  const [checkWithdraw, setcheckWithdraw] = useState(false);
  const [checkDeposit, setcheckDeposit] = useState(true);
  const [openSwap, setOpenSwap] = useState(false);

  const handleCloseSwap = () => {
    setOpenSwap(false);
  };


  return (
    <Box className="Banner">
      <ProfileCard />
      <Paper className={classes.profileBox} mt={2} elevation={2}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={4}
            className={classes.centering}
          >
            <Box className="profileBoxImg" align="center">
              <img
                src="images/profile_img.png"
                width="85%"
                alt="Profile Pic "
              />
              <a className="editprofile">
                <FiEdit2
                  style={{
                    fontSize: "16px",
                    marginTop: "7px",
                    marginLeft: "1px",

                  }}

                />
                <input type="file" className="chooseFileedit" />
              </a>
              <Box mt={1}>
                <Typography variant="body2">
                  0xc51s5aa.....&nbsp;
                  <BiCopy style={{ color: "#FA9131", cursor: "pointer" }} />
                </Typography>
              </Box>

            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={8}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item md={4} xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={() => setOpenSwap(true)} > <img src="images/wallet_icon.png" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp; Bridge Assets</Button>
              </Grid>
              <Grid item md={4} xs={6}>
                <Box className="depositeBox">
                  <Select
                    fullWidth
                    onChange={(e) => {
                      setTabViews(e.target.value);
                      setcheckWithdraw(false);
                      setcheckDeposit(true);
                    }}
                    value={tabViews}
                  >
                    <MenuItem
                      value="deposit"
                      onClick={() => {
                        setcheckWithdraw(false);
                        setcheckDeposit(true);
                      }}
                      className={tabViews === "deposit" ? "active" : ""}
                    >
                      {" "}
                      Deposit
                    </MenuItem>
                    <MenuItem
                      value="deposit-from-exchange"
                      onClick={() => {
                        setcheckWithdraw(false);
                        setcheckDeposit(true);
                      }}
                      className={
                        tabViews === "deposit-from-exchange" ? "active" : ""
                      }
                    >
                      Deposit from Echange
                    </MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item md={4} xs={6}>
                <Box className="withdrawBox">
                  <Select
                    fullWidth
                    onChange={(e) => {
                      setTabViews1(e.target.value);
                      setcheckWithdraw(true);
                      setcheckDeposit(false);
                    }}
                    value={tabViews1}
                  >
                    <MenuItem
                      value="withdraw"
                      onClick={() => {
                        setcheckWithdraw(true);
                        setcheckDeposit(false);
                      }}
                      className={tabViews1 === "withdraw" ? "active" : ""}
                    >
                      Withdraw
                    </MenuItem>
                    <MenuItem
                      value="withdraw-from-exchange"
                      onClick={() => {
                        setcheckWithdraw(true);
                        setcheckDeposit(false);
                      }}
                      className={
                        tabViews1 === "withdraw-from-exchange" ? "active" : ""
                      }
                    >
                      Withdraw from Echange
                    </MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>
            <Box style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>

              {tabViews === "deposit" && checkDeposit && <Deposit />}
              {tabViews === "deposit-from-exchange" && checkDeposit && (
                <DepositFromExchange />
              )}
              {tabViews1 === "withdraw" && checkWithdraw && <Withdraw />}
              {tabViews1 === "withdraw-from-exchange" && checkWithdraw && (
                <WithdrawFromExchange />
              )}
            </Box>

          </Grid>
        </Grid>
        <Dialog open={openSwap} onClose={() => setOpenSwap(false)} fullWidth width="sm" style={{ borderRadius: "10px !important" }} >
          <SwapModal handleCloseSwap={handleCloseSwap} />
        </Dialog>
      </Paper>
    </Box>
  );
};

export default Index;
