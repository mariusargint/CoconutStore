import { Metadata } from 'next';

export const siteMetadata = {
  en: {
    title: 'Coconut - Live Yours | Premium Italian Streetwear',
    description: 'Minimalist luxury streetwear Made in Italy. Premium heavyweight fabrics meet contemporary silhouettes. Elevated essentials for those who demand quality without compromise.',
    keywords: 'Italian streetwear, luxury fashion, minimalist clothing, Made in Italy, premium streetwear, heavyweight cotton, designer hoodies, luxury t-shirts, contemporary fashion, Coconut brand',
  },
  es: {
    title: 'Coconut - Vive lo Tuyo | Streetwear Premium Italiano',
    description: 'Streetwear minimalista de lujo Hecho en Italia. Telas premium de peso pesado se encuentran con siluetas contemporáneas. Esenciales elevados para quienes exigen calidad sin compromisos.',
    keywords: 'streetwear italiano, moda de lujo, ropa minimalista, Hecho en Italia, streetwear premium, algodón de peso pesado, sudaderas de diseñador, camisetas de lujo, moda contemporánea, marca Coconut',
  },
  it: {
    title: 'Coconut - Vivi il Tuo | Streetwear Premium Italiano',
    description: 'Streetwear minimalista di lusso Made in Italy. Tessuti premium di peso pesante incontrano silhouette contemporanee. Essenziali elevati per chi richiede qualità senza compromessi.',
    keywords: 'streetwear italiano, moda di lusso, abbigliamento minimalista, Made in Italy, streetwear premium, cotone pesante, felpe di design, t-shirt di lusso, moda contemporanea, marchio Coconut',
  },
};

export function generateMetadata(lang: 'en' | 'es' | 'it' = 'en'): Metadata {
  const meta = siteMetadata[lang];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.split(', '),
    authors: [{ name: 'Coconut' }],
    creator: 'Coconut',
    publisher: 'Coconut',
    openGraph: {
      type: 'website',
      locale: lang === 'en' ? 'en_US' : lang === 'es' ? 'es_ES' : 'it_IT',
      url: 'https://coconut-store.com',
      title: meta.title,
      description: meta.description,
      siteName: 'Coconut',
      images: [
        {
          url: '/images/carousel/carousel-1.jpg',
          width: 1200,
          height: 630,
          alt: 'Coconut - Premium Italian Streetwear',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/images/carousel/carousel-1.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add your verification codes when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  };
}
