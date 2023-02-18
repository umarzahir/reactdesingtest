import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container fluid className="px-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <img src="logo.png" alt="logo" width={200}></img>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Stack direction="horizontal" gap={5}>
              <Nav.Link className="border-bottom text-white">
                أخبار صناديقنا
              </Nav.Link>
              <Nav.Link className="border-bottom text-white">مركز </Nav.Link>
              <Nav.Link className="border-bottom text-white">
                الفرص الإستثمارية
              </Nav.Link>
              <Nav.Link className="border-bottom text-white">
                اضف فرصتك{" "}
              </Nav.Link>
              <Nav.Link className="border-bottom text-white">استثمر</Nav.Link>
            </Stack>
          </Nav>
        </Navbar.Collapse>
        <Stack className="w-300" direction="horizontal" gap={5}>
          <Button className="mynav-btn2">تسجيل الدخول</Button>
          <Button className="mynav-btn">التسجيل</Button>
        </Stack>
        <Navbar.Brand href="#home">
          <NavDropdown
            className="text-white me-4"
            title="العربية"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
