
const AmongUsCharacter = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="animate-move-around">
        <svg
          width="60"
          height="80"
          viewBox="0 0 60 80"
          className="drop-shadow-lg"
        >
          {/* Main body */}
          <ellipse cx="30" cy="45" rx="25" ry="30" fill="#FFB6C1" />
          
          {/* Visor */}
          <ellipse cx="30" cy="35" rx="18" ry="15" fill="#87CEEB" />
          
          {/* Legs */}
          <ellipse cx="22" cy="70" rx="8" ry="8" fill="#FFB6C1" />
          <ellipse cx="38" cy="70" rx="8" ry="8" fill="#FFB6C1" />
          
          {/* Backpack */}
          <rect x="45" y="30" width="10" height="20" rx="5" fill="#FFB6C1" />
          
          {/* Shadow */}
          <ellipse cx="30" cy="78" rx="20" ry="4" fill="rgba(0,0,0,0.2)" />
        </svg>
      </div>
    </div>
  );
};

export default AmongUsCharacter;
