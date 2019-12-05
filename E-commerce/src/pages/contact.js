import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql} from 'gatsby'
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import Contactus from '../components/Contact/contactus'

const ContactPage = ({data}) => (
  <Layout>
      {/* <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        
      </div>
      <Link to="/page-2/">Go to page 2</Link>  */}

      <HeroSection
      img = {data.img.childImageSharp.fluid}
      title='Contact us'
      
      heroclass="about-background"
      />

      <Infoblock heading="How can we help"/>
      <Contactus />
      
  </Layout>
)

export const query = graphql`
    {
      img: file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fluid {
             ...GatsbyImageSharpFluid_tracedSVG 
    }
  }
}
}



`
export default ContactPage
