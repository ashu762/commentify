import React from 'react';
import { NextSeo } from 'next-seo';

const Page = ({ name, path, children }) => {
  const title = `Commentify – ${name}`;

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title
        }}
      />
      {children}
    </>
  );
};

export default Page;
