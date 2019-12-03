import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({title, subtitle, img, heroclass}) {
    return (
        
           
          <BackgroundImage
          
          className={heroclass}
          fluid={img}
          
        >
        <h1 className="text-white text-upper text-center display-4">{title}</h1>
        <h3 className="text-warning">{subtitle}</h3> 
        </BackgroundImage>
        
    )
}
