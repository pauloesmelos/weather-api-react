import React from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';

const Footer = ({ children }) => {
  const [px, setPx] = React.useState(null);
  React.useEffect(() => {
    setPx(window.innerWidth);
  }, []);
  return (
    <footer className={`text-lg sm:p-4 p-2 text-center border-t-4 border-blue-200`}>
        {
          (px > 650) && 
            <span className="flex items-center justify-center">
              <TiWeatherCloudy className="text-blue-400 text-4xl font-bold" />
              <a className="text-sm ml-5" href="https://github.com/pauloesmelos">feito por paulo eduardo</a>
            </span>
        }
        {
          (px < 650) && 
          <span className="flex items-center justify-center">
            <TiWeatherCloudy className="text-blue-400 text-4xl font-bold" />
            <span className="text-sm ml-5">feito por paulo eduardo</span>
          </span>
        }
    </footer>
  )
}

export default Footer
