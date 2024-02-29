import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import  { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}> <Toaster /> {children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Import Express - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Gaurav Bangade",
};

export default Layout;
