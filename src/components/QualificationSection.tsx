const QualificationSection = () => {
  const qualifications = {
    yes: [
      "Vous êtes prêt(e) à explorer votre sensibilité comme une force.",
      "Vous avez un projet ou une idée importante à défendre.",
      "Vous cherchez des outils concrets et une approche profondément bienveillante."
    ],
    no: [
      "Vous cherchez une formule magique sans pratique.",
      "Vous avez besoin d'une thérapie pour des blessures profondes.",
      "Vous n'êtes pas à l'aise avec l'idée d'une introspection honnête."
    ]
  };

  return (
    <section className="py-16 md:py-24 bg-blanc-creme">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-noir-doux">
          Ce pack est-il fait pour vous ?
        </h2>
        
        <div className="md:flex md:space-x-10">
          <div className="md:w-1/2 p-6 rounded-lg mb-6 md:mb-0">
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-noir-doux">
              Ce pack est un accélérateur si...
            </h3>
            <ul className="space-y-3 font-lato">
              {qualifications.yes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">✅</span>
                  <span className="text-gris-profond">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 p-6 bg-gray-200 rounded-lg">
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-noir-doux">
              ...et il n'est probablement pas la bonne solution si...
            </h3>
            <ul className="space-y-3 font-lato">
              {qualifications.no.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 text-2xl">❌</span>
                  <span className="text-gris-profond">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;