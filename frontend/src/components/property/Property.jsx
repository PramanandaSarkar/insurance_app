import PropertyCard from "./PropertyCard"
import PropertyDetails from "./PropertyDetails"

const Property = () => {
  return (
    <div className="p-6 bg-black text-white min-h-screen flex flex-col items-center">
      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <PropertyCard status="secured" />
        <PropertyCard status="risk" />
        <PropertyCard status="problem" />
        <PropertyCard status="" />
      </div>
      {/* Property Details */}
      <PropertyDetails />
    </div>
  );
};
export default Property