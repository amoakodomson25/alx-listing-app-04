import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ data: PropertyProps }> = ({ data }) => {
  return (
    <div className="rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={data.image}
        alt={data.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{data.name}</h3>

        <p className="text-gray-500 text-sm">{data.address.city}</p>

        <div className="flex justify-between mt-3">
          <p className="text-gray-900 font-semibold text-lg">
            ${data.price.toLocaleString()}
          </p>
          <p className="text-yellow-500 font-semibold">
            ★ {data.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;