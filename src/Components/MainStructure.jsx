import React from "react";
import {
  Nav,
  Sidebar,
  Container,
  Dropdown,
  Icon,
  Navbar,
  Sidenav,
  Header,
  Content,
} from "rsuite";
import { Box, Text } from "@chakra-ui/react";
import { makeStyles } from "@material-ui/core/styles";
import Datatable from "./DataTable"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  sideNav: {
    fontSize: "17px",
  },
}));

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  //   background: "#34c3ff",
  //   color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: "56px",
  textAlign: "center",
};
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand,
    });
  }
  render() {
    const { expand } = this.state;
    return (
      <div className="show-fake-browser sidebar-page">
        <Container>
          <Sidebar
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "17px",
            }}
            width={expand ? 260 : 56}
            collapsible
          >
            <Sidenav
              expanded={expand}
              defaultOpenKeys={["3"]}
              appearance="subtle"
              style={{ marginBottom: "20px" }}
            >
              <Sidenav.Body style={{ marginBottom: "10px" }}>
                <Nav>
                  <Nav.Item eventKey="1">
                    <p style={{ fontSize: "14px" }}>Material Science Home</p>
                  </Nav.Item>
                  <Nav.Item eventKey="2" active>
                    <p style={{ fontSize: "14px" }}>
                      Material Science Products
                    </p>
                  </Nav.Item>
                  <Nav.Item eventKey="3" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}>Biomaterials</p>
                  </Nav.Item>
                  <Nav.Item eventKey="4" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}>Bioelectronics</p>
                  </Nav.Item>
                  <Nav.Item eventKey="5" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}> Graphene Technology</p>
                  </Nav.Item>
                  <Nav.Item eventKey="6" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}>Drug Delivery</p>
                  </Nav.Item>
                  <Nav.Item eventKey="7" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}>Material Synthesis</p>
                  </Nav.Item>
                  <Nav.Item eventKey="8" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}>Metal & Ceramic Science</p>
                  </Nav.Item>
                  <Nav.Item eventKey="9" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}>Micro & NanoElectronics</p>
                  </Nav.Item>
                  <Nav.Item eventKey="10" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}> NanoMaterials</p>
                  </Nav.Item>
                  <Nav.Item eventKey="11" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}>
                      Organic & Printed Electronics
                    </p>
                  </Nav.Item>
                  <Nav.Item eventKey="12" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}> Polymer Science</p>
                  </Nav.Item>
                  <Nav.Item eventKey="13" icon={<Icon icon="plus-square" />}>
                    <p style={{ fontSize: "14px" }}>
                      Renewable & Elternative Energy
                    </p>
                  </Nav.Item>
                  <Dropdown
                    eventKey="14"
                    trigger="hover"
                    title="Material Science | Learning Center"
                    icon={<Icon icon="plus-square" />}
                    placement="rightStart"
                  >
                    <Dropdown.Item eventKey="15">Labware</Dropdown.Item>
                  </Dropdown>
                  <Nav.Item eventKey="16" icon={<Icon icon="plus-square" />}>
                    3d Printing Materials
                  </Nav.Item>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={this.handleToggle} />
          </Sidebar>

          <Container>
            <Header>
              <Box width="100%" p={4} color="black" bg="#ccc" height="200%">
                <h3>
                  <b>Monofunctional PEGs</b>
                </h3>
              </Box>
            </Header>
            <br/>
            <br/>
            <br/>
            <Content>
              <Box width="100%"  p={4} color="#888" >
                <p>
                  Sigma-Aldrich offers monofunctional poly(ethylene glycol)
                  (PEG), otherwise known as poly(oxyethylene) or poly(ethylene
                  oxide) (PEO), derivatives in a range of molecular weights,
                  containing a single functional group of various
                  functionalities, such as amines, maleimides, azides, NHS
                  esters, thiols and many more. The diverse offering of PEGs by
                  Sigma-Aldrich allows for easy incorporation of PEG into
                  proteins, peptides, surfaces, and other materials.
                </p>
                <p>
                  To view a list of products filtered by functionality, simply
                  click on the "+" sign on the functionality column and make
                  your selection. Alternatively, you can browse through all
                  available functionalities in the table immediately below.
                </p>
              </Box>
                <br/>
                <br/>
                <br/>
                <Datatable />
            </Content>
          </Container>
        </Container>
      </div>
    );
  }
}

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={(children) => {
              return <Icon style={iconStyles} icon="cog" />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
          >
            <Icon icon={expand ? "angle-left" : "angle-right"} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default function MainStructure() {
  return (
    <>
      <Page />
    </>
  );
}
