import { useStaticQuery, graphql } from 'gatsby';


/*
  gets 'meta-data' 
  from gatsby-config file
*/

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;