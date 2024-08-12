import { Button, Form } from 'react-bootstrap';

const NavBar = () => {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Введите поисковый запрос"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="primary" className="btn">ИСКАТЬ</Button>
      </Form>
    </nav >
  )
}

export default NavBar;