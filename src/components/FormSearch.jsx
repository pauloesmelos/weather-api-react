import axios from 'axios';
import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import KEY from '../api/KEY';
import URL from '../api/URL';
import Button from './button/Button';
import Card from './card/Card';
import Input from './form/Input';

const FormSearch = () => {
  const [city, setCity] = React.useState('');
  const [erro, setErro] = React.useState('');
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.get(`${URL}key=${KEY}&q=${city}&qi=no`)
    .then(response => {
      setData(response.data);
      setErro('');
    })
    .catch((erro) => setErro("Não foi possível localizar a cidade"))
    .finally(() => setLoading(false))
  }
  if(loading) {
    return (
      <div className="flex justify-center items-center ml-20">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#3A63DE', '#f47e60', '#3A63DE', '#3A63DE', '#849b87']}
        />
      </div>
    )
  }
  return (
    <div className="p-2 sm:p-0 sm:w-1/4">
        <form onSubmit={handleSubmit} className="w-full">
            <Input 
            label="" 
            name="city"
            id="city" 
            value={city} 
            setValue={setCity} 
            placeholder="Digite uma cidade" />
            {erro && <p className="text-red-600 mt-2 w-40 sm:w-72 text-center">{erro}</p>}
            <Button>
                Pesquisar
            </Button>
        </form>
        <div className="w-full">
          <Card data={data} />
        </div>
    </div>
  )
}

export default FormSearch;