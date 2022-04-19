import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query getBlogPosts {
    allFile(filter: { extension: { eq: "mdx" } }) {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
