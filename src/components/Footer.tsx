import logoFabriquePepps from "@/assets/logo_fabrique_pepps.png";

const Footer = () => {
  return (
    <footer className="bg-noir-doux py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src={logoFabriquePepps} 
            alt="Logo La Fabrique PEPPS" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="text-blanc-creme font-lato">
          <p className="text-lg mb-2 font-montserrat font-bold">La Fabrique PEPPS</p>
          <p className="text-sm opacity-80">
            Transformez votre sensibilité en force • Méthode PEPPS pour la prise de parole
          </p>
          <p className="text-xs opacity-60 mt-4">
            © 2024 La Fabrique PEPPS - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;