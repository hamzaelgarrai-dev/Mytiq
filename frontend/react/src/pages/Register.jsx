import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mail, Lock, User, AlertTriangle, Calendar } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const customBlue = '#6EBAFB';

const InputField = ({ Icon, type, placeholder, name, label, value, onChange }) => (
  <div className="relative mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 shadow-inner">
      <Icon className="h-5 w-5 text-gray-400 mr-3" />
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
      />
    </div>
  </div>
);

const RegisterPage = () => {
  const [name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState(null);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError(null);

    if (!name || !email || !password || !confirmPassword)
      return setLocalError("Veuillez remplir tous les champs.");

    if (password.length < 8)
      return setLocalError("Le mot de passe doit contenir au moins 8 caractères.");

    if (password !== confirmPassword)
      return setLocalError("Les mots de passe ne correspondent pas.");

    setShouldSubmit(true);
  };

  useEffect(() => {
    if (!shouldSubmit) return;

    const register = async () => {
      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/register",
          { name, email, password ,password_confirmation: confirmPassword }
        );
        navigate("/login");

        console.log("Account created:", res.data);
      } catch (err) {
        setLocalError(err.response?.data?.message || "Registration failed");
      } finally {
        setShouldSubmit(false);
      }
    };

    register();
  }, [shouldSubmit]);

  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-10 bg-white rounded-3xl shadow-2xl max-w-md mx-auto mt-24 mb-12">
      <Calendar className="h-10 w-10 mb-4" style={{ color: customBlue }} />

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Créer un compte</h2>

      <p className="text-center text-sm text-gray-500 mb-6">
        Inscrivez-vous pour commencer à réserver vos événements
      </p>

      {localError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          {localError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full">
        <InputField
          Icon={User}
          type="text"
          placeholder="Nom complet"
          name="fullName"
          label="Nom complet"
          value={name}
          onChange={(e) => setFullName(e.target.value)}
        />

        <InputField
          Icon={Mail}
          type="email"
          placeholder="email"
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          Icon={Lock}
          type="password"
          placeholder="Mot de passe"
          name="password"
          label="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputField
          Icon={Lock}
          type="password"
          placeholder="Confirmer le mot de passe"
          name="confirmPassword"
          label="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full text-white font-semibold py-3 px-4 rounded-xl mt-4"
          style={{ backgroundColor: customBlue }}
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
