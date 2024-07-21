
import './App.css'
import FormPro from './components/formPro'
import FormSimples from './components/formSimples'
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import FormBootstrap from './components/formBootstrap';

function App() {

  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <main className="flex flex-col w-screen h-screen">
        <h1 className="bg-blue-950 text-blue-100 p-6 text-2xl font-bold tracking-wide text-center">aula38-forms</h1>
        <div className="flex justify-evenly items-center py-24">
          <div>
            <FormSimples onSubmitData={handleFormSubmit} />
          </div>
          <div>
            <FormPro onSubmitData={handleFormSubmit} />
          </div>
          <div>
            <FormBootstrap onSubmitData={handleFormSubmit}/>
          </div>

        </div>
        <div id="dial" className='flex justify-center text-slate-600'>
          {formData && (
            <div>
              <p><strong>Nome:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Senha:</strong> {formData.password}</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App
