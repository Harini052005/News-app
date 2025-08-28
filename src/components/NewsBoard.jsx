import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem"
import { Spinner } from "react-bootstrap"

const NewsBoard = ({category}) => {
    const[articles, setArticles] = useState([])
    const[loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchNews = async() => {
            setLoading(true);
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            let response = await fetch(url);
            let data = await response.json();
            setArticles(data.articles);
            setLoading(false);
        };
        fetchNews();

    }, [category])   
  return (
    <div>
       
       <h2 className="text-center my-2">Top <span className="badge bg-danger"> Highlights </span></h2>

       { loading ? (
        <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
       ) : 
       <div className="row mx-3 my-3">
       {articles.map((news, index) => {
            return <NewsItem key={index}
            title={news.title}
            description={news.description} 
            url={news.url}
            src={news.urlToImage}
            publishedAt={news.publishedAt}
            />
       })}
       </div> 
    }
    </div>
  )
}

export default NewsBoard