import { useLoaderData, useParams } from "react-router-dom";
import Hedaer from "../shared/Header/Hedaer";
import NewsCard from "./NewsCard";
import Footer from "../Footer/Footer";


const Home = () => {

    const news = useLoaderData();
    const { id } = useParams();
    const desiredItem = news.find((item) => item.id === 13);

    console.log(news);
    return (
        <div>
            <div>
                <Hedaer></Hedaer>
                
            </div>
            <div className="shadow-lg p-2 m-2">
                <h2 className="text-4xl font-semibold text-center">{desiredItem.title}</h2>
                <p>{desiredItem.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
            
                {news
                    .filter((item) => item.id >= 1 && item.id <= 12)
                    .map((item) => <NewsCard key={item.id} news={item}></NewsCard> )
                }
            </div>
            <Footer></Footer>


        </div>
    );
};

export default Home;
