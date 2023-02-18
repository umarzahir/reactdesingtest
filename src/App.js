import NavBar from "./components/navbar";
import Slider from "./components/slider";
import MyCard from "./components/card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MianText from "./components/MianText";
import Search from "./components/Search";
import { Button, Stack } from "react-bootstrap";
import FullTextContainer from "./components/FullTextContainer";
import PentgCard from "./components/pentgCard";
import ThirdCard from "./components/ThirdCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <MianText />

      <Container fluid className="my-5">
        <Row>
          <Col className="me-5">
            <Search />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex  justify-content-center">
            <MyCard />
          </Col>
          <Col className="d-flex  justify-content-center">
            <MyCard />
          </Col>
          <Col className="d-flex  justify-content-center">
            <MyCard />
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="d-flex  justify-content-center">
            <MyCard />
          </Col>
          <Col className="d-flex  justify-content-center">
            <MyCard />
          </Col>
          <Col className="d-flex  justify-content-center">
            <MyCard />
          </Col>
        </Row>
      </Container>

      <div style={{ textAlign: "center" }} className="my-3">
        <Button
          style={{
            backgroundColor: "#03989E",
            borderRadius: "11px",
            width: "200px",
          }}
        >
          {" "}
          عرض المزيد{" "}
        </Button>
      </div>
      <div style={{ marginBottom: "150px" }}>
        <FullTextContainer />
      </div>

      <Container>
        <Row>
          <Col className="d-flex  justify-content-center">
            <PentgCard />
          </Col>
          <Col className="d-flex  justify-content-center">
            <PentgCard />
          </Col>
          <Col className="d-flex  justify-content-center">
            <PentgCard />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex  justify-content-center">
            <PentgCard />
          </Col>
          <Col className="d-flex  justify-content-center">
            <PentgCard />
          </Col>
          <Col className="d-flex  justify-content-center">
            <PentgCard />
          </Col>
        </Row>
      </Container>

      <Stack
        direction="horizontal"
        className="my-5"
        style={{
          backgroundColor: "#03989E",
          height: "500px",
          paddingLeft: "400px",
          paddingRight: "400px",
        }}
      >
        <div className="ms-auto">
          <ThirdCard />
        </div>
        <ThirdCard />
      </Stack>
    </div>
  );
}

export default App;
