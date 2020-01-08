import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import Select from 'react-select';

function LocationSelect(props)  {

    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios
            .get("https://build-week-africanmarketplace.herokuapp.com/api/location")
            .then(res => {
                console.log(res)
                setLocation(res.data)
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
            });
    },[])

    return (
        <div style={{ margin: "1rem 0" }}>
            <label htmlFor="locations">Market</label>
            <Select
                id="l_id"
                getOptionLabel={location =>
                    `${location.country}`
                  }
                getOptionValue={location => 
                    `${location.id}`
                }
                value={location.value}
                // isSearchable={this.location.isSearchable}
                options={location}
                // searchable ={location.country.searchable}
            />
            {!!props.error && props.touched && (
                <div style={{ color: "red", marginTop: ".5rem", float: "left"}}>
                    {props.error}
                </div>
            )}
        </div>
    )
}

export default LocationSelect;