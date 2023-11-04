/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import { useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl my-5 text-orange-500">Out Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p className="my-4">
                    the majority have suffered alteration in some form, by injected humour, or randomized <br />
                    words which don't look even slightly believable.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map(service => <ServiceCart service={service} key={service._id} ></ServiceCart>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;