import { useState } from "react";
import PropertyCard from "../components/property/PropertyCard";
import PropertyDetails from "../components/property/PropertyDetails";


const PropertyPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      name: "Car",
      location: "12 Road, Dhaka, Bangladesh",
      date: "20 Jan 2028",
      status: "secured",
      price: "$20,000",
      client: "John Doe",
      staff: "Alice Johnson",
      images: ["car.jpg", "car2.jpg", "car3.jpg"],
      renewals: {
        date: "30 Jan 2028",
        staff: "Bob Smith",
        status: "pending",
      },
    },
    {
      id: 2,
      name: "House 1",
      location: "45 Street, Dhaka, Bangladesh",
      date: "15 Feb 2028",
      status: "risk",
      price: "$100,000",
      client: "Jane Smith",
      staff: "Bob Brown",
      images: ["house1.jpeg", "house2.webp"],
    },
    {
      id: 3,
      name: "House 2",
      location: "78 Avenue, Dhaka, Bangladesh",
      date: "10 Mar 2028",
      status: "problem",
      price: "$150,000",
      client: "Michael Lee",
      staff: "Sara White",
      images: ["house2.webp", "house1.jpeg"],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex">
      {/* Property List (Left Side) */}
      <div className="w-1/3 bg-white p-4 shadow-md rounded-md overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Properties</h2>
        <div className="space-y-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} onSelect={setSelectedProperty} />
          ))}
        </div>
      </div>

      {/* Property Details (Right Side) */}
      <div className="w-2/3 ml-6">
        <PropertyDetails property={selectedProperty} />
      </div>
    </div>
  );
};

export default PropertyPage;
