export default function StrategieDigitale() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-strylio-purple/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stratégie Digitale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Optimisez votre performance digitale grâce à une approche data-driven et des processus efficaces.
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
                Stack Data
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Nous vous accompagnons dans la mise en place d'une infrastructure data complète pour piloter votre activité :
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold text-gray-900">Collecte de données</span> - 
                      Mise en place d'outils de tracking et d'analytics (Google Analytics 4, Mixpanel, etc.)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold text-gray-900">Data Warehouse</span> - 
                      Centralisation et structuration de vos données (BigQuery, Snowflake)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold text-gray-900">Visualisation</span> - 
                      Création de tableaux de bord personnalisés (Looker, Metabase)
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Optimisation des Funnels
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Analyse des Parcours</h3>
                      <p className="text-gray-600">Identification des points de friction et des opportunités d'amélioration</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Tests A/B</h3>
                      <p className="text-gray-600">Optimisation continue basée sur des données réelles</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Personnalisation</h3>
                      <p className="text-gray-600">Adaptation des parcours selon les segments utilisateurs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Optimisation des Process Internes
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Audit des Process
                    </h3>
                    <p className="text-gray-600">
                      Analyse de vos processus actuels et identification des opportunités d'amélioration.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Sélection d'Outils
                    </h3>
                    <p className="text-gray-600">
                      Choix et implémentation des outils adaptés à vos besoins (CRM, ERP, outils collaboratifs).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Automatisation
                    </h3>
                    <p className="text-gray-600">
                      Mise en place de workflows automatisés pour gagner en efficacité.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Nos Expertises
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Analytics et Data Science</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Optimisation de la Conversion</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Process Automation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Digital Transformation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-strylio-purple/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à Transformer votre Organisation ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos objectifs et découvrir comment nous pouvons vous aider à optimiser votre stratégie digitale.
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