import React from 'react';
import FormSearch from './components/FormSearch';
import { FaClock   } from 'react-icons/fa';

const Home = () => {// BOM DIA ! BOA NOITE IMPLEMENTAR
  const isDay = () => {
    const hour = new Date().getHours();
    let hello = "";
    if((hour > 6) && (hour < 12))
      hello = "Bom dia";
    else if((hour >= 12) && (hour < 18))
      hello = "Boa tarde";
    else 
      hello = "Boa noite";
    return hello;
  }
  const time = () => {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    return `${hour}:${(minutes < 10 ) ? `0${minutes}` : minutes}`; // 13:7 -> 13:07
  }

  return (
    <main>
      <div className="bg-gray-100 relative g-gray-100 w-full py-5 z-30 flex flex-col sm:flex-row
      sm:gap-3 justify-center items-center">
        <h2 className="text-slate-500 text-2xl sm:text-3xl font-serif text-center font-bold before:inline-block 
        before:-z-20 relative before:w-3 before:h-3 before:bg-yellow-300 before:mr-[-12px]">
          {isDay()}
        </h2>
        <FaClock  size={25} color="rgb(59,130,246)" />
        <div>
          <span className="text-gray-400 text-[.8rem] sm:text-sm">{time()}</span>
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