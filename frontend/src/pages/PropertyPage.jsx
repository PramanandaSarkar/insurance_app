import Property from "../components/property/Property"

const properties =[
  {
    "name": "car",
    "image": "car.jpg"
  },
  {
    "name": "house1",
    "image": "house1.jpeg"
  },
  {
    "name": "house2",
    "image": "house2.webp"
  },

]

const PropertyPage = () => {
  
  return (
    // <div>
    //   {
    //     properties.map((item) => <>
    //       <h2>{item.name}</h2>
    //       <img src={item.image} alt="property Image" />
    //     </> )
    //   }
      
    // </div>
    <Property />
  )
}

export default PropertyPage
