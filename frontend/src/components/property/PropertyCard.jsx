const PropertyCard = ({ status }) => {
    const statusStyles = {
      secured: "bg-green-100 border-green-500 text-green-700",
      risk: "bg-yellow-100 border-yellow-500 text-yellow-700",
      problem: "bg-red-100 border-red-500 text-red-700",
    };
  
    return (
      <div className={`border shadow-md rounded-lg flex items-center p-4 w-full max-w-md bg-white space-x-4 sm:w-[80%] md:w-[60%] lg:w-[40%] ${statusStyles[status] || "bg-gray-100 border-gray-500 text-gray-700"}`}>
        {/* Property Image */}
        <img
          className="h-24 w-36 rounded-md object-cover"
          src="car.jpg"
          alt="Car"
        />
  
        {/* Property Details */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800">Car</h3>
          <p className="text-sm text-gray-600">12 Road, Dhaka, Bangladesh</p>
          <p className="text-xs text-gray-500">20 Jan 2028</p>
        </div>
  
        {/* Status Indicator */}
        <div className={`text-xl font-bold p-2 rounded-md ${statusStyles[status] || "bg-gray-300"}`}>
          {status === "secured" ? "✅" : status === "risk" ? "⚠️" : status === "problem" ? "❌" : "❔"}
        </div>
      </div>
    );
  };
  
  export default PropertyCard;
  