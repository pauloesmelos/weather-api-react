import React from 'react'
import FormSearch from './components/FormSearch'

const Home = () => {// BOM DIA ! BOA NOITE IMPLEMENTAR
  const isDay = () => {
    const hour = new Date().getUTCHours();
    console.log(hour);
  }
  React.useEffect(() => {

  }, []);
  return (
    <div className="bg-gray-100 bg-cover bg-center bg-no-repeat
    h-screen w-full flex justify-center items-center">
        <FormSearch />
    </div>
  )
}

export default Home