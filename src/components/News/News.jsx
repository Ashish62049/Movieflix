import { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { category, country, pageSize,setProgress,apiKey, q,language,searched} = props;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setProgress(10);
    let newsUrl;
    if(searched && q!==""){
    newsUrl = `https://newsapi.org/v2/everything?q=+${q}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}&language=${language}`
    }
    else{
      newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    }
    setLoading(true);
    let data = await fetch(newsUrl);
    setProgress(40);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)}-Newsflix`;
    updateNews();
    //eslint-disable-next-line
  },[q]);

  const fetchMoreData = async () => {
    let newsUrl;
    if(searched && q!== ""){
    newsUrl = `https://newsapi.org/v2/everything?q=+${q}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}&language=${language}`;}
    else{
      newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
    }
    setPage(page+1);
    let data = await fetch(newsUrl);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <>
      <h1 className="text-center text-white" style={{marginTop:'75px'}}>
        {(searched && q!== "")?`Searched results for ${capitalizeFirstLetter(q)}`:`${capitalizeFirstLetter(category)}-Top Headlines`}
        {/* {capitalizeFirstLetter(category)}-Top Headlines */}
      </h1>
      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    category={category}
                  />
                </div>
              );
            })}
        </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
