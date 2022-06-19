import React, { useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import Header from "../../components/Header";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    nome: "",
    email: "",
    password: "",
    cep: "",
    nascimento: "",
  });

  const criarConta = () => {
    const { nome, email, password, cep, nascimento } = state;
    if (!nome && !email && !password && !cep && !nascimento) {
      toast.error("Falha ao cadastrar, preencha todos os campos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    axios
      .post("http://localhost:8080/users/cadastro", {
        nome,
        email,
        password,
        cep,
        nascimento,
      })
      .then((response) => {
        toast.success("Cadastrado com Sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      })
      .catch((err) =>
        toast.error("Falha ao cadastrar", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };

  const completarEndereço = () => {
    if (!state.cep) return;

    axios
      .get(`https://viacep.com.br/ws/${state.cep}/json/`)
      .then((response) => {
        const { data } = response;
        const { logradouro, localidade, bairro } = data;
        setState({ ...state, logradouro, localidade, bairro });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-md-6">
      <Header title="Cadastro" />
      <hr className="my-1"></hr>
      <FormGroup>
        <label for="nome">Nome</label>
        <Input
          type="nome"
          id="nome"
          placeholder="informe o seu nome"
          onChange={(e) => setState({ ...state, nome: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label for="email">Email</label>
        <Input
          type="email"
          id="email"
          placeholder="informe o seu email"
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label for="password">password</label>
        <Input
          type="password"
          id="password"
          placeholder="informe a sua senha"
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label for="nascimento">Nascimento</label>

        <Input
          type="date"
          id="nascimento"
          placeholder="(dd-MM-yyyy)"
          onChange={(e) => setState({ ...state, nascimento: e.target.value })}
        />
      </FormGroup>

      <FormGroup style={{ display: "flex", alignItems: "flex-end" }}>
        <div style={{ flex: 1, paddingRight: 10 }}>
          <label for="cep" style={{ paddingLeft: 170 }}>
            Cep
          </label>
          <Input
            type="cep"
            id="cep"
            placeholder="informe o seu Cep"
            onChange={(e) => setState({ ...state, cep: e.target.value })}
          />
        </div>
        <div style={{ display: "flex", bottom: 0 }}>
          <Button color="primary" onClick={completarEndereço}>
            Completar Endereço
          </Button>
        </div>
      </FormGroup>

      <FormGroup>
        <label for="bairro">Bairro</label>
        <Input
          type="bairro"
          id="bairro"
          placeholder="informe o seu bairro"
          value={state.bairro}
          disabled
          onChange={(e) => setState({ ...state, bairro: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <label for="logradouro">Logradouro</label>
        <Input
          type="logradouro"
          id="logradouro"
          placeholder="informe o seu logradouro"
          value={state.logradouro}
          disabled
          onChange={(e) => setState({ ...state, logradouro: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <label for="localidade">Localidade</label>
        <Input
          type="localidade"
          id="localidade"
          placeholder="informe o seu localidade"
          value={state.localidade}
          disabled
          onChange={(e) => setState({ ...state, localidade: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label for="nCasa">Numero da casa</label>
        <Input
          type="nCasa"
          id="nCasa"
          placeholder="informe o numero da sua casa"
          onChange={(e) => setState({ ...state, numero: e.target.value })}
        />
      </FormGroup>
      <Button color="primary" onClick={criarConta}>
        Cadastrar
      </Button>
      <span> </span>
      <Button color="primary" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </div>
  );
};

export default Registro;
