import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

const AboutPage = (props) => {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
