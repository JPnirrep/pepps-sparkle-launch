import { Lock, Download, Calendar } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="section3" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-noir-doux">
          Choisissez la solution qui vous convient
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Offre 1: Livret seul */}
          <div className="bg-blanc-creme rounded-xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-noir-doux">
                Le Livret PEPPS
              </h3>
              <img 
                src="/src/assets/visuel_livret_offre_seul.png" 
                alt="Livret Prendre la parole avec PEPPS" 
                className="rounded-lg shadow-md w-full mb-4"
              />
            </div>
            
            <div className="mb-6 font-lato">
              <h4 className="text-lg font-bold text-noir-doux mb-3">Ce que vous recevez :</h4>
              <p className="text-gris-profond">
                Le Livret Numérique "Prendre la parole avec PEPPS" - Votre feuille de route 
                pas à pas pour structurer vos idées, gérer votre énergie et livrer votre message 
                avec clarté et sérénité.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg text-center mb-6">
              <p className="text-lg font-lato text-gris-profond">Offre Spéciale :</p>
              <p className="text-2xl my-2 font-montserrat">
                <span className="line-through text-gris-profond opacity-60 mr-2">27€</span>
                <span className="font-bold text-corail-pepps text-3xl">17€</span>
              </p>
            </div>
            
            <a 
              href="[CHECKOUT_URL_LIVRET]" 
              className="pepps-btn w-full text-lg py-3 block text-center rounded-full no-underline hover:no-underline mb-4"
            >
              Je commande le livret
            </a>

            <div className="flex justify-around items-center text-xs text-center font-lato">
              <div className="flex flex-col items-center space-y-1">
                <Lock className="w-6 h-6 text-vert-eau-doux" />
                <span className="text-gris-profond">Paiement sécurisé</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Download className="w-6 h-6 text-vert-eau-doux" />
                <span className="text-gris-profond">Accès immédiat</span>
              </div>
            </div>
          </div>

          {/* Offre 2: Pack Décollage */}
          <div className="bg-gradient-to-br from-vert-eau-doux/10 to-corail-pepps/10 rounded-xl p-8 shadow-lg border-2 border-corail-pepps/20 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-corail-pepps text-white px-4 py-1 rounded-full text-sm font-bold">
                RECOMMANDÉ
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-noir-doux">
                Le Pack "Décollage PEPPS"
              </h3>
              <img 
                src="https://placehold.co/400x300/A8D8C7/1E1E1E?text=Pack+Décollage" 
                alt="Pack Décollage PEPPS" 
                className="rounded-lg shadow-md w-full mb-4"
              />
            </div>
            
            <div className="space-y-4 mb-6 font-lato">
              <div>
                <h4 className="text-lg font-bold text-noir-doux">
                  1. Le Livret Numérique "Prendre la parole avec PEPPS"
                  <span className="text-sm font-normal text-gris-profond"> (valeur 27€)</span>
                </h4>
                <p className="text-gris-profond text-sm">
                  Votre feuille de route complète pour maîtriser la prise de parole.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-noir-doux">
                  2. Session de Coaching Individuelle (1h) avec Sandrina
                  <span className="text-sm font-normal text-gris-profond"> (valeur 150€)</span>
                </h4>
                <p className="text-gris-profond text-sm">
                  Débloquez VOTRE situation spécifique et transformez la théorie en pratique.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg text-center mb-6">
              <p className="text-lg font-lato text-gris-profond">Offre Spéciale Webinaire :</p>
              <p className="text-2xl my-2 font-montserrat">
                <span className="line-through text-gris-profond opacity-60 mr-2">177€</span>
                <span className="font-bold text-corail-pepps text-3xl">97€</span>
              </p>
            </div>
            
            <a 
              href="[CHECKOUT_URL_PACK]" 
              className="pepps-btn w-full text-lg py-3 block text-center rounded-full no-underline hover:no-underline mb-4"
            >
              Je choisis le Pack Décollage
            </a>

            <div className="flex justify-around items-center text-xs text-center font-lato">
              <div className="flex flex-col items-center space-y-1">
                <Lock className="w-6 h-6 text-vert-eau-doux" />
                <span className="text-gris-profond">Paiement sécurisé</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Download className="w-6 h-6 text-vert-eau-doux" />
                <span className="text-gris-profond">Accès immédiat</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Calendar className="w-6 h-6 text-vert-eau-doux" />
                <span className="text-gris-profond">Prise de RDV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;