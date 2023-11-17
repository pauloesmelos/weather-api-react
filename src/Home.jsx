import React from 'react';
import FormSearch from './components/FormSearch';
import {} from 'react-icons';

const Home = () => {// BOM DIA ! BOA NOITE IMPLEMENTAR
  const isDay = () => {
    const hour = new Date().getHours();
    return (hour > 6) && (hour < 18) ? true : false;
  }
  const time = () => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    return `${hour}:${minutes}`;
  }

  return (
    <main>
      <div className="bg-gray-100 relative g-gray-100 w-full py-5 z-30 flex flex-col sm:flex-row
      sm:gap-5 justify-center items-center">
        <h2 className="text-slate-500 text-2xl sm:text-3xl font-serif text-center font-bold before:inline-block 
        before:-z-20 relative before:w-3 before:h-3 before:bg-yellow-300 before:mr-[-12px]">
          {isDay ? "Bom dia" : "Boa noite"}
        </h2>
        <div>
          <span className="text-gray-400 text-[.8rem] sm:text-sm">{time()} da manhã</span>
        </div>
      </div>
      <div className="bg-gray-100 bg-cover bg-center bg-no-repeat
      h-screen w-full flex justify-center items-center">
        <FormSearch />
      </div>
    </main>
  )
}

export default Home;