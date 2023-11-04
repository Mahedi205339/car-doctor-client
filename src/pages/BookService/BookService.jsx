import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service
    const { user } = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email
        const date = form.date.value
        const booking = {
            customerName: name,
            email,
            date,
            service_id: _id,
            service: title,
            price: price,
            img
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('service successfully added')
                }
            })

    }

    return (
        <div className="">
            <h2 className="text-center font-bold text-xl">Book Service : {title}</h2>


            <form onSubmit={handleBookService} className=" w-3/4 mx-auto ">
                <div className="grid grid-cols-1 
            md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName}
                            name="name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name="date" type="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="number" defaultValue={price} className="input input-bordered" required />
                    </div>
                </div>

                <div className="w-1/2 mx-auto my-6">

                    <input className="bg-orange-500 w-full text-white font-semibold py-2 rounded-2xl hover:text-orange-600 hover:bg-orange-200" type="submit" value="Order Confirm" />

                </div>
            </form>
        </div>

    );
};

export default BookService;