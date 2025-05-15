export default function ProductManagement() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-strylio-purple/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Product Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Optimisez votre stratégie produit et maximisez la valeur pour vos utilisateurs avec notre expertise en Product Management.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Notre Approche
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Chez Strylio, nous adoptons une approche centrée sur l'utilisateur pour le développement de produits. Notre méthodologie combine les meilleures pratiques du Product Management avec une compréhension approfondie des besoins de votre entreprise.
                </p>
                <p className="text-gray-600">
                  Nous vous accompagnons dans la définition de votre vision produit, l'élaboration de votre roadmap et la mise en place des processus nécessaires pour atteindre vos objectifs.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Nos Services
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold text-gray-900">Définition de la stratégie produit</span> - 
                    Alignement de votre vision produit avec vos objectifs business
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold text-gray-900">Gestion de roadmap</span> - 
                    Planification et priorisation des fonctionnalités
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold text-gray-900">User Research</span> - 
                    Compréhension approfondie des besoins utilisateurs
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold text-gray-900">Métriques et Analytics</span> - 
                    Mise en place et suivi des KPIs produit
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir Strylio ?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expertise Approfondie
                  </h3>
                  <p className="text-gray-600">
                    Notre équipe possède une expérience significative dans la gestion de produits pour des entreprises de toutes tailles.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Approche Sur Mesure
                  </h3>
                  <p className="text-gray-600">
                    Nous adaptons nos méthodologies à votre contexte spécifique et vos objectifs uniques.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Résultats Mesurables
                  </h3>
                  <p className="text-gray-600">
                    Nous nous concentrons sur des résultats concrets et mesurables pour votre entreprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-strylio-purple/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à Optimiser Votre Stratégie Produit ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins en Product Management et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <a
            href="mailto:contact@strylio.com"
            className="inline-block bg-strylio-purple hover:bg-strylio-purple-dark text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
} 