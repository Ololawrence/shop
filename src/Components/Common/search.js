import React from "react";
import Form from "react-bootstrap/Form";

const Search = () => {

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
    
      />
    </Form>
  );
};

export default Search;