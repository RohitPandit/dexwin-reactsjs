import React, { useEffect, useState } from 'react';
import { makeStyles, Box, Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import CosafaAccordion from 'src/component/CosafaAccordion';
import CosafaFilterComponent from "src/component/CosafaFilterComponent";
import GloballySearchArea from 'src/component/GloballySearchArea';

import { OddsContext } from "src/context/Odds";
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .filterBox": {

    },
    "& .mainBox": {

    }
  }
}));

function Exotic(props) {

  var filterData = [];
  const oddsContext = useContext(OddsContext);
  const { exoticCardData, type, matchId } = props;

const exoticD = oddsContext.exoticD;
  const [cardData, setCardData] = useState([]);
  const [oddsData, setOddsData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [query, setQuery] = useState('');

  const [checkBoxData, setCheckBoxData] = useState([]);
  console.log(showData,"exoticDddd")
  useEffect(() => {
    setOddsData([]);
    setCardData([])
    getOddsContextData();
  }, [])



  const changeHandler = event => {
    setQuery(event.target.value)
    filterData = cardData.filter(item => {
      return item.question.toLowerCase().includes(query.toLocaleLowerCase());
    });
    setShowData(filterData)
  }

  // const filterData = cardData.filter(item => {
  //     return item.question.toLowerCase().includes(query.toLocaleLowerCase());
  // });

  const getOddsContextData = () => {
    setOddsData([]);
    setCardData([]);
    exoticD.forEach((elements) => {
      var oddsArr = [];
  
      if (!isEmpty(elements.odds)) {
        console.log(elements,"elements")
        elements.odds.bets[0].values.forEach((betElement, index) => {
          oddsArr.push({ text: betElement.value, odd: betElement.odd })
      
        });
      } else {
        oddsArr = [];
        console.log("aaa")
      }
      oddsData.push({ question: elements.name, answer: oddsArr })
    })
    setCardData(oddsData);
    setShowData(oddsData)
    console.log("showData: ", showData);
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }



  const getCheckBox = () => {
    console.log("checkBoxData: ", checkBoxData)

    if (checkBoxData.checkedA && checkBoxData.checkedB && checkBoxData.checkedF && checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data3 = cardData.filter(item => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      var data4 = cardData.filter(item => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2, ...data3, ...data4];
    } else if (checkBoxData.checkedA && checkBoxData.checkedB && checkBoxData.checkedF && !checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data3 = cardData.filter(item => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      filterData = [...data1, ...data2, ...data3];
    } else if (checkBoxData.checkedA && checkBoxData.checkedB && !checkBoxData.checkedF && checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data3 = cardData.filter(item => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2, ...data3];
    } else if (checkBoxData.checkedA && !checkBoxData.checkedB && checkBoxData.checkedF && checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      var data3 = cardData.filter(item => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2, ...data3];
    } else if (!checkBoxData.checkedA && checkBoxData.checkedB && checkBoxData.checkedF && checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      var data3 = cardData.filter(item => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2, ...data3];
    } else if (checkBoxData.checkedA && checkBoxData.checkedB && !checkBoxData.checkedF && !checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (checkBoxData.checkedA && !checkBoxData.checkedB && checkBoxData.checkedF && !checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (!checkBoxData.checkedA && checkBoxData.checkedB && checkBoxData.checkedF && !checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (checkBoxData.checkedA && !checkBoxData.checkedB && !checkBoxData.checkedF && checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("1 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (!checkBoxData.checkedA && checkBoxData.checkedB && !checkBoxData.checkedF && checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("2 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (!checkBoxData.checkedA && !checkBoxData.checkedB && checkBoxData.checkedF && checkBoxData.checkedG) {
      var data1 = cardData.filter(item => {
        return item.question.toLowerCase().includes("3 quarter");
      });
      var data2 = cardData.filter(item => {
        return item.question.toLowerCase().includes("4 quarter");
      });
      filterData = [...data1, ...data2];
    } else if (!checkBoxData.checkedA && !checkBoxData.checkedB && !checkBoxData.checkedF && checkBoxData.checkedG) {
      filterData = cardData.filter(item => {
        return item.question.toLowerCase().includes("4 quarter");
      });
    } else if (!checkBoxData.checkedA && !checkBoxData.checkedB && checkBoxData.checkedF && !checkBoxData.checkedG) {
      filterData = cardData.filter(item => {
        return item.question.toLowerCase().includes("3 quarter");
      });
    } else if (!checkBoxData.checkedA && checkBoxData.checkedB && !checkBoxData.checkedF && !checkBoxData.checkedG) {
      filterData = cardData.filter(item => {
        return item.question.toLowerCase().includes("2 quarter");
      });
    } else if (checkBoxData.checkedA == true && checkBoxData.checkedB == false && checkBoxData.checkedF == false && checkBoxData.checkedG == false) {
      filterData = cardData.filter(item => {
        return item.question.toLowerCase().includes("1 quarter");
      });
    } else {
      filterData = cardData;
    }

    setShowData(filterData)
    console.log(("showData: ", showData));
  }

  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box my={2}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <Box>
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
            </Grid>
            <Grid item md={8} xs={12}>
              <CosafaFilterComponent type="exotic" getCheckBox={getCheckBox} setCheckBoxData={setCheckBoxData} />
            </Grid>
          </Grid>
        </Box>
        <Box className="mainBox">
          <Grid container spacing={2}>
            {cardData &&
              showData.map((exoticCardData, index) => {
                return (
                  <Grid item xs={12}>
                    <CosafaAccordion
                      matchId={matchId}
                      exoticCardData={exoticCardData}
                      type="exotic-odd-even" />
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Exotic;