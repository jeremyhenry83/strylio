export default function Cybersecurite() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-strylio-purple/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cybersécurité
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Protégez votre entreprise avec une approche moderne de la cybersécurité, en conformité avec les dernières réglementations dont NIS2.
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
                Conformité NIS2
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  La directive NIS2 renforce les exigences en matière de cybersécurité pour les entreprises européennes. Notre expertise vous accompagne dans :
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold text-gray-900">Évaluation de conformité</span> - 
                      Analyse de votre situation actuelle par rapport aux exigences NIS2
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold text-gray-900">Plan d'action</span> - 
                      Définition et mise en œuvre des mesures nécessaires
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-strylio-purple">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      <span className="font-semibold text-gray-900">Gestion des incidents</span> - 
                      Mise en place des procédures de notification et de gestion des incidents
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Points Clés de NIS2
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Gouvernance</h3>
                      <p className="text-gray-600">Mise en place d'une structure de gouvernance claire pour la cybersécurité</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Gestion des Risques</h3>
                      <p className="text-gray-600">Évaluation et traitement systématique des risques cyber</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Reporting</h3>
                      <p className="text-gray-600">Obligations de notification des incidents significatifs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nos Services de Cybersécurité
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Audit et Conseil
                    </h3>
                    <p className="text-gray-600">
                      Évaluation de votre posture de sécurité et recommandations personnalisées.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Mise en Conformité
                    </h3>
                    <p className="text-gray-600">
                      Accompagnement dans la mise en conformité avec les réglementations (NIS2, RGPD, etc.).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Formation et Sensibilisation
                    </h3>
                    <p className="text-gray-600">
                      Programmes de formation pour vos équipes sur les bonnes pratiques de sécurité.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Domaines d'Expertise
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Sécurité des infrastructures</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Protection des données</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Gestion des accès</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Réponse aux incidents</span>
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
            Prêt à Sécuriser votre Entreprise ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins en cybersécurité et découvrir comment nous pouvons vous aider à protéger votre entreprise.
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