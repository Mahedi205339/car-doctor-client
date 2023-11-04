import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { useEffect } from "react";
import { useState } from "react";
import BookingTable from "./BookingTable";
// import axios from "axios";
import useAxiosSecure from "../../hook/useAxiosSecure";


const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();
    // const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => setBookings(data))
        axiosSecure.get(url)
            .then(res => setBookings(res.data))
    }, [axiosSecure , url])
    // axios.get(url, { withCredentials: true })
    //     .then(res => {
    //         setBookings(res.data)
    // })


    const handleDelete = id => {
        const proceed = confirm('Are You sure you delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)

                }
            })



    }

    return (
        <div>
            <h2 className="text-4xl">Your Bookings:{bookings.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Service Name </th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingTable booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                                key={booking._id}></BookingTable>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Bookings;