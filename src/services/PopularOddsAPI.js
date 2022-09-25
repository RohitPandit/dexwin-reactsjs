import apiConfig from "src/connectors/config/ApiConfig";
import axios from "axios";


const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
}

export const getSpread1QuarterOddAPI = async (gameid) => {
    try {
        const res = await axios({
            method: "GET",
            params: { gameid: gameid },
            url: apiConfig["spread1QuarterOddAPI"],
        });
        return res.data.data[0].bookmakers[0];
    } catch (error) {
        return {};
    }
};

export const getMoneyLineOddAPI = async (gameid) => {
    try {
        const res = await axios({
            method: "GET",
            params: { gameid: gameid },
            url: apiConfig["moneyLineOddAPI"],
        });
        if(!isEmptyObj(res.data)){
            if (res.data.status == "success") {
                return res.data.data[0].bookmakers[0];
            } else {
                return {
                    "id": 4,
                    "name": "Bet365",
                    "bets": [
                      {
                        "id": 19,
                        "name": "Home/Away - 1st Qtr",
                        "values": [
                          {
                            "value": "Home",
                            "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                          },
                          {
                            "value": "Away",
                            "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                          }
                        ]
                      }
                    ]
                  };
            }
        }
    } catch (error) {
        return {
            "id": 4,
            "name": "Bet365",
            "bets": [
              {
                "id": 19,
                "name": "Home/Away - 1st Qtr",
                "values": [
                  {
                    "value": "Home",
                    "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                  },
                  {
                    "value": "Away",
                    "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                  }
                ]
              }
            ]
          };
    }
};

export const getSpreadOddAPI = async (gameid) => {
    try {
        const res = await axios({
            method: "GET",
            params: { gameid: gameid },
            url: apiConfig["spreadOddAPI"],
        });
        
        if(!isEmptyObj(res.data)){
            if (res.data.status == "success") {
                return res.data.data[0].bookmakers[0];
            } else {
                return {
                    "id": 4,
                    "name": "Bet365",
                    "bets": [
                      {
                        "id": 19,
                        "name": "Home/Away - 1st Qtr",
                        "values": [
                          {
                            "value": "Home",
                            "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                          },
                          {
                            "value": "Away",
                            "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                          }
                        ]
                      }
                    ]
                  };
            }
        }
    } catch (error) {
        return {
            "id": 4,
            "name": "Bet365",
            "bets": [
              {
                "id": 19,
                "name": "Home/Away - 1st Qtr",
                "values": [
                  {
                    "value": "Home",
                    "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                  },
                  {
                    "value": "Away",
                    "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                  }
                ]
              }
            ]
          };
    }
};

export const getThreeWayOddAPI = async (gameid) => {
    try {
        const res = await axios({
            method: "GET",
            params: { gameid: gameid },
            url: apiConfig["threeWayOddAPI"],
        });
        
        if(!isEmptyObj(res.data)){
            if (res.data.status == "success") {
                return res.data.data[0].bookmakers[0];
            } else {
                return {
                    "id": 4,
                    "name": "Bet365",
                    "bets": [
                      {
                        "id": 19,
                        "name": "Home/Away - 1st Qtr",
                        "values": [
                          {
                            "value": "Home",
                            "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                          },
                          {
                            "value": "Away",
                            "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                          }
                        ]
                      }
                    ]
                  };
            }
        }
    } catch (error) {
        return {
            "id": 4,
            "name": "Bet365",
            "bets": [
              {
                "id": 19,
                "name": "Home/Away - 1st Qtr",
                "values": [
                  {
                    "value": "Home",
                    "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                  },
                  {
                    "value": "Away",
                    "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                  }
                ]
              }
            ]
          };
    }
};

export const getOverUnderOddAPI = async (gameid) => {
    try {
        const res = await axios({
            method: "GET",
            params: { gameid: gameid },
            url: apiConfig["overUnderOddAPI"],
        });
        
        if(!isEmptyObj(res.data)){
            if (res.data.status == "success") {
                return res.data.data[0].bookmakers[0];
            } else {
                return {
                    "id": 4,
                    "name": "Bet365",
                    "bets": [
                      {
                        "id": 19,
                        "name": "Home/Away - 1st Qtr",
                        "values": [
                          {
                            "value": "Home",
                            "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                          },
                          {
                            "value": "Away",
                            "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                          }
                        ]
                      }
                    ]
                  };
            }
        }
    } catch (error) {
        return {
            "id": 4,
            "name": "Bet365",
            "bets": [
              {
                "id": 19,
                "name": "Home/Away - 1st Qtr",
                "values": [
                  {
                    "value": "Home",
                    "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                  },
                  {
                    "value": "Away",
                    "odd": Math.floor(Math.random() * (10 - 1 + 1) + 1).toFixed(2)
                  }
                ]
              }
            ]
          };
    }
};