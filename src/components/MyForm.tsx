import React, { Component } from "react";

export default class MyForm extends Component {
  render() {
    return (
      <div>
        {/* - criação de form */}
        <form>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite o seu nome:" />
          </div>
          <input type="submit" value={"Enviar"} />
        </form>
      </div>
    );
  }
}
