'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('error');
      setError(error instanceof Error ? error.message : "Une erreur est survenue");
      
      setTimeout(() => {
        setStatus('idle');
        setError(null);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-strylio-purple/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discutons de vos projets et voyons comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-strylio-purple focus:ring-strylio-purple sm:text-sm"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-strylio-purple focus:ring-strylio-purple sm:text-sm"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-strylio-purple focus:ring-strylio-purple sm:text-sm"
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors ${
                  status === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-strylio-purple hover:bg-strylio-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-strylio-purple'
                }`}
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-sm text-green-600">
                  Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </p>
              )}

              {status === 'error' && (
                <p className="mt-4 text-sm text-red-600">
                  {error || "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard."}
                </p>
              )}
            </div>
          </form>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Autres moyens de nous contacter
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Email: <a href="mailto:contact@strylio.com" className="text-strylio-purple hover:text-strylio-purple-dark">
                  contact@strylio.com
                </a>
              </p>
              <p className="text-gray-600">
                Basé à Paris, France
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 