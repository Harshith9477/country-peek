import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.cca3}`} className="card">
      
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="card__flag"
      />

      <div className="card__body">
        <h3 className="card__name">{country.name.common}</h3>

        <p>
          <b>Population:</b> {country.population.toLocaleString()}
        </p>

        <p>
          <b>Region:</b> {country.region}
        </p>

        <p>
          <b>Capital:</b> {country.capital?.[0] || "N/A"}
        </p>
      </div>

    </Link>
  );
}

export default CountryCard;