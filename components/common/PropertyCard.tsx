import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.name}</h3>

        <p className="text-gray-500 text-sm">
          {property.address.city}, {property.address.state}
        </p>

        <div className="flex justify-between mt-3">
          <p className="text-gray-900 font-semibold text-lg">
            ${property.price.toLocaleString()}
          </p>
          <p className="text-yellow-500 font-semibold">
            ★ {property.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
