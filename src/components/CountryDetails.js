import React from 'react'
import './Country.css'
const CountryDetails = ({ country, onClose }) => {
    console.log(country);
    return (
        <>
            <button onClick={onClose}>Close</button>

            <div className="container">
            <img src={country.flags.png} alt={country.name.common} style={{width:'30%',height: '30%',alignSelf:'center'}}/>

                <section className='content'>
                <h2 style={{ color: 'black' }}>{country.name.common}</h2>
                    <p><strong>Native Name:</strong> {country.name.official}</p>
                    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>

                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Subregion:</strong> {country.subregion}</p>
                    
                    <p><strong>Capital:</strong> {country.capital && country.capital.join(', ')}</p>
                    <p><strong>Currencies:</strong> {country.currencies.symbol}</p>
                  
                    <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
                </section>

            </div>
        </>
    )
}

export default CountryDetails
