const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-16 text-noir-doux">
          Elle a osé. Elle a transformé. L'histoire de Patricia.
        </h2>
        
        <div className="bg-white p-8 pt-16 rounded-xl shadow-lg relative">
          <img 
            src="https://placehold.co/100x100/FF6F61/F9F7F5?text=P" 
            alt="Photo de Patricia" 
            className="w-24 h-24 rounded-full mx-auto -mt-20 mb-6 border-4 border-white"
          />
          
          <blockquote className="text-xl md:text-2xl italic font-lato text-gris-profond">
            <p>
              "Avant, l'idée même de présenter mon projet me donnait des sueurs froides. 
              J'avais l'impression de jouer un rôle. La session avec Sandrina et les outils du livret 
              m'ont permis de comprendre que je pouvais le faire À MA FAÇON. J'ai récemment fait ma 
              présentation la plus importante, et pour la première fois, je me sentais alignée et sereine. 
              C'est un changement de vie."
            </p>
          </blockquote>
          
          <cite className="block not-italic mt-6 font-bold text-lg font-montserrat text-noir-doux">
            — Patricia, Entrepreneure & Maman inspirante
          </cite>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;