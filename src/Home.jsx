import React from 'react'
import FormSearch from './components/FormSearch'
import Card from './components/card/Card'

const Home = () => {
  return (
    <div className="bg-gray-100 bg-cover bg-center bg-no-repeat
    h-screen w-full flex justify-center items-center flex-col">
        <FormSearch />
        <Card />
    </div>
  )
}

export default Home