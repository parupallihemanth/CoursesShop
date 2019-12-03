import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'
export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 bg-theme">
        <div className="container">
              <Heading title={heading} />

              <div className="row">
                 <div className="col-8 mx-auto">
                    <p className="lead text-white">
                    jjroigjeg jvourguowrgho; fjroihwiogjwr bhriue jufrhurwegnje jfuwrbgfej v 
                    owrughguogh hfowhgwuogh 
                    jgrg/qugjl/v hbvwkhwK JFUOW/WL.v uffh;iFHOWL 
                    Fiow/hfweuofh ufuowhuwehfuhwN UFUO;hf/OUEFHCNINKSNEF 
                    nbvehkvbhfe jvbuiwannf jjbfuwfbuwb bcuiwbVWVMk
                    </p>
                    </div>
                 <div className='col-4 '>
                 <div className="card" >
                   <img src="https://cdn.pixabay.com/photo/2018/02/28/18/02/woman-pointing-3188559__340.jpg" className="card-img-top" alt="image goes here"/>
                   <div className="card-body">
                   <h5 className="card-title">My pics</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
             </div>
                 </div>
              </div>    
          
        </div>  
        </section>
    )
}
