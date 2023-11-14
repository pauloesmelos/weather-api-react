import axios from 'axios';
import { useQuery } from 'react-query';
import KEY from '../api/KEY';
import URL from '../api/URL';

const getData = async (city) => {
    return axios.get(`${URL}key=${KEY}&q=${city}&aqi=no`)
    .then(response => console.log(response.data))
    .catch(erro => console.log(erro));
}
const useGet = (city) => {
  const query = useQuery(
    ["use-get-data"],
    () => getData(city),
    { enabled: !!city } // impede a execução sem antes ter o param
  );
  return query;
}

export default useGet;