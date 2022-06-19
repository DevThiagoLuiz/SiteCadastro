import React, { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";

const UserComponent = () => {
  const [state, setState] = useState({ users: [] });

  useEffect(() => {
    UserService.getUsers().then((response) => {
      setState({ users: response.data });
    });
  }, []);

  const LogOut = () => {
    localStorage.removeItem("token");
    document.location.reload();
  };

  return (
    <div>
      <h1 className="text-center">Lista de cadastros</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>User Name</td>
            <td>User email</td>
            <td>User cep</td>
            <td>User Nascimento</td>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user) => (
            <tr key={user.id}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.cep}</td>
              <td>{user.nascimento}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/" className="btn btn-outline-primary" onClick={LogOut}>
          {" "}
          Log Out{" "}
        </Link>
      </div>
    </div>
  );
};

export default UserComponent;
