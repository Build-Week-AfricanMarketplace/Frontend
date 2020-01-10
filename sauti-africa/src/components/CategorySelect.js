import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import { Field } from 'formik';
import { inputStyle } from '../Styles/CategorySelectStyles';

function CategorySelect(props)  {


    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios
            .get("https://build-week-africanmarketplace.herokuapp.com/api/category")
            .then(res => {
                console.log(res)
                setCategory(res.data)
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
            });
    },[])

    return (
        <div style={{ margin: "1rem 0" }}>
            <Field as="select"
            name="c_id"
            style={inputStyle}
            onClick={e => e.target.value}
            searchable={true}
            >
            {category.length > 0 ? category.map((object, index) => {
                return <option value={object.category} key={object.id}
            >{object.category}</option>
            }): null}
            {!!props.error && props.touched && (
                <div style={{ color: "red", marginTop: ".5rem", float: "left"}}>
                    {props.error}
                </div>
            )}
            </Field>
        </div>
    )
}

export default CategorySelect;