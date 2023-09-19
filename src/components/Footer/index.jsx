import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg'

const Footer = () => {
  return <footer className={styles.footer}>
    <Dogs />
    <p>Dogs. alguns direitos reservados.</p>
  </footer>;
};

export default Footer;

