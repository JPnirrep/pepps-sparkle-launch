import { Lock, Download, Calendar } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="section3" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-noir-doux">
          La solution conçue pour vous : Le Pack "Décollage PEPPS"
        </h2>
        
        <div className="md:flex md:items-center md:space-x-12">
          {/* Colonne 1: Visuel de l'offre */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://placehold.co/600x400/A8D8C7/1E1E1E?text=Visuel+Pack+PEPPS" 
              alt="Visuel du Pack Décollage PEPPS" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          {/* Colonne 2: Description */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-noir-doux">Votre pack inclut :</h3>
            
            <div className="space-y-4 mb-6 font-lato">
              <div>
                <h4 className="text-xl font-bold text-noir-doux">
                  1. Le Livret Numérique "Prendre la parole avec PEPPS" 
                  <span className="text-base font-normal text-gris-profond"> (valeur 27€)</span>
                </h4>
                <p className="text-gris-profond">
                  Votre feuille de route pas à pas pour structurer vos idées, gérer votre énergie 
                  et livrer votre message avec clarté et sérénité. Accès immédiat après votre commande.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-noir-doux">
                  2. Votre Session de Coaching Individuelle (1h) avec Sandrina 
                  <span className="text-base font-normal text-gris-profond"> (valeur 150€)</span>
                </h4>
                <p className="text-gris-profond">
                  Le moment pour débloquer VOTRE situation spécifique. Nous travaillerons ensemble 
                  sur votre prochain défi de prise de parole, pour transformer la théorie en pratique 
                  et la peur en confiance.
                </p>
              </div>
            </div>

            <div className="bg-blanc-creme p-6 rounded-lg text-center my-6">
              <p className="text-lg font-lato text-gris-profond">Offre Spéciale Webinaire :</p>
              <p className="text-2xl md:text-3xl my-2 font-montserrat">
                <span className="line-through text-gris-profond opacity-60 mr-2">177€</span>
                <span className="font-bold text-corail-pepps text-4xl md:text-5xl">97€</span>
              </p>
            </div>
            
            <a 
              href="[CHECKOUT_URL]" 
              className="pepps-btn w-full text-xl py-4 block text-center rounded-full no-underline hover:no-underline"
            >
              Oui, je choisis de faire de ma sensibilité ma force
            </a>

            <div className="flex justify-around items-center mt-6 text-sm text-center font-lato">
              <div className="flex flex-col items-center space-y-1">
                <Lock className="w-8 h-8 text-vert-eau-doux" />
                <span className="text-gris-profond">Paiement 100% sécurisé</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Download className="w-8 h-8 text-vert-eau-doux" />
                <span className="text-gris-profond">Accès immédiat au livret</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Calendar className="w-8 h-8 text-vert-eau-doux" />
                <span className="text-gris-profond">Prise de RDV facile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;