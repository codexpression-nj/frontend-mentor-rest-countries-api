import React, { useEffect, useState } from 'react'
import countryService from '../services/countryService';
import './Countries.css'
function Countries() {
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    const [region, setRegion] = useState("All");
    useEffect(() => {
        if (searchTerm) {
            countryService.getCountry(searchTerm)
                .then(response => {
                    setCountries(response.data);
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
        <label>
            Search by Name:
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter country name"
            />
        </label>
        <label>
                Filter by Region:
                <select value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
         </label>
            <div className='country-container'>
                {countries.map((country, index) => (
                    <div className='card'  key={index}>
                        <img className='flag' src={country.flags.png} alt={country.name.common} />
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
