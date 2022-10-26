import Head from 'next/head';
import React from 'react';
import Script from 'next/script';

export interface SeoInfo {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
}

export interface SeoProps {
  props: SeoInfo;
}

export const SEO = ({ props }: SeoProps) => {
  const { title, description, url, thumbnailUrl } = props;

  return (
    <>
      <Head>
        <title>NextJS | Shady Rhymes</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnailUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={thumbnailUrl} />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script strategy="afterInteractive">
        {` 
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', ${process.env.GOOGLE_ANALYTICS});
        `}
      </Script>
    </>
  );
};
