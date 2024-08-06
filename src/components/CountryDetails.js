import React, { useEffect, useState } from 'react'
import './Country.css'
import countryService from '../services/countryService';
import { Link, useParams } from 'react-router-dom';
const CountryDetails = ({ onClose }) => {
    // console.log(country);
    const { cca3 } = useParams();
    const [country, setCountry] = useState();

    useEffect(() => {
        countryService.getAllCountries()
            .then(response => {
                const selectedCountry = response.data.find(country => country.cca3 === cca3);
                setCountry(selectedCountry);
                console.log(country.flags.png);
            })
            .catch(error => {
                console.error('Error fetching the country details:', error);
            });
    }, [cca3, country]);

    
    if (!country) return <p>Loading...</p>;

    return (
        <>
            <button onClick={onClose}>      <Link to="/">Back</Link>
            </button>

            <div className="container">
                <img src={country.flags.png} alt={country.name.common} style={{ width: '30%', height: '30%', alignSelf: 'center' }} />

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
