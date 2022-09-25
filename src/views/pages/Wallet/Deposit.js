import React, { useState, useContext } from "react";
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
  Button,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { submitContext } from "../../../layouts/DashboardLayout/TopBar"

const useStyles = makeStyles((theme) => ({
  selectbox3: {
    height: "50px !important"
  },
  selectbox4: {
    height: "50px !important",
    paddingLeft: "15px"
  },
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

const Deposit = () => {
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

  const onSubmit = useContext(submitContext);






  return (
    <Box className="Banner">
      <Box className={classes.exchange}>
        <Grid container spacing={2} >
          <Grid item lg={12} xs={12}>
            <Box>
              <Typography variant="body2" style={{ color: "#787878", }}>Deposit</Typography>
              <Box mt={2}>
                <FormControl className={classes.formControl2}>
                  <Select
                    className={classes.selectbox3}
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
                </FormControl>
              </Box>

            </Box>
          </Grid>
          <Grid item lg={12} xs={12}>
            <Box>
              <TextField
                className="select4"
                variant="outlined"
                fullWidth
                placeholder="Enter Amount"

              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position="end">

              //       <MdOutlineContentCopy
              //         style={{ fontSize: "20px", color: "#5C82A8", cursor: 'pointer' }}
              //       />
              //     </InputAdornment>
              //   ),
              // }}
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

        <Box align="center" mt={3}>
          <Button variant="contained" color="primary" size="large" fullWidth
            className="gradientButton" onClick={onSubmit}>Submit</Button>
        </Box>

      </Box>
    </Box>
  );
};

export default Deposit;
