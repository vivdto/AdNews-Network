import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  
  
  render() {

   let {title, description, imageURL, newsURL, author, date, source} = this.props;


    return (

      <div className="my-3">
        
      <div>
              <div className="card">
        <img src={!imageURL?"https://images.cnbctv18.com/wp-content/uploads/2021/09/health-records-digital-cards-e1670318450460-1019x573.jpg":imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
        
        <h5 className="card-title">{title} <span class="position-absolute top-0 translate-middle badge
rounded-pill bg-danger" style={{left: '82%', zIndex: '1'}}> {source}
</span></h5> I


          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
          <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>

      </div>
      </div>
    )
  }
}
