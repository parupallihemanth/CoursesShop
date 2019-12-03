import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql} from 'gatsby'
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import DualInfoblock from '../components/Reuseable/DualInfoblock'
import CourseCart from '../components/Cart/coursecart'

const IndexPage = ({data}) => (
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
      title='I Write code'
      subtitle='www.programminghub.in'
      heroclass="hero-background"
      />

      <Infoblock heading="About us"/>
      <CourseCart courses={data.courses} />
      <DualInfoblock heading='Our team' />
      
  </Layout>
)

export const query = graphql`
    {
      img: file(relativePath: { eq: "heromain.png" }) {
        childImageSharp {
          fluid {
             ...GatsbyImageSharpFluid_tracedSVG 
    }
  }
}

  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    
  }
}
}



`
export default IndexPage
