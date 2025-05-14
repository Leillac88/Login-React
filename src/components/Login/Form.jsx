import React from 'react';

function Form() {
  return (
    <main>
      <form className="login-form">
        <span className='email'>E-mail:</span>
        <input type="email" placeholder="seuemail@email.com" required />
        <span className='small'>Digite o e-mail associado à sua conta.</span>
        <span className='senha'>Senha:</span>
        <input type="password" placeholder="******" required />
        <span className='small'>Sua senha deve ter, pelo menos, 6 caracteres.</span>

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
