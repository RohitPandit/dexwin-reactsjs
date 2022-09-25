import React from "react";
import { withStyles, makeStyles, Box,Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";

const StyledTableCell = withStyles((theme) => ({
  head: {
    // background: theme.palette.background.tablehead,
  },
  body: {
    borderTop:" none !important",
    fontSize: 12,
    padding: "2px 10px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
       background: theme.palette.background.tablebody,
      // background: "#323339",
    },
    "&:nth-of-type(odd)": {
        // background: "#383940",
      },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, date, icon, sr, Nbl,background) {
  return { name, calories, fat, carbs, protein, date, icon, sr, Nbl ,background};
}

const rows = [
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "1",
    "images/image 3.png",
"#000"

  ),
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "2",
    "images/image 3.png"
  ),
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "3",
    "images/image 3.png"
  ),
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "4",
    "images/image 3.png"
  ),
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "5",
    "images/image 3.png"
  ),
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "6",
    "images/image 3.png"
  ),
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "7",
    "images/image 3.png"
  ),
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "8",
    "images/image 3.png"
  ),
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "9",
    "images/image 3.png"
  ),
  createData(
    "#UII1234Trsfd",
    "Umair6274",
    "3,954.61 BUSD",
    "11",
    " $ 1,1700.53",
    "$ 1,1700.53",
    "images/user.png",
    "10",
    "images/image 3.png"
  ),
];

const useStyles = makeStyles((theme) => ({
  
  table: {
    minWidth: 900,
    "& .tableHead": {
      // background: theme.palette.background.tablehead,
      background: theme.palette.background.heading,
    },
  },
  paginationBox: {
    display: "flex",
    justifyContent: "end",
    marginTop: "15px",
  },
  ProfietitleBtn: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "149px",
    borderRadius: "100px",
    padding: "7px",
    // background: theme.palette.background.tablehead,
    // background: theme.palette.background.heading,

    alignItems: "center",
  },
  serialNo: {
    height: "23px",
    background: theme.palette.background.circletableBox,
    width: "23px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  serialNo1: {
    border: "0.3px solid rgba(255, 255, 255, 0.4)",
    height: "23px",
    background:
      "linear-gradient(180deg, #39AED0 0%, #7784DA 57.29%, rgba(100, 55, 192, 0.9) 100%)",
    width: "23px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  serialNo2: {
    border: "0.3px solid rgba(255, 255, 255, 0.4)",
    height: "23px",
    background:
      "#39AED0",
    width: "23px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  serialNo3: {
    border: "0.3px solid rgba(255, 255, 255, 0.4)",
    height: "23px",
    background:"#FA9131",
    width: "23px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className="tableHead">
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="left">Player Name</StyledTableCell>
            <StyledTableCell align="left">Total Bets Placed</StyledTableCell>
            <StyledTableCell align="left">Bets Won</StyledTableCell>
            <StyledTableCell align="left">Bets Lost</StyledTableCell>
            <StyledTableCell align="left">Total Winnings</StyledTableCell>
            <StyledTableCell align="left">Leagues</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
             
                  <StyledTableCell>
                    <Box className={row.sr === "1" ? `${classes.serialNo1}` : row.sr === "2" ? `${classes.serialNo2}` : row.sr === "3" ? `${classes.serialNo3}` : `${classes.serialNo}` }>{row.sr}</Box>

                  </StyledTableCell>
              
            
              <StyledTableCell align="left">
                <Box className={classes.ProfietitleBtn}>
                  <img src={row.icon} alt="imag" width="30px" />
                  <Typography >
                  {row.calories}
                  </Typography>
                 
                </Box>
              </StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
              <StyledTableCell align="left">
                <Box className="flexjustify">
                  <img src={row.Nbl} alt="imag" /> &nbsp;
                  {row.protein}
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box className={classes.paginationBox}>
        <Pagination count={10} shape="rounded" />
      </Box>
    </TableContainer>
  );
}
