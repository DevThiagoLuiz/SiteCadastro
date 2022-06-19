import React from "react";
import {
  Button,
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import { useNavigate } from "react-router-dom";

const Login1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Parabéns você logou com sucesso!!</CardTitle>
            <CardText>
              Essa é uma página de teste para a empresa <b>Mc Soluções.</b>
              <br />O meu nome é <b>Thiago Luiz</b> sou estudante de
              <b> Analise e Desenvolvimento de sistemas na Estacio.</b>
              <br />
              Nas minhas horas vagas eu jogo com meus amigos e pratico esportes,
              gosto bastante de ouvir e ser ouvido.
              <br /> Para a realização desse sistema de cadastro eu utilizei o
              <b> Java/SpringBoot</b> no back-end para a criação da Api, e os
              dados de Login/Cadastro <br /> foram salvos no banco
              <b> MySql online(phpMyAdmin).</b> A parte do front-end foi
              realizada com o <b>ReactJS</b> <br /> e para utilizar a Api do
              correio e a Api de cadastro feita por mim eu utilizei o
              <b> Axios.</b>
            </CardText>
            <Button
              color="primary"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Continuar
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Login1;
