import { useState } from 'react';

const FormSimples = ({ onSubmitData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (field, value) => {
    let error = '';
    switch (field) {
      case 'name':
        if (!value) error = 'Nome é obrigatório';
        break;
      case 'email':
        if (!value) error = 'Email é obrigatório';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email inválido';
        break;
      case 'password':
        if (!value) error = 'Senha é obrigatória';
        else if (value.length < 6) error = 'Senha deve ter pelo menos 6 caracteres';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    const error = validate(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validate('name', formData.name),
      email: validate('email', formData.email),
      password: validate('password', formData.password)
    };

    if (Object.keys(newErrors).some((key) => newErrors[key])) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    onSubmitData(formData);

    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      password: ''
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto min-h-96 p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-500 focus:ring-opacity-50"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sky-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      >
        {isSubmitting ? 'Enviando...' : 'Cadastrar'}
      </button>
    </form>
  );
};

export default FormSimples;
