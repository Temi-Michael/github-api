import '../App.css'
import Logo from "../img/lazy-code/logo_transparent.png"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCodeFork } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000); // Update every second
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (
      <div>
        <p>{time}</p>
      </div>
    );
  }
  
  const LogoImg = () => {
    return (
        <img src={Logo} className="logo" alt="LogoImg" /> 
    )
}

export default function Footer() {

    return (
        <div className='footer'>
            <footer>
                <div className='footerbody'>
                    This Website was create by Temi Michael<br></br><br></br>
                    <LogoImg />
                </div>
                <Time />
                <Link to='https://github.com/Temi-Michael/' target='_blank'><FontAwesomeIcon icon={faGithub} size='2x' color='antiquewhite' /></Link>
                <Link to='https://github.com/Temi-Michael/' target='_blank'><FontAwesomeIcon icon={faCodeFork} size='2x' color='antiquewhite' /></Link>
            </footer>
        </div>
    )
}