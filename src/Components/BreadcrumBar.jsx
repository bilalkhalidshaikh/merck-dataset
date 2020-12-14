import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PrintIcon from "@material-ui/icons/Print";
import { Button } from "@chakra-ui/react"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  link: {
    fontSize: "12px",
  },
}));
export default function BreadcrumBar() {
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  const [currentLocation, setCurrentLocation] = useState("");
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        setCurrentLocation(response);
      })
      .catch((data, status) => {});
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar>
        <Navbar.Brand href="#home">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              onClick={handleClick}
              className={classes.link}
            >
              {currentLocation.country} Home
            </Link>
            <Link
              color="inherit"
              href="/ProductDirectory"
              onClick={handleClick}
              className={classes.link}
            >
              Product Directory
            </Link>
            <Link
              color="inherit"
              href="/ProductDirectory/MaterialScience"
              onClick={handleClick}
              className={classes.link}
            >
              Material Science
            </Link>
            <Link
              color="inherit"
              href="/ProductDirectory/MaterialScience/PolymerScience"
              onClick={handleClick}
              className={classes.link}
            >
              Polymer Science
            </Link>
            <Link
              color="inherit"
              href="/ProductDirectory/MaterialScience/PolymerScience/Polymers"
              onClick={handleClick}
              className={classes.link}
            >
              Polymers
            </Link>
            <Link
              color="inherit"
              href="/ProductDirectory/MaterialScience/PolymerScience/Polymers/Poly"
              onClick={handleClick}
              className={classes.link}
            >
              Poly(ethylene glycol) and Ploy(ethylene oxide)
            </Link>

            <Link
              color="textPrimary"
              href="/components/breadcrumbs/"
              onClick={handleClick}
              aria-current="page"
              className={classes.link}
            >
              Monofunctional PEGs
            </Link>
          </Breadcrumbs>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button leftIcon={<FacebookIcon />} size="xs" _hover={{bg: "#3b589896"}}>Share</Button>
            <Button leftIcon={<TwitterIcon />} size="xs" _hover={{bg: "#00abee8c"}}>Tweet</Button>
            <Button leftIcon={<LinkedInIcon />} size="xs" _hover={{bg :" #0e77a885"}}>Share</Button>
            <Button size="xs" _hover={{bg : "#999"}}><PrintIcon /></Button>

          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
