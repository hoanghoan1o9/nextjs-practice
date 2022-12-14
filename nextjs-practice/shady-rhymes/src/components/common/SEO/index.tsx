import Head from 'next/head';
import React from 'react';
import Script from 'next/script';

import { Partytown } from '@builder.io/partytown/react';
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

      <Partytown debug={true} forward={['dataLayer.push']} />
      <Script
        strategy="worker"
        type="text/partytown"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: ` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
       `,
        }}
      />
    </>
  );
};
