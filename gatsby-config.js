module.exports = {
  siteMetadata: {
    title: 'A Gatsby Project',
    description:
      'A site built from the inspiration of Jason Lengstorf',
  },
  plugins: [
  	'gatsby-plugin-emotion', 
  	'gatsby-plugin-react-helmet',
  	{
  		resolve: 'gatsby-plugin-mdx',
  		options: {
  			// use the header/footer as shared layouts
  			defaultLayouts: require.resolve('./src/components/layout.js')
  		}
  	}
  ],
};