import React from 'react'

const CountryDetails = ({ country, onClose }) => {
    return (
        <div className="country-details">
        <button onClick={onClose}>Close</button>
        <h2>{country.name.common}</h2>
        <img src={country.flags.png} alt={country.name.common} style={{ width: '100px' }} />
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Subregion:</strong> {country.subregion}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Capital:</strong> {country.capital && country.capital.join(', ')}</p>
        <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      </div>
    )
}

export default CountryDetails
