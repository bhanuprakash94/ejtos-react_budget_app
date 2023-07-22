import React,{useContext, useState} from 'react';
import  {AppContext} from '../context/AppContext';
import './ChangeCurrency.css';

const ChangeCurrency = () =>{
    const { dispatch,currency} = useContext(AppContext);
    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };
     

    const currencies=[
        {'name': '$ Dollar','value':'$'},
        {'name': '£ Pound','value':'£'},
        {'name': '€ Euro','value':'€'},
        {'name': '₹ Ruppee','value':'₹'},
 
 
   ];
    return (
        <div className=''>

            
            <select value={currency} aria-label=".form-select-sm example" class="changeCurrency form-select form-select-sm alert alert-success" onChange={(event) => setCurrency(event.target.value)}>
            {currencies.map((currencyData) => (
                <option value={currencyData.value} >{currencyData.name}</option>
            ))}
            </select>
            
        </div>
    );
};
 
export default ChangeCurrency;