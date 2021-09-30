import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <p>
        This is a study project for React course at Helsinki Business College
      </p>
      <Form
        method="POST"
        action="//public.bc.fi/s2100140/form/contact.php"
        className="form"
        id="form"
      >
        <Form.Group>
          <Form.Label htmlFor="">Your email:</Form.Label>
          <Form.Control
            type="email"
            width="10px"
            name="email"
            id="email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Receiver:</Form.Label>
          <Form.Control type="email" width="10px" name="email" id="receiver" />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="">Subject:</Form.Label>
          <Form.Control
            width="10px"
            type="text"
            id="subject"
            name="subject"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="">Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            type="text"
            name="message"
            id="message"
            required
          />
          <Button type="submit" className="addbtn" value="Send data">
            Send mail
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default About;
