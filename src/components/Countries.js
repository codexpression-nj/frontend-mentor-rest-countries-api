import React, { useEffect, useState } from 'react'
import countryService from '../services/countryService';
import './Countries.css'
import CountryDetails from './CountryDetails';
import { Link } from 'react-router-dom';

function Countries() {
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    const [region, setRegion] = useState("All");
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        if (searchTerm) {
            countryService.getCountry(searchTerm)
                .then(response => {
                    setCountries(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error fetching the countries by name:', error);
                    setCountries([]); // Reset countries if search fails
                });
        } else if (region === 'All') {
            countryService.getAllCountries()
                .then(response => {
                    console.log(response);
                    setCountries(response.data);
                })
                .catch(error => {
                    console.error('Error fetching the countries:', error);
                });
        } else {
            countryService.getCountriesByRegion(region)
                .then(response => {
                    setCountries(response.data);
                })
                .catch(error => {
                    console.error('Error fetching the countries:', error);
                });
        }

    }, [region, searchTerm])


    return (
        <div className='body'>
            <div className='filter'>
            <input
                    className='search-bar'
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a country..."
                />
            <label>
                <select className='region' value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </label>
            </div>
            
          
                <div className='country-container'>
                {countries.map((country, index) => (
                    
                    <div className='card' key={index} onClick={() => setSelectedCountry(country)} >
                      <Link to={`/country/${country.cca3}`}>

                        <img className='flag' src={country.flags.png} alt={country.name.common} />
                        </Link>
                        <div>
                            <p>{country.name.common}</p>
                            <p>{country.region}</p>
                            <p>{country.capital}</p>
                            <p>{country.region}</p>
                        </div>
                    </div>
                ))}
                
            </div>
            
        </div>

    )
}

export default Countries
