import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

export default function Navbar({ setIsContactFormOpen }) {
  const [estNavbarVisible, setEstNavbarVisible] = useState(true);
  const [posScrollPrecedente, setPosScrollPrecedente] = useState(0);
  const seuilScroll = 50; // Nombre de pixels avant que la navbar ne disparaisse

  useEffect(() => {
    const gererScroll = () => {
      const posScrollActuelle = window.pageYOffset;
      const defileVersLeBas = posScrollPrecedente < posScrollActuelle;

      setEstNavbarVisible(!defileVersLeBas || posScrollActuelle < seuilScroll);
      setPosScrollPrecedente(posScrollActuelle);
    };

    window.addEventListener('scroll', gererScroll);
    return () => window.removeEventListener('scroll', gererScroll);
  }, [posScrollPrecedente]);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <nav
      className={`${styles.navbar} navbar bg-white justify-between fixed text-gray-800 ${
        estNavbarVisible ? 'visible' : 'hidden'
      }`}
    >
      <div>
        <Link href="/">
          <span className="text-xl cursor-pointer">Alexan Vonner</span>
        </Link>
      </div>
      <ul>
        <li className="mr-10">
          <Link href="/">
            <span className="cursor-pointer">Page d&apos;accueil</span>
          </Link>
        </li>
        <li className="mr-10">
          <Link href="/projet">
            <span className="cursor-pointer">Projet</span>
          </Link>
        </li>
        <li className="mr-10">
          <Link href="/about">
            <span className="cursor-pointer">À propos</span>
          </Link>
        </li>
        <li className="mr-10">
          <button onClick={openContactForm}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

