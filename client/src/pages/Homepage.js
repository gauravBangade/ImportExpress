import React from 'react';
import Layout from '../components/layout/layout';
import { useAuth } from '../context/Auth';

const Homepage = () => {
  const [auth]=useAuth();
  return (
    <Layout>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)} </pre>
    </Layout>
  )
}

export default Homepage
