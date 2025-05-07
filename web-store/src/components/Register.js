import React, { useState } from 'react';

// Registration form with validation
const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (pass) => pass.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) return alert('Invalid email');
    if (!validatePassword(form.password)) return alert('Password too short');
    alert('Registered successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="First Name" required onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
      <input placeholder="Surname" required onChange={(e) => setForm({ ...form, surname: e.target.value })} />
      <input placeholder="Username" required onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" type="email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;