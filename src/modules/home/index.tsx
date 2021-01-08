import React, { useEffect, useState } from "react";
import firebase from 'firebase';

export const Home = function () {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  useEffect( () => {
    const db = firebase.database();
    console.log(db);
  }, []);

  const handleChange = ({ target: { value, name } }) => {
    setForm({...form, [name]: value});
  };

  const createAccount = () => {
    firebase.auth().signInWithEmailAndPassword(form.email, form.password)
      .catch(error => console.log(error))
  };

  return (
    <div>
      <input type="text" name="email" onChange={handleChange}/>
      <input type="password" name="password" onChange={handleChange}/>
      <input type="submit" onClick={createAccount}/>
    </div>
  )
};