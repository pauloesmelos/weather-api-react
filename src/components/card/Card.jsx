import React from 'react';
import Image from '../image/Image';

const conditions = {
  "Clear": "Limpo",
  "Sunny": "Ensolarado",
  "Partly cloudy": "Parcialmente nublado",
  "Cloudy": "Nublado",
  "Overcast": "Nublado",
  "Mist": "Névoa",
  "Patchy rain possible": "Possível de chuva",
  "Patchy sleet possible": "Possível queda de granizo",
  "Patchy freezing drizzle possible": "Possível garoa",
  "Fog": "Nevoeiro",
  "Light drizzle": "Chuva fraca",
  "Heavy rain": "Chuva forte",
  "Moderate rain": "Chuva moderada"
}

const Card = ({ data }) => {
  const [api, setApi] = React.useState({
    current: {},
    location: {}
  });
  React.useEffect(() => {
    if(data) {
      setApi({
        current: data.current,
        location: data.location
      });
    }
  }, [data]);

  if(data && api) {
    return (
      <section className="bg-white mt-8 relative rounded-lg w-full sm:py-10 sm:w-[350px] hover:border-b-4 hover:border-blue-500
      sm:ml-5">
          <div className="text-center">
              <span className="text-lg font-bold block">{api.location.name}</span>
              <span className="text-sm text-slate-400">
                {`${api.location.region}, ${api.location.country === "Brazil" ? "Brasil" : api.location.country}`}
              </span>
          </div>
          <div className="flex justify-center">
              <span className="text-6xl font-bold text-black/50">{api.current.temp_c}</span>
              <span className="text-3xl">c°</span>
          </div>
          <div className="text-center">
              <span className="flex justify-center">
                <Image src={data.current.condition.icon} />
              </span>
              <span>{conditions[data.current.condition.text]}</span>
          </div>
      </section>
    )
  }
  
}

export default Card;