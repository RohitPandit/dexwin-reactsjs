import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { LiveContext } from "src/context/Live";

import DashboardCard from 'src/component/DashboardCard';
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

function LiveComponent() {

  const classes = useStyles();
  const live = useContext(LiveContext);
  const [liveLeaguesdata, setLiveLeaguesData] = useState([]);

  useEffect(() => {
    document.title = 'Live Matches | Dexwin';
    setLiveLeaguesData(live.matches);
  });

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
      <DashboardCard type="live" liveLeaguesdata={liveLeaguesdata} />
    )
  }

  return (
    <div>
      { liveLeaguesdata.length !== 0 ? showData() : noDataFoundMessage() }
      {/*<Box mt={4}>
          <DashboardCard type="live" liveLeaguesdata={liveLeaguesdata}/>
       </Box> */}
    </div>
  )
}

export default LiveComponent;