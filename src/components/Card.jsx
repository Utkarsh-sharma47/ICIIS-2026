function Card({src, name, dsgn, email, phone}) {
    return (
      <div className="inter">
        <div className="h-24 bg-blue-200 shadow-lg rounded-sm p-2 flex items-center space-x-4 w-80">
          <img
            src={src}
            alt={name}
            className="w-16 h-16 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-600">{dsgn}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  