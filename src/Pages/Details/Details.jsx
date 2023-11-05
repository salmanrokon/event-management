import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Hedaer from "../shared/Header/Hedaer";


const Details = () => {
    const details=useLoaderData();
    const {id,title,img}=useParams();
console.log(details);
    const item = details && details.find((item) => item.id === parseInt(id));
    return (
        <div>
           
           <div>
           
            {
                item ? (
                    <>
                   
                    <p>{item.title}</p>
                    <img className="max-w-2xl items-center mx-auto" src={item.img} alt="" />
                    <p className="max-w-xl text-center mx-auto">{item.description}</p>
                    </>
                ):(
                    <p>Details not avaible</p>
            
                )
            }
           </div>
        </div>
    );
};

export default Details;