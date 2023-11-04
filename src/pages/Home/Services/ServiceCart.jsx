import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
    const { title, img, price, _id } = service;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                {/* <p>{description}</p> */}
                <p className="text-xl text-left text-orange-500 font-bold">Price: $ {price}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;