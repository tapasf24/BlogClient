import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Input,
  Label,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Button,
  Alert,
} from "reactstrap";
import axios from "axios";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFlag, setLoginFlag] = useState(false);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/registration";
    navigate(path);
  };

  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  });

  const handleSubmit = async () => {
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/login`,
        {
          username: username,
          password: password,
        }
      );
      if (resp.status === 200) {
        localStorage.setItem("blogAppToken", JSON.stringify(resp.data));
        navigate("/home");
      }
    } catch (e) {
      alert("user not found");
      console.log(e);
    }
  };

  const handleForm = (name, e) => {
    if (name === "email") {
      setEmail(e.target.value);
    }
    if (name === "userName") {
      setUsername(e.target.value);
    }
    if (name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "100vh",
      }}
    >
      {/* <h1>This is Registration page</h1>
      <Link to="/">Home</Link> */}
      <Card
        style={{
          width: "70vw",
          height: "60vh",
        }}
      >
        <CardBody>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>Bloggie...</div>
            <div
              style={{ height: "20vh", width: 0, border: "2px solid grey" }}
            ></div>
            <div>
              <Form
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {/* <FormGroup floating>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => {
                      handleForm("email", e);
                    }}
                  />
                  <Label for="exampleEmail">Email</Label>
                </FormGroup> */}
                <FormGroup floating>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="text"
                    onChange={(e) => {
                      handleForm("userName", e);
                    }}
                  />
                  <Label for="exampleEmail">Username</Label>
                </FormGroup>
                <FormGroup floating>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="password"
                    onChange={(e) => {
                      handleForm("password", e);
                    }}
                  />
                  <Label for="exampleEmail">Password</Label>
                </FormGroup>
                <Button type="submit">Login</Button>
              </Form>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Registration;
