import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    axios
      .post("http://localhost:8080/users/login", {
        email,
        password,
      })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
        document.location.reload();
      })
      .catch((error) => {
        setError("Usuário ou senha invalidos");
      });
  };

  return (
    <div className="col-md-6">
      <Header title="Sistema de cadastro" />
      <hr className="my-3"></hr>
      {!!error && <Alert color="danger">{error}</Alert>}
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Informe seu e-mail"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Senha</Label>
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Informe a senha"
          />
        </FormGroup>
        <div style={{ display: "flex" }}>
          <Button
            color="primary"
            block
            onClick={signIn}
            style={{ marginRight: 10 }}
          >
            Entrar
          </Button>

          <Button color="primary" block onClick={() => navigate("/registro")}>
            Cadastre-se
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
