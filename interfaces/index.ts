//not empty
export interface User {
   id: number;
   name: string;
   email: string;
}

export interface PropertyProps {
   name: string;
   address: {
      state: string;
      city: string;
      country: string;
   };
   rating: number;
   category: string[];
   price: number;
   offers: {
      bed: string;
      shower: string;
      occupants: string;
   };

   image: string;
   discount: string;
}



export const FILTER_LABELS = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Ocean View",
  "Private Pool",
  "Luxury",
];