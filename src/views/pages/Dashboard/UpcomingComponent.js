import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from '@material-ui/core';
import { UpcomingContext } from "src/context/Upcoming";

import DashboardCard from "src/component/DashboardCard";
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

const useStyles = makeStyles((theme) => ({
  boxRelative: {
    position: "relative",
    height: "15rem",
    textAlign: "center"
  },
  boxFixedCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  centerIcon: {
    fontSize: "9rem",
    transform: "rotateZ(45deg)",
    color: "rgba(255, 255, 255, 0.1)",
  },
  textCenter: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.1)",
    fontSize: "1rem"
  }

}));

function UpcomingComponent() {

  const classes = useStyles();
  const upcoming = useContext(UpcomingContext);
  const [upcommingleaguesData, setUpcommingLeaguesData] = useState([]);

  useEffect(() => {
    document.title = 'Upcoming Matches | Dexwin';
    setUpcommingLeaguesData(upcoming.matches);
  }, []);

  const noDataFoundMessage = () => {
    return(
      <div className={classes.boxRelative}>
        <div className={classes.boxFixedCenter}>
          <SportsBasketballIcon className={classes.centerIcon} />
          <div className={classes.textCenter}>Matches are not running now.</div>
        </div>
      </div>
    );
  }

  const showData = () => {
    return(
      <DashboardCard type="upcoming" upcommingleaguesData={upcommingleaguesData} />
    )
  }

  return (
    <div>
      { upcommingleaguesData.length !== 0 ? showData() : noDataFoundMessage() }
      {/* <Box mt={4}>
        <DashboardCard type="upcoming" upcommingleaguesData={upcommingleaguesData} />
      </Box> */}
    </div>
  );
}

export default UpcomingComponent;
