import { useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <header className="relative h-[90vh] md:h-screen overflow-hidden flex items-center justify-center text-center text-white">
      {/* Fond Vidéo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <video 
          ref={videoRef}
          poster="https://placehold.co/1920x1080/F9F7F5/333333?text=Chargement..." 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          playsInline 
          autoPlay 
          muted 
          loop
          preload="auto"
        >
          <source src="https://lafabriquepepps.fr/VIDEOS/LP_WEBI_page1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Superposition pour la lisibilité du texte */}
      <div className="absolute top-0 left-0 w-full h-full bg-noir-doux opacity-50 z-10"></div>
      
      <div className="relative z-20 p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-montserrat font-black leading-tight mb-4 text-blanc-creme">
          Votre sensibilité n'est pas un obstacle. C'est votre plus grande force.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-lato">
          Découvrez la méthode PEPPS pour prendre la parole avec confiance et authenticité, 
          et transformez enfin le trac en impact.
        </p>
        <a 
          href="#section3" 
          className="pepps-btn inline-block px-7 py-3 rounded-full text-center text-blanc-creme no-underline hover:no-underline"
        >
          Je découvre l'offre spéciale webinaire
        </a>
        <p className="mt-4 text-sm italic opacity-80 font-lato">
          Offre exclusive réservée aux participants du webinaire.
        </p>
      </div>
    </header>
  );
};

export default HeroSection;