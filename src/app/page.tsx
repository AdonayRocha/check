'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchCatImage = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
          'x-api-key': 'live_sWcFVdehMpHQ6B9zbjgJGn6VvfWHUEtZa20jJhoPAtvY3KNb3x4IswQsqlt1XXyB'
        }
      });
      const data = await response.json();
      const imageUrl = data[0].url;

      router.push(`/cat?imageUrl=${encodeURIComponent(imageUrl)}`);
    } catch (error) {
      console.error('Erro ao buscar a imagem:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <button
        onClick={fetchCatImage}
        className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
        disabled={loading}
      >
        {loading ? 'Carregando...' : 'Ver Imagem do Gato'}
      </button>
    </div>
  );
};

export default HomePage;
