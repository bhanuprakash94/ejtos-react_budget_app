import React,{useContext,useState} from 'react';
import  {AppContext} from '../context/AppContext';
import './ChangeCurrency.css';

const ChangeCurrency = () =>{
    const { dispatch,currency} = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    let CurrencyName='';
    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
        CurrencyFind(value);
        setIsOpen(!isOpen);
    };
     
    const currencies=[
        {'name': '$ Dollar','value':'$'},
        {'name': '£ Pound','value':'£'},
        {'name': '€ Euro','value':'€'},
        {'name': '₹ Ruppee','value':'₹'},
   ];


   const toggleDropdown = () => {
    setIsOpen(!isOpen);
   };

   CurrencyFind(currency);
   function CurrencyFind(currency1){
    const currencyData = currencies.find(({ name,value }) => value === currency1);

    CurrencyName = 'Currency (' +currencyData.name+')';
   }
  
    return (
        <div onClick={toggleDropdown} className="custom-dropdown changeCurrency form-select form-select-sm alert alert-success">
         <label  style={{
             fontSize: '16px',
             fontWeight: 600}}>{CurrencyName}</label>
            {isOpen && (
                <ul className='currency_ul'>
                {currencies.map((option, index) => (
                    <li key={option.value} onClick={() => setCurrency(option.value)}>
                    {option.name}
                    </li>
                ))}
                </ul>
            )}
    </div>
    );
};
 
export default ChangeCurrency;
