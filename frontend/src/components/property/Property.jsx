import PropertyCard from "./PropertyCard"


const Property = () => {
  return (
    <div>
        <PropertyCard status={"secured"}  />
        <PropertyCard status={"risk"}/>
        <PropertyCard status={"problem"}/>
        <PropertyCard status={""}/>
    </div>
  )
}

export default Property