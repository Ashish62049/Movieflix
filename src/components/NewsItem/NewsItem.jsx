import default_image from "../../assets/default_image.png";
import { useState } from "react";
const NewsItem = (props) => {
  const {imageURL,title,description,author,date,newsURL,source,category} = props;
  const [isHover,setIsHover]=useState(false);
  const categoryColorHandler = () => {
    if (category === "general") return "#d9534f";
    else if (category === "business") return "#BF40BF";
    else if (category === "entertainment") return "#5bc0de";
    else if (category === "health") return "#5cb85c";
    else if (category === "science") return "#f0ad4e";
    else if (category === "sports") return "#0275d8";
    else return "#FF4500";
  };

  return (
    <div>
      <div className="card bg-dark">
        <div className="d-flex justify-content-end position-absolute end-0">
          <span
            className="badge rounded"
            style={{ backgroundColor: categoryColorHandler() }}
          >
            {source}
          </span>
        </div>
        <img
          src={imageURL ? imageURL : default_image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-white">
          <h5 className="card-title">{title ? title : ""}</h5>
          <p className="card-text">{description ? description : ""}</p>
          <p className="card-text">
            <small className="text-white-50">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsURL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm text-white mb-2"
            style={{ backgroundColor: categoryColorHandler()
            ,scale:isHover?'1.05':'1'}}
            onMouseEnter={()=>{setIsHover(true)}}
            onMouseLeave={()=>{setIsHover(false)}
            }
            
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
