import { PropertyProps } from "@/interfaces";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Image */}
      <div className="w-full h-80 overflow-hidden rounded-lg mb-6">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Location */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{property.name}</h1>
        <p className="text-gray-500">
          {property.address.city}, {property.address.state},{" "}
          {property.address.country}
        </p>
      </div>

      {/* Rating & Price */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-yellow-500 font-semibold">
          ★ {property.rating}
        </p>
        <p className="text-2xl font-bold text-gray-900">
          ${property.price.toLocaleString()}
        </p>
      </div>

      {/* Offers */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border rounded-lg p-4 text-center">
           <p className="font-semibold">{property.offers.bed}</p>
          <p className="text-sm text-gray-500">Bedrooms</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
           <p className="font-semibold">{property.offers.shower}</p>
          <p className="text-sm text-gray-500">Bathrooms</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
           <p className="font-semibold">{property.offers.occupants}</p>
          <p className="text-sm text-gray-500">Guests</p>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {property.category.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Discount */}
      {property.discount && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg">
           {property.discount}
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
