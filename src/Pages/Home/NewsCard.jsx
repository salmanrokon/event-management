import { Link } from "react-router-dom";



const NewsCard = ({ news }) => {
    const { title,img,id } = news;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={img}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions ">
                    <Link to={`/details/${id}`}><button className="btn btn-accent  text-xl">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;