import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ContactForm from '@/components/ContactForm/ContactForm'
import Image from 'next/image';
import layerImg from '../assets/layerMockup.png'
import reactImg from '../assets/reactpicture.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMobileAlt, faShieldAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';



export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  
  const closeContactForm = () => {
    setIsContactFormOpen(false)
  }


 


  return (
    <>
      
      <header>
        <Navbar setIsContactFormOpen={setIsContactFormOpen}  />
      </header>
      <main>
        <section className='flex flex-col pt-28 bg-gray-100 pb-36  justify-evenly lg:flex-row md:flex-row sm:flex-col'>
            <div>
                  <p className='text-4xl text-black text-opacity-70 font-extrabold '>Bienvenue ! Je suis <span className='font-black text-black text-opacity-90	'> Alexan Vonner</span> </p>
                  <p className='text-xl font-semibold underline	'> Développeur Full-Stack JS</p>
              </div>

              <div>
                <Image src={layerImg} alt="layer mockup web site" width={500} height={500} className='rounded-xl lg:max-w-[500px] md:max-w-[400px] sm:max-w-[300px] sm:max-h-[300px]'/>
              </div>
              
              {/* Sert pour afficher le form de contact  */}
              {isContactFormOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
                  <div className="bg-white p-6 rounded shadow-md">
                    <ContactForm onClose={closeContactForm} />
                  </div>
            </div> )}
        </section>
        <section className='flex flex-col  bg-gray-100 pb-36  justify-evenly lg:flex-row md:flex-row sm:flex-col'>
          <Image src={reactImg} alt="layer mockup web site" width={500} height={500} className='rounded-xl mx-auto lg:max-w-[300px] md:max-w-[300px] sm:max-w-[300px] sm:max-h-[300px]' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, eum! Est iusto amet tempore tempora! Cupiditate aut, similique tenetur qui ipsa harum aliquid porro quaerat neque? Necessitatibus veritatis saepe minus recusandae temporibus ipsum cupiditate quidem veniam? Maiores quo nihil harum repudiandae rem cupiditate deserunt quos vel! Beatae, earum labore deserunt consequuntur corrupti quod sint tempora aut, pariatur mollitia incidunt rerum deleniti minima similique! Quo accusamus rerum excepturi, dolores nulla facere adipisci illo temporibus eveniet. Natus veritatis, eos corporis fuga voluptatibus incidunt necessitatibus fugiat rerum officia ducimus nostrum, voluptates quibusdam ad, et aperiam minus mollitia dignissimos porro autem consequuntur quam sint doloremque odit sit. Facilis omnis veritatis recusandae dignissimos repellat cumque voluptate hic nostrum inventore corrupti quibusdam quae vitae, ut architecto dolor sequi voluptatibus ullam fugiat expedita facere. Velit odio dolore veniam nobis ratione, nihil iste officia distinctio, nesciunt ut aut fugiat mollitia deserunt enim necessitatibus animi. Ipsa optio repellendus repellat alias quisquam consequatur fugit nostrum laudantium, accusantium quaerat autem vel aspernatur magnam, pariatur nemo sed porro! Aperiam ipsam aut minus sit deleniti maiores et expedita vel dolore, pariatur voluptatum molestiae ea voluptas nobis ut ipsa quos fugiat. Aliquid voluptas accusantium atque saepe voluptatum recusandae doloribus adipisci. Dolorum voluptate ut molestiae inventore. Inventore omnis sint deserunt enim est placeat voluptatum quisquam corrupti suscipit similique quae architecto, quam magnam cumque quaerat ex rem dolor veritatis nam libero tempore! Unde quod iure non, reiciendis nulla sunt quia asperiores delectus iste ea assumenda nesciunt magnam vitae doloremque obcaecati itaque repellat magni nostrum atque voluptatem quos dolore eos quo deleniti! Eos deleniti distinctio fugiat eveniet veritatis repellat aliquid odio, ab necessitatibus et iste recusandae nihil quisquam, accusantium dolor. Blanditiis omnis rerum itaque, adipisci porro quo quidem ad tempore inventore. Illum laboriosam possimus officia cumque blanditiis? Ipsam nostrum placeat illum? Eos dolor fugiat id maiores sint? Natus quasi dignissimos maxime hic vero nihil optio sint esse eveniet, magni porro quam expedita laborum minima excepturi nemo voluptatibus rem corrupti qui! Earum labore et quos dicta iusto! Ipsum similique neque quia iure mollitia eligendi voluptatum consequuntur praesentium obcaecati quidem tempora aperiam ut error a totam, dolores animi commodi nobis temporibus provident earum porro natus eius. Nobis similique labore illo eum, inventore iure possimus necessitatibus animi consequuntur pariatur numquam, atque quibusdam alias quos rerum, sapiente omnis enim! Laboriosam at error, est voluptas, natus vero cupiditate pariatur ab doloribus in, doloremque perferendis ipsa sit accusantium delectus quam quidem ipsum! Numquam?</p>
        </section>
        <section className='flex flex-col  bg-gray-100 pb-36  justify-evenly lg:flex-row md:flex-row sm:flex-col'>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-1/5 transform hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={faSearch} size="2xl" />
          <h3 className="text-xl font-bold mb-2 text-black">SEO</h3>
          <p>Optimisez votre site pour les moteurs de recherche et augmentez votre visibilité en ligne.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-1/5 transform hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={faMobileAlt} size="2xl" />
          <h3 className="text-xl font-bold mb-2 text-black">Réactivité</h3>
          <p>Construisez des interfaces web réactives et adaptables à tous les appareils et tailles d&apos;écran.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-1/5 transform hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={faShieldAlt} size="2xl" />
          <h3 className="text-xl font-bold mb-2 text-black">Sécurité</h3>
          <p>Protégez vos données et assurez la sécurité de votre application contre les menaces en ligne.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center w-1/5 transform hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={faChartLine} size="2xl" />
          <h3 className="text-xl font-bold mb-2 text-black">Performances</h3>
          <p>Optimisez les performances de votre site pour offrir une expérience utilisateur rapide et fluide.</p>
        </div>

        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    
    
    </>
  )
}


