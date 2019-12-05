import React from 'react'
import Heading from '../Reuseable/Heading'
export default function Contactus() {
    return (
        <section className="col col-11 col-sm-8 mx-auto my-3">
        <Heading title="Contact us" />
        <form action="" method="POST">
        
        <div class="form-group">
        <input type="name" id="name" placeholder="Enter your name" className="form-control" />
        </div>
        
        <div className="form-group">
        <input type="email" id="email" placeholder="Enter your Email" className="form-control" />
        </div>
        
        <div className="form-group">
        <textarea type="description" id="description" placeholder="Enter your description here" className="form-control"/>
        </div>
        
        
        <button type="submit" className = "btn btn-outline-primary form-control">Submit</button>
          

         </form>

        </section>    
    )
}
