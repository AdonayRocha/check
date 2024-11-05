'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CatPage = () => {
    const searchParams = useSearchParams();
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const imageUrlParam = searchParams.get('imageUrl');
        if (imageUrlParam) {
            setImageUrl(imageUrlParam);
        }
    }, [searchParams]);

    if (!imageUrl) {
        return <div>Carregando imagem...</div>;
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img src={imageUrl} alt="Imagem de um gato" className="max-w-full h-auto" />
        </div>
    );
};

export default CatPage;
