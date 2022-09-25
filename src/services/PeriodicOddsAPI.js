import apiConfig from "src/connectors/config/ApiConfig";
import axios from "axios";

// Money Line Odds
export const getMoneyLine1QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["moneyLine1QuarterOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
        "id": 4,
        "name": "Bet365",
        "bets": [
          {
            "id": 17,
            "name": "Asian Handicap 1st Qtr",
            "values": [
              {
                "value": "Home +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              }
            ]
          }
        ]
      }
    }
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getMoneyLine2QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["moneyLine2QuarterOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
        "id": 4,
        "name": "Bet365",
        "bets": [
          {
            "id": 17,
            "name": "Asian Handicap 1st Qtr",
            "values": [
              {
                "value": "Home +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              }
            ]
          }
        ]
      }
    }
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getMoneyLine3QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["moneyLine3QuarterOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
        "id": 4,
        "name": "Bet365",
        "bets": [
          {
            "id": 17,
            "name": "Asian Handicap 1st Qtr",
            "values": [
              {
                "value": "Home +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              }
            ]
          }
        ]
      }
    }
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getMoneyLine4QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["moneyLine4QuarterOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
        "id": 4,
        "name": "Bet365",
        "bets": [
          {
            "id": 17,
            "name": "Asian Handicap 1st Qtr",
            "values": [
              {
                "value": "Home +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              }
            ]
          }
        ]
      }
    }
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getMoneyLine1HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["moneyLine1HalfOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
        "id": 4,
        "name": "Bet365",
        "bets": [
          {
            "id": 17,
            "name": "Asian Handicap 1st Qtr",
            "values": [
              {
                "value": "Home +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +1.5",
                "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -3.5",
                "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +4.5",
                "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              }
            ]
          }
        ]
      }
    }
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getMoneyLine2HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["moneyLine2HalfOddAPI"],
    });
    if (res.data.status == "success") {
      return res.data.data[0].bookmakers[0];
    } else {
      return {
        "id": 4,
        "name": "Bet365",
        "bets": [
          {
            "id": 17,
            "name": "Asian Handicap 1st Qtr",
            "values": [
              {
                "value": "Home +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +0.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +1.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -3.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away +4.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -5.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Home -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              },
              {
                "value": "Away -7.5",
                "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
              }
            ]
          }
        ]
      }
    }
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

// Over Under Odds
export const getOverUnder1QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["overUnder1QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 16,
          "name": "Over/Under 1st Qtr",
          "values": [
            {
              "value": "Over 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 41.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 41.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 47.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 47.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getOverUnder2QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["overUnder2QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 16,
          "name": "Over/Under 1st Qtr",
          "values": [
            {
              "value": "Over 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 41.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 41.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 47.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 47.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getOverUnder3QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["overUnder3QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 16,
          "name": "Over/Under 1st Qtr",
          "values": [
            {
              "value": "Over 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 41.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 41.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 43.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 49.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 47.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 47.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getOverUnder4QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["overUnder4QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 16,
          "name": "Over/Under 1st Qtr",
          "values": [
            {
              "value": "Over 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 41.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 41.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 43.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 47.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 47.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getOverUnder1HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["overUnder1HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 16,
          "name": "Over/Under 1st Qtr",
          "values": [
            {
              "value": "Over 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 41.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 41.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 47.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 47.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getOverUnder2HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["overUnder2HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 16,
          "name": "Over/Under 1st Qtr",
          "values": [
            {
              "value": "Over 37.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 37.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 39.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 41.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 41.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 43.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 45.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 49.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 49.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Over 47.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Under 47.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

// Spread Odds
export const getSpread1QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["spread1QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getSpread2QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["spread2QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getSpread3QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["spread3QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getSpread4QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["spread4QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getSpread1HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["spread1HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getSpread2HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["spread2HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 4,
      "name": "Bet365",
      "bets": [
        {
          "id": 17,
          "name": "Asian Handicap 1st Qtr",
          "values": [
            {
              "value": "Home +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +0.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +1.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +1.5",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -3.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away +4.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -5.5",
              "odd": "2.70"
            },
            {
              "value": "Away -5.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Home -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away -7.5",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

// Three Way Odds
export const getThreeWay1QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["threeWay1QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 2,
      "name": "Marathon Bet",
      "bets": [
        {
          "id": 14,
          "name": "3Way Result - 1st Qtr",
          "values": [
            {
              "value": "Home",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Draw",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getThreeWay2QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["threeWay2QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 2,
      "name": "Marathon Bet",
      "bets": [
        {
          "id": 14,
          "name": "3Way Result - 1st Qtr",
          "values": [
            {
              "value": "Home",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Draw",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getThreeWay3QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["threeWay3QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 2,
      "name": "Marathon Bet",
      "bets": [
        {
          "id": 14,
          "name": "3Way Result - 1st Qtr",
          "values": [
            {
              "value": "Home",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Draw",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getThreeWay4QuarterOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["threeWay4QuarterOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 2,
      "name": "Marathon Bet",
      "bets": [
        {
          "id": 14,
          "name": "3Way Result - 1st Qtr",
          "values": [
            {
              "value": "Home",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Draw",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getThreeWay1HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["threeWay1HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 2,
      "name": "Marathon Bet",
      "bets": [
        {
          "id": 14,
          "name": "3Way Result - 1st Qtr",
          "values": [
            {
              "value": "Home",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Draw",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away",
              "odd":Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};

export const getThreeWay2HalfOddAPI = async (gameid) => {
  try {
    const res = await axios({
      method: "GET",
      params: { gameid: gameid },
      url: apiConfig["threeWay2HalfOddAPI"],
    });
    return res.data.data[0].bookmakers[0];
  } catch (error) {
    return {
      "id": 2,
      "name": "Marathon Bet",
      "bets": [
        {
          "id": 14,
          "name": "3Way Result - 1st Qtr",
          "values": [
            {
              "value": "Home",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Draw",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            },
            {
              "value": "Away",
              "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
            }
          ]
        }
      ]
    }
  }
};
