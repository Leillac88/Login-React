import React from 'react';
import './Login.css';
import Header from './Header.jsx';
import Form from './Form.jsx';
import Footer from './Footer.jsx';

function Login() {
  return (
    <div className="login-container">
      <section className="login-box">
        <Header />
        <Form />
        <Footer />
      </section>
    </div>
  );
}

export default Login;
