import React from 'react'

 
export default function Teachings() {
    return (
        <section className="bg-theme my-5 py-4">
        <div className="conatiner">
              {/* <Heading title={heading}/> */}
              <div className="row">
              <div className="card-group">
  
              <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="data:image/png;base64,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" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p classNamess="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
        </div>
        </div>
        </div>       
    
    </section>

        
    )
}
