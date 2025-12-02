import React, { useState } from 'react';
import { Mail, Lock, User, AlertTriangle, Calendar } from 'lucide-react';

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

const RegisterPage = ({ onSubmit, authError, loading, switchToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError(null);

    if (!fullName || !email || !password || !confirmPassword)
      return setLocalError("Veuillez remplir tous les champs.");

    if (password.length < 8)
      return setLocalError("Le mot de passe doit contenir au moins 8 caractères.");

    if (password !== confirmPassword)
      return setLocalError("Les mots de passe ne correspondent pas.");

    onSubmit(fullName, email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-10 bg-white rounded-3xl shadow-2xl max-w-md mx-auto mt-24 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
      <Calendar className="h-10 w-10 mb-4" style={{ color: customBlue }} />

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Créer un compte</h2>

      <p className="text-center text-sm text-gray-500 mb-6">
        Inscrivez-vous pour commencer à réserver vos événements
      </p>

      {(localError || authError) && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          {localError || authError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full">
        <InputField
          Icon={User}
          type="text"
          placeholder="Nom complet"
          name="fullName"
          label="Nom complet"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <InputField
          Icon={Mail}
          type="email"
          placeholder="votre@email.com"
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
          disabled={loading}
          className="w-full text-white font-semibold py-3 px-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: customBlue }}
        >
          {loading ? 'Inscription...' : "S'inscrire"}
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-500">
        Déjà un compte ?
        <span
          onClick={switchToLogin}
          className="ml-1 font-semibold text-blue-400 cursor-pointer hover:underline"
        >
          Se connecter
        </span>
      </p>
    </div>
  );
};

export default RegisterPage;
