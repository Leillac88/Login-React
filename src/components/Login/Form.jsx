import React from 'react';

function Form() {
  return (
    <main>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Lembrar-me
          </label>
          <a href="#" className="forgot">Esqueceu a senha?</a>
        </div>

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default Form;
