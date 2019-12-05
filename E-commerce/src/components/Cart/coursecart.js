import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'
export default class coursecart extends Component {
    constructor(props){
        super(props)

        this.state={
            courses:this.props.courses.edges
        }
    }
    render() {
        //  console.log(this.state.courses)
        return (
            <section className="row col-md-8  mx-auto">
                { this.state.courses.map( ({node}) =>{
                    return(
                        
                        <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                    <Img fixed = {node.image.fixed} />
                        <div className="flex-grow-1 px-3">
                        <div className= "d-flex justify-content-between">
                         <h6 className="mb-0">{node.title}</h6>
                         <h6 className="mb-0 text-success">${node.price}</h6>
                             
                            </div>
                            <p className="text-mute">
                            <small>{node.description.description}</small>
                             </p>   
                             <button 
                             data-item-id={node.id}
                             data-item-name={node.item}
                             data-item-price={node.price}
                             data-item-image={node.image.fixed.src}
                             data-item-url="https://learncodeonline.in"
                             className="btn btn-warning snipcart-add-item">Join Now</button>    
                         </div>   
                    </div> 
                    
                    )
                     
                }
                )}
            </section>   
        )
    }
}
