import React,{useContext} from 'react';
import  {AppContext} from '../context/AppContext';

const Budget = () =>{
    const { dispatch,budget,expenses,currency} = useContext(AppContext);

    
    const setBudget = (value) => {
        debugger;

        if(value > 20000) {
            alert("The value cannot exceed remaining funds  £ 20000");
            return;
        }

        const totalExpenses = expenses.reduce((total,item)=>{
            return (total = total +item.cost);
    },0);
        

    if(value < totalExpenses) {
        alert("You cannot reduce the budget value less than the spending");
        return;
    }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
   
};
     
    return (
        <div className='alert alert-secondary'>
            Budget : {currency} <input
                        required='required'
                        type='number'
                        id='budget'
                        step="10"
                        value={budget}
                        style={{ marginLeft: '0.2rem' , width: '150px'}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
        </div>
    );
};
 
export default Budget;
