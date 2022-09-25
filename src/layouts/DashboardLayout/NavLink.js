import { Link, NavLink } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Button, MenuItem, Avatar, Grid, } from "@material-ui/core";
import clsx from 'clsx';
import { IoBasketballOutline } from "react-icons/io5";
import { FaUserAlt } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { MdStarRate } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiUsers } from 'react-icons/hi';
import { FaQuestionCircle } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { GiTwoCoins } from 'react-icons/gi';
import { BiTransfer } from 'react-icons/bi';
import { MdLeaderboard } from 'react-icons/md';
import Tooltip from '@material-ui/core/Tooltip';
import { AiFillHome } from "react-icons/ai";
import { AuthContext } from "src/context/Auth";
import SnackbarService from 'src/services/SnackbarService';
import {GiSettingsKnobs} from "react-icons/gi";
import {FaSearch} from "react-icons/fa";
import {ImBook} from "react-icons/im";
import {GiCycle} from "react-icons/gi";
import { useLocation } from "react-router-dom";



const useStyles = makeStyles((theme) => ({

  MenuItem: {
    color: "#787878",
    // padding: "10px 30px",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "uppercase",
    "&.active": {
      background:
        "radial-gradient(98.18% 613.64% at 78.18% 50%, rgba(51, 153, 170, 0.81) 0%, rgba(51, 153, 170, 0) 100%) , radial-gradient(60% 120.26% at 40% 60%, #6437C0 0%, #6437C0 100%) , linear-gradient(159.8deg, #7784DA 24.32%, #7784DA 53.17%)",
    },
    // "&:hover": {
    //   color:"#fff",
    // },
    // "&:active": {
    //   color: "#fff",

    // },

    "& svg": {
      fontSize: "15px",
      color: "#787878",

    },
    "& .menuText": {
      paddingLeft: "14px",
      //     "&:hover": {
        // color:"#fff",
      // },
      // "&:active": {
      //   color: "#fff",

      // },
    },
  
    "& .MuiAvatar-root": {
      width: "30px",
      height: "30px",

    }
  },
  // AvatarIcon: {
  //   // padding: 10px 15px;
  //   borderRadius: 25,
  //   background: "radial-gradient(64.29% 64.29% at 30% 25.71%, #6D6D6D 0%, #141414 100%)",
  //   border: "2px solid #2E3237",
  //   transition: "all .25s ease",
  //   color: "#A2B1CA",
  //   fontSize: 12,
  //   textShadow: "0px 0px 2px rgba(0,0,0, 1)",
  //   boxShadow: "7px 7px 15px 0px rgb(0 0 0 / 30%), -1px -2px 5px 0px rgb(112 102 102), inset -1px -1px 1px 0px rgb(0 0 0 / 30%), inset 1px 1px 2px 0px rgb(162 154 154)",
  //   "& .menuText":{

  //   }
  // }

}));

const headersData = [
  {
    label: 'Home',
    href: '/',
    icon: "images/homeblue.svg",
    active: "images/homeactive.svg"
  },
  {
    label: 'My Account',
    href: '/my-account',
    icon: "images/myaccount.svg",
    active: "images/accountblue.svg",
  },
  {
    label: 'Wallet',
    href: '/wallet',
    icon: "images/wallet.svg",
    active: "images/walletblue.svg",
  },
  
  {
    label: 'Bridge Assets',
    href: '/bridge-assets',
    icon: "images/bridge.svg",
    active: "images/bridge.svg",
  },
  {
    label: 'Favourites',
    href: '/favourites',
    icon: "images/favs.svg",
    active: "images/favs.svg",
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: "images/notify.svg",
    active: "images/notify.svg",
  },
  {
    label: 'Transactions',
    href: '/transaction',
    icon: "images/transaction.svg",
    active: "images/transactionblue.svg",
  },
  {
    label: 'My Bets',
    href: '/my-bets',
    icon: "images/mybets.svg",
    active: "images/mybetsblue.svg",
  },
  {
    label: 'Referral',
    href: '/referrals',
    icon: "images/group.svg",
    active: "images/groupblue.svg",
  },
  {
    label: 'Leaderboard',
    href: '/leaderBoard',
    icon: "images/leader.svg",
    active: "images/leader.svg",
    
  },
 
  {
    label: 'Preferences',
    href: '/preferences',
    icon: "images/prefernces.svg",
    active: "images/preferncesblue.svg",
  },
  {
    label: 'Learn To Bet',
    href: '/learn-to-bet',
    icon: "images/learn.svg",
    active: "images/leaderblue.svg",
  },
  {
    label: 'Rules',
    href: '/rules',
    icon: "images/rule.svg",
    active: "images/ballblue.svg",
  },
  {
    label: 'FAQ',
    href: '/faq',
    icon: "images/ball.svg",
    active: "images/faqblue.svg",
  },
  {
    label: 'Support',
    href: '/support',
    icon: "images/support.svg",
    active: "images/support.svg",
  },

]
export default function (props) {
  const classes = useStyles();
  const location = useLocation();
  console.log(location.pathname, "location")

  const auth = useContext(AuthContext)
  const [snackBarContent, setSnackBarContent] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState('');
  const [snackBarStatus, setSnackBarStatus] = useState('');
  const [isConnected, setIsConnected] = useState(false);


  const snackBar = (msg, status) => {
    setSnackBarMsg(msg);
    setSnackBarStatus(status);
    setSnackBarContent(true);
    setTimeout(() => {
      setSnackBarContent(false);
    }, 2000);
  }

  useEffect(() => {
    if(auth.isLogin()){
      setIsConnected(true);
    }else{
      setIsConnected(false);
    }
  })

  return (
    <>
      { 
        isConnected &&
        headersData.map(({ label, href, icon, active }) => {
          return (
            <>
              <NavLink
                activeClassName="active" exact
                {...{
                  key: label,
                  color: "inherit",
                  to: href,
                }}
              >
                <MenuItem className={`${classes.MenuItem} menuitem`}>
                  <div className="navlinkIcon">
                  {location.pathname == href ? 
                <img src={active}></img> :  <img src={icon}></img>}
                
                </div>
                  {location.pathname == href ?
              <span className="menuText activeLink" >{label}</span>
              : <span className="menuText">{label}</span>}</MenuItem>

              </NavLink>
            </>
          )
        })
      }

      { 
        !isConnected &&
        headersData.map(({ label, href, icon }) => {
          return (
            <>
              <NavLink
                activeClassName="active" exact
                {...{
                  key: label,
                  color: "inherit",
                  to: "",
                }}
              >
                <MenuItem className={`${classes.MenuItem} menuitem`}>
                  <img src={icon}></img>{location.pathname == href ?
              <span className="menuText activeLink" >{label}</span>
              : <span className="menuText" style={{color:"#787878"}}>{label}</span>}
</MenuItem>
              </NavLink>
            </>
          )
        })
      }
    </>
  )
}
