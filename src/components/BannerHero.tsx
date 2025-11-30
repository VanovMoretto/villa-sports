import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assets/banner1.png';

const bannerImages = [
  banner1,
];

const BannerHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (bannerImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-black">
      
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${image})`, transitionProperty: 'opacity, transform' }}
        >
            <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        </div>
      ))}

      <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center items-start">
        <div className="max-w-2xl animate-fadeIn">
            <h1 className="text-2xl md:text-5xl font-extrabold text-cream uppercase leading-tight mb-3 md:mb-4 drop-shadow-lg">
              A Melhor Experiência de Areia da Cidade
            </h1>
            <p className="text-sm md:text-lg text-zinc-200 mb-6 md:mb-8 font-medium drop-shadow-md max-w-md md:max-w-xl">
              Venha sentir a energia do esporte em nossas quadras premium. O jogo começa aqui.
            </p>
            <Link 
              to="/reservas" 
              className="inline-block bg-primary text-primary-foreground px-5 py-2.5 md:px-8 md:py-3 rounded-md font-bold text-xs md:text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-lg active:scale-[0.98]"
            >
              RESERVE JÁ
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerHero;