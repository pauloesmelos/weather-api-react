import React from 'react';
import Input from './form/Input';
import Button from './button/Button';

const FormSearch = () => {
  const [city, setCity] = React.useState('');

  return (
    <div className="p-2 sm:p-0">
        <form className="w-full">
            <Input 
            label="" 
            name="city"
            id="city" 
            value={city} 
            setValue={setCity} 
            placeholder="Digite uma cidade" />
            <Button>
                Pesquisar
            </Button>
        </form>
    </div>
  )
}

export default FormSearch;