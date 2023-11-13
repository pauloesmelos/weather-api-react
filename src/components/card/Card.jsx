import React from 'react';

const Card = () => {
  return (
    <section className="py-5 px-7 bg-white mt-5 relative rounded-lg sm:w-2/5">
        <div className="text-center">
            <span className="text-lg font-bold block">Fortaleza</span>
            <span className="text-sm text-slate-400">Ceará, Brasil</span>
        </div>
        <div className="flex sm:justify-center">
            <span className="text-6xl font-bold text-black/50">27</span>
            <span className="text-3xl">c°</span>
        </div>
        <div className="sm:text-center">
            <span className="block">Ícone</span>
            <span>Nublado</span>
        </div>
    </section>
  )
}

export default Card;