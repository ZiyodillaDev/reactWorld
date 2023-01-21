const Card = ({ img, population, region, capital, name }) => {
    return (
      <div className="all-cards">
        <div className="card">
          <img src={img} alt="flags" style={{ width: "100%" }} />
          <h2>{name}</h2>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    );
  };
  
  export default Card;