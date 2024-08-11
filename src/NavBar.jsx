import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">

      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Введите поисковый запрос"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Искать</Button>
      </Form>

    </Navbar>
  )
}

export default NavBar;