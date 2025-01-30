import { FaEnvelope } from "react-icons/fa"; // Import message icon

const PropertyDetails = ({ property }) => {
  if (!property)
    return (
      <p className="text-gray-500 text-center py-6">
        Select a property to view details
      </p>
    );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      {/* Top Section: Property Info & Images */}
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Left: Property Information */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{property.name}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-gray-500">ID: {property.id}</p>
          <p className="font-semibold text-lg">Price: {property.price || "N/A"}</p>
        </div>

        {/* Right: Image Gallery */}
        <div className="flex gap-2 overflow-x-auto p-2 mt-4 lg:mt-0 bg-gray-100 rounded-md">
          {property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Property"
              className="w-32 h-24 object-cover rounded-md border border-gray-300 shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* Client & Staff Info with Message Option */}
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Client:</span> {property.client}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Staff:</span> {property.staff}
          </p>
        </div>
        {/* Message Staff Button */}
        <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          <FaEnvelope />
          Message Staff
        </button>
      </div>

      {/* Renewal Status Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold border-b pb-2">Renewal History</h3>
        <div className="mt-3 space-y-2">
          {property.renewals?.length > 0 ? (
            property.renewals.map((renewal, index) => (
              <div key={index} className="flex justify-between p-2 bg-gray-100 rounded-md shadow-sm">
                <span className="text-gray-700">{renewal.date}</span>
                <span className="text-gray-600">{renewal.staff}</span>
                <span className="text-gray-800 font-semibold">{renewal.status}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No renewal history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
