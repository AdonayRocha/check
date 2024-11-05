"use client";

import { useRouter } from "next/router";
import { useState } from "react";

const Button = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const fetchCatImage = async () => {
        setLoading(true);

        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search", {
                headers: {
                    "x-api-key": "live_sWcFVdehMpHQ6B9zbjgJGn6VvfWHUEtZa20jJhoPAtvY3KNb3x4IswQsqlt1XXyB"
                }
            });

            const data = await response.json();
            const imageUrl = data[0].url;

            router.push({
                pathname: "/cat",
                query: { imageUrl }
            });
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
            </button>
        </div>
    );
};

export default Button;
