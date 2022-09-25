import apiConfig from "src/connectors/config/ApiConfig";
import axios from "axios";

//Exotic Odds
// OddEven Half
export const getOddEven1HalfAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["oddEven1HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": "1.83"
                },
                {
                  "value": "Even",
                  "odd": "2.00"
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": "1.83"
                },
                {
                  "value": "Even",
                  "odd": "2.00"
                }
              ]
            }
          ]
        };
  }
};
export const getOddEven2HalfAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["OddEven2HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": "1.83"
                },
                {
                  "value": "Even",
                  "odd": "2.00"
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": "1.83"
                },
                {
                  "value": "Even",
                  "odd": "2.00"
                }
              ]
            }
          ]
        };
  }
};
export const getOddEvenHomeAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["oddEvenHomeOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
export const getOddEvenAwayAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["oddEvenAwayOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
export const getAwayOddEven1HalfAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["awayOddEven1HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
export const getAwayOddEven2HalfAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["awayOddEven2HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
//OddEven 1st and 2nd Half
export const getHomeOddEven1HalfAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["homeOddEven1HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};



export const getHomeOddEven2HalfAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["homeOddEven2HalfOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};

//OddEven Quarters OddsAPI
export const getOddEven1QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["oddEven1QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};

export const getOddEven2QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["oddEven2QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
export const getOddEven3QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["oddEven3QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
export const getOddEven4QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["oddEven4QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};






//Away OddEven Quarters OddsAPI
export const getAwayOddEven1QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["awayOddEven1QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
export const getAwayOddEven2QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["awayOddEven2QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
export const getAwayOddEven3QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["awayOddEven3QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
export const getAwayOddEven4QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["awayOddEven4QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};

//Home OddEven Quarter OddsAPI

export const getHomeOddEven1QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["homeOddEven1QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};


export const getHomeOddEven2QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["homeOddEven2QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};



export const getHomeOddEven3QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["homeOddEven3QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};



export const getHomeOddEven4QuarterOddsAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["homeOddEven4QuarterOddsAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
    }
  } catch (error) {
    
    return {
          "id": 7,
          "name": "10Bet",
          "bets": [
            {
              "id": 35,
              "name": "Odd/Even",
              "values": [
                {
                  "value": "Odd",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                },
                {
                  "value": "Even",
                  "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                }
              ]
            }
          ]
        };
  }
};
