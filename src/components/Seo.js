import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import { Helmet } from 'react-helmet';

export default function Seo({ title, description, image }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          title
          description
          author
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  const SEO = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: image ? `${defaults.url}${image}` : defaults.image,
  };

  return (
    <Helmet title={SEO.title}>
      <html lang="en" />
      <meta name="description" content={SEO.description} />
      <link rel="canonical" href="https://gatsbytestpkgsite.gatsbyjs.io/"/>
    </Helmet>
  );
}