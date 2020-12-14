import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Diagram from "../Images/diagram.jpg";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, price, mol) {
  return { name, calories, fat, carbs, price, mol };
}

const rows = [
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    24,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData("Eclair", 262, 16.0, <img src={Diagram} />, 6.0),
  "average Mn 2,000",
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData("Cupcake", 305, 3.7, <img src={Diagram} />, 4, "average Mn 2,000"),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData("Gingerbread", 356, 16.0, <img src={Diagram} />, 3.9),
  "average Mn 2,000",
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Poly(ethylene glycol) methyl ether 2-bromoisobutyrate average Mn 2,000",
    750069,
    6.0,
    <img src={Diagram} />,
    4.0,
    "average Mn 2,000"
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <img src={Diagram} />,
    6.0,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <img src={Diagram} />,
    4.3,
    "average Mn 2,000"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <img src={Diagram} />,
    3.9,
    "average Mn 2,000"
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Products</TableCell>
            <TableCell align="right">Funtionality</TableCell>
            <TableCell align="right">Structure</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Mol.WL</TableCell>
            <TableCell align="right">Add to Cart</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right" width={50}>
                <a style={{ color: "blue" }}>{row.calories}</a>
              </TableCell>
              <TableCell align="right" width={50}>{row.fat}</TableCell>
              <TableCell align="right"  width={50}>{row.carbs}</TableCell>
              <TableCell component="th" scope="row" width={50}>
                {row.name}
              </TableCell>
              <TableCell align="right" width={100}>{row.mol}</TableCell>
              <TableCell align="right" width={70}>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
