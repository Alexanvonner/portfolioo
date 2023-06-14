import React from 'react';
import styles from './styles.module.css';


export default function ContactForm({ onClose }) {
  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded shadow-md w-96">
      <p className='flex  text-black justify-end text-3xl cursor-pointer	' onClick={onClose}   >X</p>
      <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nom :</label>
        <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-400 focus:border-teal-400" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email :</label>
        <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-400 focus:border-teal-400" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 ">Message :</label>
        <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-400 focus:border-teal-400"></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-teal-400 text-white py-2 px-4 rounded-md hover:bg-teal-500 transition-colors duration-300">Envoyer</button>
      </div>
    </form>
  );
}
