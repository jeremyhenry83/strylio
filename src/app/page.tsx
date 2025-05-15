import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Product Management',
      description: 'Optimisez votre stratégie produit et maximisez la valeur pour vos utilisateurs.',
      href: '/product-management',
    },
    {
      title: 'No-Code Automation',
      description: 'Automatisez vos processus sans écrire une ligne de code.',
      href: '/no-code',
    },
    {
      title: 'Cybersécurité',
      description: 'Protégez vos actifs numériques avec des solutions de sécurité robustes.',
      href: '/cybersecurite',
    },
    {
      title: 'Stratégie Digitale',
      description: 'Développez votre présence numérique et votre transformation digitale.',
      href: '/strategie-digitale',
    },
    {
      title: 'CTO/CPO Interim',
      description: "Bénéficiez d'une expertise technique et produit de haut niveau.",
      href: '/cto-cpo',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-strylio-purple/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Expertise 360° en{' '}
              <span className="text-strylio-purple">Innovation Produit & Tech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Nous combinons une vision stratégique produit avec une expertise technique pointue pour accélérer votre time-to-market et maximiser votre impact business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg className="h-6 w-6 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Vision Produit</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg className="h-6 w-6 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Expertise Technique</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <svg className="h-6 w-6 text-strylio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Time-to-Market Optimisé</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-strylio-purple hover:bg-strylio-purple-dark text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Discutons de votre projet
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-strylio-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-strylio-purple py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-strylio-purple hover:bg-purple-50 font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
