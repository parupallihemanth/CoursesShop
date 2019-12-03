import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
        <div className="conatiner">
              <Heading title={heading}/>
              <div className="row">
                 <div className="col-10 col-sm-8 mx-auto  text-center">
                    <p className="lead text-white mb-4">
                       bvrfhiael jfourfho;glwrksfj ijieofjowiefjwoi hoeufhe;lF EFOIJ;Offe uidheowuheoflefl
                       jfnowfnoaeufof
                       ufbowuefhfouwrfhuo;wrghorrgiodorkasfnka;fa;oifj;oknfrgbgbkgio'
                        </p>
                    <Link to="/about/">
                    <button className="btn btn-warning btn-lg">{heading}</button>
                    </Link>

                     </div>
              </div>    
            
        </div>
                 
        </section>
    )
}
