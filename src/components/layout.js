/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Footer from './footer'
import Header from "./header"

const Layout = ({ children }) => {
  return (
      <div>
        <Helmet>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <title>Eccentric portfolio - personal website template | Home : W3layouts</title>
          <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"/>
          <link rel="stylesheet" href="/css/style.css"/>
        </Helmet>

        <Header/>
          {children}
        <Footer/>
      </div>
      
  )
}
export default Layout
