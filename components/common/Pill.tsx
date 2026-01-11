interface PillProps {
    label: string;
    onClick?: () => void;
    active?: boolean;
  }
  
  const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-full border text-sm transition cursor-pointer 
          ${active ? "bg-black text-white" : "bg-white text-black border-gray-300"}`}
      >
        {label}
      </button>
    );
  };
  
  export default Pill;