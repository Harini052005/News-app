import image from '../assets/default.jpg'

export const NewsItem = ({title, description, url, src, publishedAt}) => {
  return (
    <>
    <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-2 px-2 py-2" style={{maxWidth: "345px"}}>
  
   <img src={src ? src : image} style={{height: "200px"}} className="card-img-top" alt="..." />
 
   <div className="card-body">

    <h5 className="card-title">{title.slice(0, 50)}</h5>

    <p className="card-text">{description ? description.slice(0, 90) : "Lorem ipsum dolor sit amet consectetur adipisicing elit." }</p>

     <p className="card-text">{publishedAt}</p>
    <a href={url} className="btn btn-primary">Read more</a>

  </div>
 </div>
    </>
  )
}
