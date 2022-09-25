import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  makeStyles,
  TextField,
  Select,
  InputAdornment,
  MenuItem,
} from "@material-ui/core";
import { BiCopy } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import FormControl from "@material-ui/core/FormControl";
import ProfileCard from "src/component/ProfileCard"

const useStyles = makeStyles((theme) => ({
  formControl2: {
    width: "100%",
    borderRadius: "100px !important",

  },
  selectBox: {
    display: "flex",
    alignItems: "center",
    "& h5": {
      fontSize: "14px",
      marginLeft: "10px",
      fontWeight: "700",
    },
    "& img": {
      width: "25px",
    },
  },
  exchange: {
    marginTop: '5rem',
    [theme.breakpoints.down("xs")]: {
      marginTop: '2rem'
    }
  }
}));

const DepositFromExchange = () => {
  const classes = useStyles();
  const [select, setSelect] = useState("Deposite");
  const [widthdraw, setWidthdraw] = useState("Withdraw");
  const handleChange2 = (event) => {
    setWidthdraw(event.target.value);
  }
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const [select1, setSelect1] = useState("BTC");
  const handleChange1 = (event) => {
    setSelect1(event.target.value);
  };

  return (
    <Box className="Banner">
      <Box className={classes.exchange}>
        <Grid container spacing={2} >
          <Grid item lg={12} xs={12}>
            <Box>
              <Typography variant="body2" style={{ color: "#787878", }}>Deposit from exchange</Typography>
              <FormControl className={classes.formControl2}>
                <Box mt={2}>
                <Select
                
                  variant="outlined"
                  size="small"
                  fullWidth
                  name="weather"
                  value={select1}
                  onChange={handleChange1}

                >
                  <MenuItem value={"BTC"}>
                    <Box className={classes.selectBox}>

                      <img src="images/btc.png" alt="image" />
                      <Typography variant="h5">BTC</Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value={"BNB"}>
                    <Box className={classes.selectBox}>
                      <img src="images/bnb.png" alt="image" />
                      <Typography variant="h5">BNB</Typography>
                    </Box>
                  </MenuItem>

                  <MenuItem value={"ETH"}>
                    <Box className={classes.selectBox}>
                      <img src="images/eth.png" alt="image" />
                      <Typography variant="h5">ETH</Typography>
                    </Box>
                  </MenuItem>
                </Select>
                </Box>
       
              </FormControl>
            </Box>

          </Grid>
          <Grid item lg={12} xs={12}>
            <Box>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Your BUSD deposit address"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">

                      <MdOutlineContentCopy
                        style={{ fontSize: "20px", color: "#5C82A8", cursor: 'pointer' }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box align="right" mt={1}>
          <Typography variant="body1">
            <span style={{ color: "#7784DA" }}>
              Available Balance
            </span>
            : 0.345 BTC
          </Typography>
        </Box>
        <Box mt={5} mb={4} align="center">
          <img
            src="/images/Qrscanar.png"
            alt=""
            style={{ width: "35%" }}
          />
        </Box>
      </Box>

    </Box>
  );
};

export default DepositFromExchange;
