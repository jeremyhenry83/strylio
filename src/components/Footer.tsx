import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Services',
      links: [
        { label: 'Product Management', href: '/product-management' },
        { label: 'No-Code Automation', href: '/no-code' },
        { label: 'Cybersécurité', href: '/cybersecurite' },
        { label: 'Stratégie Digitale', href: '/strategie-digitale' },
        { label: 'CTO/CPO Interim', href: '/cto-cpo' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'contact@strylio.com', href: 'mailto:contact@strylio.com' },
        { label: 'Paris, France', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-strylio-purple">Strylio</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Expertise 360° en Innovation Produit & Tech
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-strylio-purple transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Strylio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
