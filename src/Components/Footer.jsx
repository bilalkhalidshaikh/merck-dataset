import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Merck from "../Images/mf.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import FooterImgOne from "../Images/footimg1.jpg";
import FooterImgTwo from "../Images/footimg2.jpg";
import FooterImgThree from "../Images/footimg3.jpg";
import FooterImgFour from "../Images/footyimg4.jpg";
import { Image, Button } from "@chakra-ui/react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(8),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function BottomNav() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#461aac", color: "white", height: "20vh" }}
      >
        <Navbar.Brand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <img src={Merck} />
            </Nav.Link>
            <Nav.Link>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "10px",
                  color: "white",
                  marginTop: "20px",
                  width: "80%",
                }}
              >
                <b>
                  © 2020 Merck KGaA, Darmstadt, Germany and/or its affiliates.
                  All Rights Reserved.
                </b>
                Reproduction of any materials from the site is strictly
                forbidden without permission. Sigma-Aldrich Products are sold
                exclusively through Sigma-Aldrich, Inc. Site Use Terms | Privacy
              </p>
            </Nav.Link>
          </Nav>
          <Nav style={{ width: "20vw" }}>
            <Nav.Link eventKey={2}>
              <Button
                borderRadius="50%"
                width={30}
                height={30}
                color="red"
                style={{ border: "1px solid red" }}
              >
                <FacebookIcon fontSize="small" />
              </Button>
              &nbsp;
              <Button
                borderRadius="50%"
                width={30}
                height={30}
                color="red"
                style={{ border: "1px solid red" }}
              >
                <LinkedInIcon fontSize="small" />
              </Button>
              &nbsp;
              <Button
                borderRadius="50%"
                width={30}
                height={30}
                color="red"
                style={{ border: "1px solid red" }}
              >
                <TwitterIcon fontSize="small" />
              </Button>
              &nbsp;
              <Button
                borderRadius="50%"
                width={30}
                height={30}
                color="red"
                style={{ border: "1px solid red" }}
              >
                <InstagramIcon fontSize="small" />
              </Button>
              &nbsp;
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

function ImageGrid() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid item>
              <Image src={FooterImgOne} />
              &nbsp;&nbsp;&nbsp;
              <Image src={FooterImgThree} />
            </Grid>
            &nbsp;&nbsp;
            <Grid item>
              <Image src={FooterImgTwo} />
              &nbsp;&nbsp;&nbsp;
              <Image src={FooterImgFour} />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <li
              style={{
                listStyle: "none",
                color: "#461aac",
                fontSize: "16px",
                fontWeight: "bolder",
                textAlign: "left",
              }}
            >
              <p>Service & Support</p>
            </li>
            <li
              style={{ listStyle: "none", fontSize: "12px", textAlign: "left" }}
            >
              <li>CUSTOMER SUPPORT</li>
              <li>TECHNICAL SERVICE</li>
              <li>WEB HELP DESK</li>
              <li>SDS</li>
              <li>C OF A</li>
              <br />
              <li
                style={{
                  listStyle: "none",
                  color: "#461aac",
                  fontSize: "16px",
                  fontWeight: "bolder",
                  textAlign: "left",
                }}
              >
                <p>Ordering</p>
              </li>
              <li>CUSTOM PRODUCTS</li>
              <li>ECOMMERCE SOLUTIONS</li>
              <li>ORDER CENTER</li>
              <li>PRODUCTS</li>
              <li>TERMS & CONDITIONS OF SALE</li>
            </li>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <li
              style={{
                listStyle: "none",
                color: "#461aac",
                fontSize: "16px",
                fontWeight: "bolder",
                textAlign: "left",
              }}
            >
              <p>Corporate</p>
            </li>
            <li
              style={{ listStyle: "none", fontSize: "12px", textAlign: "left" }}
            >
              <li>BUSINESS DEVELOPMENT</li>
              <li>WORLDWIDE OFFICES</li>
              <li>ABOUT US</li>
              <li>SITE MAP</li>
              <li>CAREERS</li>
              <li>EVENTS</li>
              <li>PROGRAMS</li>
              <li>REACH REGULATIONS</li>
              <li>REACH REGULATIONS</li>
              <li>CONTACT US</li>
              <li>EMAIL SUBSCRIPTION CENTER</li>
              <li>TOOL BOX</li>
              <li>TRADEMARKS</li>
            </li>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        style={{ height: "50vh", borderTop: "3px solid #ccc" }}
      >
        <ImageGrid />
      </Container>
      <BottomNav />
    </React.Fragment>
  );
}
