import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Dropdown, ButtonToolbar } from "rsuite";
import { Table } from "@chakra-ui/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function DropdownBar() {
  const [currentLocation, setCurrentLocation] = useState("");
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        setCurrentLocation(response);
      })
      .catch((data, status) => {});
  }, []);
  const arrow = ">";
  const CustomServiceDropdown = ({ ...props }) => (
    <Dropdown {...props}>
      <div style={{ boxShadow: "-7px 2px 15px 0px rgba(60, 50, 50, 0.86)" }}>
        <Dropdown.Item>
          <h6>Services Offerd</h6>
          <li>Milli-Q&reg; Services</li>
          <li>LANEXO&tem; System</li>
          <li>Basic Research</li>
          <li>Product & Process Development </li>
          <li>Manufacturing & Production</li>
          <li>Regulatory Complance</li>
          <li>Facility Operations</li>
          <li>Microbiology Services</li>
        </Dropdown.Item>
        <Dropdown.Item>
          <h6>CUSTOM CAPABILIITIES</h6>
          <li>Drug & Process Development</li>
          <li>Genomic Solution</li>
          <li>Analytical / Chromatography</li>
          <li>Production Materials</li>
        </Dropdown.Item>
        <Dropdown.Item></Dropdown.Item>
      </div>
    </Dropdown>
  );
  const CustomIndustriesDropdown = ({ ...props }) => (
    <Dropdown {...props}>
      <div style={{ boxShadow: "-7px 2px 15px 0px rgba(60, 50, 50, 0.86)" }}>
        <Table>
          <Dropdown.Item>
            <li>Academic Research</li>
            <li>Agriculture</li>
            <li>Biotechnology</li>
            <li>Cell Therapy Manufacturing</li>
            <li>Clinical Diagnostics</li>
            <li>Cosmetics & Persnol Care</li>
            <li>Diagnostics Manufacturing</li>
            <li>Enviroment & IH</li>
            <li>Flavors & Fragrance</li>
            <li>Food & Beverage</li>
            <li>Forensic Testing</li>
            <li>mAb Manufacturing</li>
            <li>Medical Materials</li>
            <li>Pharma Drug Screening</li>
            <li>Pharma Manufacturing</li>
            <li>Pharma Oncology</li>
            <li>Pharma OC</li>
            <li>Production Materials</li>
            <li>Tissue Diagnostics</li>
            <li>Vaccines</li>
          </Dropdown.Item>
        </Table>
      </div>
    </Dropdown>
  );
  const CustomProductsDropdown = ({ ...props }) => (
    <Dropdown {...props}>
      <div style={{ boxShadow: "-7px 2px 15px 0px rgba(60, 50, 50, 0.86)" }}>
        <Dropdown.Item>
          <Row>
            <Col sm>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h6>ANALYTICAL / CHROMATOGRAPHY {arrow} </h6>
                </li>
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
                <li>
                  <h6>CHEMISTRY {arrow} </h6>
                </li>
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
                <br />
                <li>
                  <h6>NEW PRODUCTS</h6>
                </li>
              </ul>
            </Col>
            <Col sm>
              <ul>
                <li>
                  <h6>LIFE SCIENCE</h6>
                </li>
                <li>Antibodies</li>
                <li>Biochemicals & Reagents</li>
                <li>Biological Buffers</li>
                <li>Cell Biology</li>
                <li>Cell Culture</li>
                <li>CRISPR</li>
                <li>Enzymes, Inhibitors & Subtrates</li>
                <li>Microbiology</li>
                <li>Molecular Biology</li>
                <li>Open Reading Frame (ORF)</li>
                <li>PCR & Amplification</li>
                <li>Peptide Information</li>
                <li>RNAI</li>
                <li>Synthetic Biology</li>
                <li>ZFN</li>
              </ul>

              <ul>
                <li>
                  <h6>MATERIALS SCIENCE</h6>
                </li>
                <li>Organic & Printed Electronics</li>
                <li>Metal & Ceramic Science</li>
                <li>Micro/Nano Electronics</li>
                <li>Polymer Science</li>
              </ul>
              <ul>
                <li>
                  <h6>GREEN ALTERNATIVES</h6>
                </li>
              </ul>
            </Col>
            <Col sm>
              <ul>
                <li>
                  <h6>OLIGOS & QPCR PROBES</h6>
                </li>
                <li>Order Now</li>
                <li>Custom DNA Oligos</li>
                <li>SYBR&reg; Green Primers</li>
                <li>Custom qPCR Probes</li>
                <li>Predesigned Props</li>
                <li>Custom & Predesigned sRNA</li>
              </ul>
              <ul>
                <li>
                  <h6>PHARMA & BIOPHARMA MANUFACTURING</h6>
                </li>
                <li>Bioharmaceutical</li>
                <li>Bioprocess Product & Services</li>
                <li>Formulation Development & Manufacturing</li>
                <li>APIs & Contract Manufacturing Services</li>
              </ul>
              <ul>
                <li>
                  <h6>LABWARE</h6>
                </li>
                <li>Coming</li>
                <li>Aldrich</li>
                <li>GE Life Science</li>
                <li>EMD Millipore</li>
                <li>Water Purification System</li>
              </ul>
            </Col>
          </Row>
        </Dropdown.Item>
      </div>
    </Dropdown>
  );
  const CustomAccountDropdown = ({ ...props }) => (
    <Dropdown {...props}>
      <div style={{ boxShadow: "-7px 2px 15px 0px rgba(60, 50, 50, 0.86)" }}>
        <Dropdown.Item>
          <Button
            size="sm"
            height="48px"
            width="200px"
            border="2px"
            backgroundColor="#5612a3"
            borderColor="green.500"
            color="white"
          >
            Sign In
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Text>
            New User ? &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
            <a style={{ color: "skyblue" }}> Start</a>
          </Text>
        </Dropdown.Item>
        <Dropdown.Item>
          <Text>
            {currentLocation.country} &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
            <a style={{ color: "skyblue" }}> Change </a>
          </Text>
        </Dropdown.Item>
      </div>
    </Dropdown>
  );
  const CustomSupportDropdown = ({ ...props }) => (
    <Dropdown {...props}>
      <div style={{ boxShadow: "-7px 2px 15px 0px rgba(60, 50, 50, 0.86)" }}>
        <Dropdown.Item>
          <li>SDS</li>
          <li>Certificates</li>
          <li>Customer Support</li>
          <li>Technical Services</li>
          <li>Quality & Regulatory Management</li>
          <li>Web Help</li>
          <li>Web ToolBox</li>
          <li>Worldwide Offices</li>
        </Dropdown.Item>
      </div>
    </Dropdown>
  );
  const CustomOrderDropdown = ({ ...props }) => (
    <Dropdown {...props}>
      <div style={{ boxShadow: "-7px 2px 15px 0px rgba(60, 50, 50, 0.86)" }}>
        <Dropdown.Item>Your Cart is Empty</Dropdown.Item>
        <Dropdown.Item>
          <Button
            size="xm"
            height="20px"
            width="80px"
            border="2px"
            backgroundColor="#5612a3"
            borderColor="green.500"
            color="white"
            fontSize="10px"
          >
            Order Center
          </Button>
          Order By Product Name
        </Dropdown.Item>
      </div>
    </Dropdown>
  );
  return (
    <div>
      <Navbar bg="light" light variant="light">
        <Navbar.Brand>&nbsp;</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <ButtonToolbar>
              <CustomProductsDropdown
                title={<h6>Products</h6>}
                trigger={["click", "hover"]}
              />
            </ButtonToolbar>
          </Nav.Link>
          <Nav.Link>
            <ButtonToolbar>
              <CustomServiceDropdown
                title={<h6>Services</h6>}
                trigger={["click", "hover"]}
              />
            </ButtonToolbar>
          </Nav.Link>
          <Nav.Link>
            <ButtonToolbar>
              <CustomIndustriesDropdown
                title={<h6>INDUSTRIES</h6>}
                trigger={["click", "hover"]}
              />
            </ButtonToolbar>
          </Nav.Link>
        </Nav>
        <Nav>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link>
            <ButtonToolbar>
              <CustomAccountDropdown
                title={<h6>ACCOUNT</h6>}
                trigger={["click", "hover"]}
              />
            </ButtonToolbar>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <ButtonToolbar>
              <CustomSupportDropdown
                title={<h6>SUPPORT</h6>}
                trigger={["click", "hover"]}
              />
            </ButtonToolbar>
          </Nav.Link>
          <Nav.Link>
            <ButtonToolbar>
              <CustomOrderDropdown
                title={
                  <h6>
                    ORDER <ShoppingCartIcon />{" "}
                  </h6>
                }
                trigger={["click", "hover"]}
              />
            </ButtonToolbar>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
