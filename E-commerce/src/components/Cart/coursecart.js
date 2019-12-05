import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'
import { array } from 'prop-types';

const getCaty = items =>{
    let holdItems = items.map((items) =>{
        return items.node.category
    })

    let uniqueCategories = new Set(holdItems)
    let arrayCategories = Array.from(uniqueCategories)
    arrayCategories = ["all", ...arrayCategories]
    return arrayCategories
}

export default class Coursecart extends Component {
    constructor(props){
        super(props)

        this.state={
            courses : props.courses.edges,
            mycourses : props.courses.edges,
            mycategories: getCaty(props.courses.edges)
        }
    }

    catyClicked = category => {
        let keepItSafe = [...this.state.courses]
        // console.log(keepItSafe)
        if(category === "all"){
            this.setState(() =>{
                return {mycourses : keepItSafe}
            })
            console.log(this.state.mycourses)
        
        }
        else{
            let holdMe = keepItSafe.filter(({ node  }) => node.category === category)
            this.setState(()=>{
                return {mycourses: holdMe }
            })
               
            console.log(this.state.mycourses)
        }
    }       
    render() {
        //  console.log(this.state.courses)
        return (
            <section className="py-5">
              <div className="container">
              <Heading title="Courses" />
                <div className="row my-2">
                   <div className="col-10 mx-auto text-center">
                   {this.state.mycategories.map((category, index) =>{
                       return(
                           <button type="button"
                           className = "btn btn-danger m-3 px-3"
                           key={index}
                          onClick={() =>{
                                this.catyClicked(category)
                            }}
                           >{category}
                           </button>    

                           
                       )
                   })

                   }
                    </div>   
                 </div>   
                <div className="row"> 
                { this.state.mycourses.map( ({node}) =>{
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
                </div>
                </div>
            </section>   
        )
    }
}
