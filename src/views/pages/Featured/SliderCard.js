import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  Paper,Button, Grid
} from "@material-ui/core";
import Slider from "react-slick";
import { ModalContext } from "src/component/context";
import Modal from "src/component/Modal";
import CosafaCupGame from "src/views/pages/CosafaCupGame/Index";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dropdown from 'react-dropdown';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const useStyles = makeStyles((theme) => ({
  dialogBox: {
    padding: "30px",
  },
  cardBox: {
    margin: "8px 0px",
    cursor: "pointer",
    borderRadius: "20px",
    height: "182px",
    // boxShadow: "-4px -8px 20px rgb(77 73 73 / 28%), 8px 10px 20px rgb(0 0 0 / 25%)",
    "& h5": {
      padding: '25px 0px',
      fontWeight: '700',
      fontSize: '14px'
    }
  },
  btn: {
    backgroundColor: '#2B2B2B !important',
    borderRadius: '100px !important', width: '8rem !important', padding: '15px',
    fontWeight:'800'
  },
  btneuro: {
    backgroundColor: '#2B2B2B !important',
    borderRadius: '100px !important', width: '9rem !important', padding:'14px', fontWeight:'800'
  },
  btn1: {
    backgroundColor: '#2B2B2B !important',
    padding: '0.5rem'
  },
  Convertedimg: {
    // padding: "10px 0",
  },
  slideMargin: { margin: "0 10px", padding: "10px 0" }

}));
const cardData = [
  {
    image: "/images/liveimg.png",
    subheading: "Lorem ipsum dolor sit amet,",
    name: "POPULAR",
  },
  {
    image: "/images/popularimg.png",
    name: "FEATURED",
  },

  {
    image: "/images/liveimg.png",
    subheading: "Lorem ipsum dolor sit amet,",
    name: "TEAMS",
  },
  {
    image: "/images/parlays.png", name: "PARLAYS+",
  },
  {
    image: "/images/players.png", name: "PLAYERS",
  },

  {
    image: "/images/popularimg.png",
    name: "POPULAR",
  },

  {
    image: "/images/featuredimg.png", name: "FEATURED",
  },
  {
    image: "/images/parlays.png", name: "PARLAYS+",
  },
  {
    image: "/images/players.png", name: "PLAYERS",
  },
  {
    image: "/images/featuredimg.png", name: "LIVE",
  },

];
function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char = props.type === "next" ? <ArrowForwardIosIcon style={{color:"#787878"}}/> : <ArrowBackIosIcon style={{color:"#787878"}}/>;
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
function NftSlider() {
  const classes = useStyles();
  const [showModal, updateShowModal] = React.useState(false);
  const toggleModal = () => updateShowModal(state => !state);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const options = [
    'NBA', 'CBA', 'FBA'
  ];

  return (
    <Box className={classes.Convertedimg}>
      <Box>
        <Grid xs={12} spacing={2} style={{ backgroundColor: '#191919',boxShadow: "-10px -10px 20px rgb(87 82 82 / 50%), 10px 10px 20px rgb(48 47 47 / 50%)", display: 'flex', borderRadius: '20px' }}>
          <Grid item xs={2} style={{ marginRight: '50%', padding: '2rem', backgroundColor: '#222222', display: 'flex',borderRadius: "14px 0px 10px 16px"  }}>
            <Dropdown options={options} placeholder="BASKETBALL" style={{ color: '#787878',}} />  <KeyboardArrowDownIcon style={{ color: '#fff' }} />
          </Grid>
          <Grid item xs={10} style={{ marginLeft: '-50%' }}>
            <Carousel responsive={responsive} style={{display:'flex'}}>
              <Button className={classes.btn} style={{ marginRight: '40%', border:'1px solid #70D5FB'}}><img src="images/NBA.png" style={{width:'1rem', height:'1rem'}}></img>&nbsp;NBA</Button>
              <Button className={classes.btneuro} style={{ marginLeft: '-125%', }}><img src="images/EURO.png" style={{width:'1rem', height:'1rem'}}></img>EURO LEAGUE</Button>
              <Button className={classes.btn} style={{ marginLeft: '-215%' }}><img src="images/CBA.png" style={{width:'1rem', height:'1rem'}}></img>&nbsp;CBA</Button>
              <Button className={classes.btn} style={{ marginLeft: '-315%' }}><img src="images/NBA.png" style={{width:'1rem', height:'1rem'}}></img>&nbsp;FIBA</Button>
              <Button className={classes.btn} style={{ marginLeft: '-415%' }}><img src="images/CBA.png" style={{width:'1rem', height:'1rem'}}></img>&nbsp;NBA</Button>
              <Button className={classes.btn} style={{ marginLeft: '-515%' }}><img src="images/CBA.png" style={{width:'1rem', height:'1rem'}}></img>&nbsp;CBA</Button>
              <Button className={classes.btn} style={{ marginLeft: '-615%' }}><img src="images/NBA.png" style={{width:'1rem', height:'1rem'}}></img>&nbsp;NBA</Button>

            </Carousel>
          </Grid>



        </Grid>
        <Slider {...settings}>
          {cardData.map((values) => {
            return (
              <>
                <Box className={classes.slideMargin}>
                  <Paper className={classes.cardBox} elevation={2} onClick={toggleModal}>
                    <img src={values.image} alt="cardImage" width="100%" style={{height:"182px"}}/>
                    <p className="imgname">
                      {values.name}
                    </p>
                  </Paper>
                </Box>
              </>
            );
          })}
        </Slider>
      </Box>
      <ModalContext.Provider value={{ showModal, toggleModal }}>
        <div>
          <Modal canShow={showModal} updateModalState={toggleModal}>
            <CosafaCupGame />
          </Modal>
        </div>
      </ModalContext.Provider>
    </Box>
  );
}

export default NftSlider;
