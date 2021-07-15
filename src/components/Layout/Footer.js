import classes from './Footer.module.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Socials = () => (
    <div>
        <a href="https://github.com/nataliarossini" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="https://www.linkedin.com/in/nataliarossini/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>

    </div>
  )

const Footer = () => {
    return (
        <footer className={classes.footer}>
            
                <p>Created by Natalia Rossini </p>
                <Socials />
           
        </footer>
    )

};

export default Footer;