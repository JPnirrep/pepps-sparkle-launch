import { Shield } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-noir-doux">
          L'opportunité de prendre votre place est là.
        </h2>
        
        <p className="text-lg md:text-xl mb-8 font-lato text-gris-profond">
          Ne laissez pas le doute décider pour vous. L'offre spéciale à 97€ est exclusivement 
          disponible suite à ce webinaire. C'est le coup de pouce que vous attendiez pour enfin oser l'impact.
        </p>
        
        <a 
          href="[CHECKOUT_URL]" 
          className="pepps-btn w-full md:w-auto text-xl py-4 mb-12 inline-block px-8 rounded-full no-underline hover:no-underline"
        >
          Oui, je choisis de faire de ma sensibilité ma force
        </a>

        <div className="bg-vert-eau-doux text-noir-doux p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-left flex items-start space-x-4">
          <Shield className="w-16 h-16 text-noir-doux opacity-70 flex-shrink-0" />
          <div className="font-lato">
            <h3 className="text-xl font-montserrat font-bold text-noir-doux">
              Votre confiance est ma priorité.
            </h3>
            <p className="mt-2 text-gris-profond">
              Si après avoir lu le livret et avant notre session de coaching, vous sentez que ce n'est 
              finalement pas pour vous, je vous rembourse intégralement sur simple email. 
              Zéro risque, 100% confiance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;