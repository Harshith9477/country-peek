import { Link } from "react-router-dom";

function CountryCard({ country }) {
  const { name, flags, population, region, capital, cca3 } = country;

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img src={flags.png} alt={name.common} className="card__flag" />

      <div className="card__body">
        <h3 className="card__name">{name.common}</h3>

        <p><b>Population:</b> {population.toLocaleString()}</p>
        <p><b>Region:</b> {region}</p>
        <p><b>Capital:</b> {capital?.[0]}</p>
      </div>
    </Link>
  );
}

export default CountryCard;