import Image from 'next/image';

export default function NoCode() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-strylio-purple/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            No-Code Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Optimisez vos coûts et votre efficacité avec des solutions d'automatisation no-code adaptées à vos besoins.
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
                Notre Solution : n8n
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Nous privilégions n8n comme solution d'automatisation, une alternative puissante et économique à Make (Integromat) ou Zapier. Avec n8n, vous bénéficiez :
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold text-gray-900">Hébergement personnalisé</span> - 
                      Réduisez significativement vos coûts en hébergeant n8n sur votre propre infrastructure
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold text-gray-900">Contrôle total</span> - 
                      Gardez la maîtrise de vos données et de vos workflows
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold text-gray-900">Flexibilité maximale</span> - 
                      Plus de 200 intégrations disponibles et possibilité de créer vos propres noeuds
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Comparaison des Coûts
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Make (Integromat)</h3>
                      <p className="text-gray-600">À partir de 99€/mois pour les fonctionnalités avancées</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Zapier</h3>
                      <p className="text-gray-600">À partir de 73,50€/mois pour les fonctionnalités essentielles</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">n8n (auto-hébergé)</h3>
                      <p className="text-gray-600">Coût d'hébergement à partir de 5€/mois + configuration initiale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nos Services d'Automatisation
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Configuration et Déploiement
                    </h3>
                    <p className="text-gray-600">
                      Installation et configuration de n8n sur votre infrastructure, mise en place des workflows initiaux.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Formation et Support
                    </h3>
                    <p className="text-gray-600">
                      Formation de vos équipes à l'utilisation de n8n et support continu pour vos besoins d'automatisation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Développement sur Mesure
                    </h3>
                    <p className="text-gray-600">
                      Création de noeuds personnalisés et d'intégrations spécifiques pour vos besoins uniques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Outils Supportés
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-8 w-8 text-[#FF6B6B]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span className="text-gray-600">n8n</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="h-8 w-8 text-[#4353FF]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                    </svg>
                    <span className="text-gray-600">Make</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="h-8 w-8 text-[#FF4A00]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span className="text-gray-600">Zapier</span>
                  </div>
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
            Prêt à Automatiser vos Processus ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour découvrir comment nous pouvons vous aider à optimiser vos coûts et votre efficacité avec n8n.
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