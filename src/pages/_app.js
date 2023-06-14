import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(faChevronDown);

 
 import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return  <Component {...pageProps} />
         
}

