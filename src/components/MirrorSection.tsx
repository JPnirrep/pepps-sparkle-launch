import { CheckCircle } from "lucide-react";

const MirrorSection = () => {
  const points = [
    {
      text: "Vous avez des idées lumineuses, mais la peur du jugement vous paralyse au moment de les partager."
    },
    {
      text: "Vous préparez vos interventions à l'extrême, mais une fois lancé(e), vous perdez vos moyens face à un regard ou une question imprévue."
    },
    {
      text: "Vous sortez de réunions ou de présentations physiquement et émotionnellement épuisé(e), comme si vous aviez couru un marathon."
    },
    {
      text: "On vous dit souvent \"d'arrêter de penser autant\" ou \"d'être moins sensible\", alors que c'est l'essence même de qui vous êtes."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-blanc-creme">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8 text-noir-doux">
          Est-ce que cela vous semble familier ?
        </h2>
        <div className="space-y-6 text-left text-lg md:text-xl font-lato">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-corail-pepps flex-shrink-0 mt-1" />
              <p className="text-gris-profond">
                {point.text.includes('peur du jugement') ? (
                  <>
                    Vous avez des idées lumineuses, mais <strong>la peur du jugement vous paralyse</strong> au moment de les partager.
                  </>
                ) : point.text.includes('perdez vos moyens') ? (
                  <>
                    Vous préparez vos interventions à l'extrême, mais une fois lancé(e), vous <strong>perdez vos moyens</strong> face à un regard ou une question imprévue.
                  </>
                ) : point.text.includes('épuisé') ? (
                  <>
                    Vous sortez de réunions ou de présentations <strong>physiquement et émotionnellement épuisé(e)</strong>, comme si vous aviez couru un marathon.
                  </>
                ) : (
                  <>
                    On vous dit souvent "d'arrêter de penser autant" ou "d'être moins sensible", alors que c'est <strong>l'essence même de qui vous êtes</strong>.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xl md:text-2xl font-lato text-gris-profond">
          Si vous avez hoché la tête en lisant ces lignes, ce n'est pas une coïncidence. 
          Vous n'êtes ni "trop", ni "pas assez". Vous fonctionnez simplement différemment. 
          <strong className="text-corail-pepps"> Et c'est là que tout commence.</strong>
        </p>
      </div>
    </section>
  );
};

export default MirrorSection;