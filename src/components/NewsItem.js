import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3 ">
                <div className="card shadow-lg border-warning">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img  src={!imageUrl ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text  fst-italic">{description}</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-warning shadow-lg text-white">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
