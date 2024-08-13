import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';

// import repos from './const';


// const searchRepo = () => {
//   // const response = repos.map((repo) => repo === value);
//   console.log(value)
// }

const NavBar = () => {

  const [value, setValue] = useState('');
  // console.log(value)

  // const searchRepo = (e) => {
  //   console.log(e.target.value)
  // }

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Введите поисковый запрос"
          className="me-2"
          aria-label="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="primary" className="btn" onClick={() => console.log(value)}>ИСКАТЬ</Button>
      </Form>
    </nav >
  )
}

export default NavBar;