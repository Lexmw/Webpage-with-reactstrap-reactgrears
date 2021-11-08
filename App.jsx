import React, { useState } from "react";
import {
  Button,
  Navbar,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  SummaryBox,
  SummaryBoxItem
} from "@appfolio/react-gears";
import {
  UncontrolledCarousel,
  Form,
  FormGroup,
  FormText,
  Label,
  Col,
  Input,
  option,
  legend,
} from "reactstrap";
const Container = {
  margin: "auto",
};

const FormContainer = {
  margin: "10px",
  padding: "25px",
};

export default App = (props) => {
  return (
    <div id="container" style={Container}>
      <Navbar expand="md" dark="true" fixed="top" color="black">
        <NavbarBrand href="/">react-gears</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!false)} />
        <Collapse isOpen={!false} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/appfolio/react-gears">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar direction="down">
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

      <UncontrolledCarousel
        items={[
          {
            altText: "Slide 1",
            caption: "Slide 1",
            key: 1,
            src: "https://picsum.photos/id/123/1200/600",
          },
          {
            altText: "Slide 2",
            caption: "Slide 2",
            key: 2,
            src: "https://picsum.photos/id/456/1200/600",
          },
          {
            altText: "Slide 3",
            caption: "Slide 3",
            key: 3,
            src: "https://picsum.photos/id/678/1200/600",
          },
        ]}
      />

<SummaryBox>
    <SummaryBoxItem value="bravo" label="Bravo" />
    <SummaryBoxItem value="Charlie" />
    <SummaryBoxItem label="Foxtrot" />
    <SummaryBoxItem value="Golf" label="Hotel" />
    <SummaryBoxItem value="India" />
  </SummaryBox>

      <div style={FormContainer}>
        <h3>Feedback Form</h3>

        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>
              Select
            </Label>
            <Col sm={10}>
              <Input id="exampleSelect" name="select" type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Text Area
            </Label>
            <Col sm={10}>
              <Input id="exampleText" name="text" type="textarea" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </Col>
          </FormGroup>
          <FormGroup row tag="fieldset">
            <legend className="col-form-label col-sm-2">Radio Buttons</legend>
            <Col sm={10}>
              <FormGroup check>
                <Input name="radio2" type="radio" />{" "}
                <Label check>
                  Option one is this and that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio2" type="radio" />{" "}
                <Label check>
                  Option two can be something else and selecting it will
                  deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio2" type="radio" />{" "}
                <Label check>Option three is disabled</Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}>
              Checkbox
            </Label>
            <Col
              sm={{
                size: 10,
              }}
            >
              <FormGroup check>
                <Input id="checkbox2" type="checkbox" />{" "}
                <Label check>Check me out</Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 10,
              }}
            >
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};
