const PropertyCard = ({ property, onSelect }) => {
  const statusStyles = {
    secured: "border-green-500 text-green-700",
    risk: "border-yellow-500 text-yellow-700",
    problem: "border-red-500 text-red-700",
  };

  return (
    <div
      className={`border-l-4 p-4 cursor-pointer rounded-md shadow-sm bg-white hover:bg-gray-100 transition-all 
      ${statusStyles[property.status] || "border-gray-500 text-gray-700"}`}
      onClick={() => onSelect(property)}
    >
      <h3 className="text-lg font-semibold">{property.name}</h3>
      <p className="text-sm text-gray-600">{property.location}</p>
      <p className="text-xs text-gray-500">{property.date}</p>
    </div>
  );
};

export default PropertyCard;
