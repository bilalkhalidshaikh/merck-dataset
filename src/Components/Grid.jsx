import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  const arrow = ">";
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item >
            <ul className={classes.list}>
                <li> <h6>ANALYTICAL / CHROMATOGRAPHY {arrow} </h6></li>
              <li>Standard & Refrence Materials</li>
              <li>Gas Chromatography</li>
              <li>HPLC & UHPLC</li>
              <li>LC-MS</li>
              <li>LPLC. TLC & Paper</li>
              <li>Chromatography</li>
              <li>Mobile laboratory</li>
              <li>Photometry</li>
              <li>Spectroscopy</li>
              <li>Sample Prep & Purification</li>
              <li>Titration & Kari Fischer</li>
              <br />
              <li><h6>CHEMISTRY {arrow} </h6></li>
              <li>Acids & Bases</li>
              <li>Catalysis & Inorganics</li>
              <li>Chemical Synthesis</li>
              <li>Chemistry Libraries</li>
              <li>Heterocyclic Building Block</li>
              <li>Organic Building Blocks</li>
              <li>Organometallic</li>
              <li>Salts</li>
              <li>Solvents</li>
              <li>Stable Isotopes</li>
              <br/>
              <li><h6>NEW PRODUCTS</h6></li>
            </ul>
        </Grid>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid> */}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container>
          <FormRow />
        </Grid>
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
}
