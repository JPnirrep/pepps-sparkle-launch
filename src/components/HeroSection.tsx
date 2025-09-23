const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Fond Vidéo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <video 
          poster="https://placehold.co/1920x1080/F9F7F5/333333?text=Chargement..." 
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none hero-video" 
          playsInline 
          autoPlay 
          muted 
          loop
        >
          <source src="https://drive.google.com/file/d/17583fUQtP5tbMJtHY8kIlUO5ElYHtZ26/preview" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Superposition pour la lisibilité du texte */}
      <div className="absolute top-0 left-0 w-full h-full bg-noir-doux opacity-50 z-10"></div>
      
      <div className="relative z-20 p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold leading-tight mb-4">
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