import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ filterSearch }) {
  const [searchVal, setSearchVal] = useState("");
  const onSearch = () => {
    filterSearch(searchVal);
    setSearchVal("");
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="shadow-lg ">
      <Container>
        <Navbar.Brand href="#">قائمة الطعام</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ابحث...."
              className="me-2"
              aria-label="Search"
              onChange={e => setSearchVal(e.target.value)}
              value={searchVal}
            />
            <Button variant="outline-success" className="btn_search me-3" onClick={() => onSearch()}>
              ابحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
