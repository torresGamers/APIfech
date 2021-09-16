import React, { useState } from 'react';
import PropTypes  from 'prop-types';

const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const handleddInput=(e)=>{
       setInputValue(e.target.value)
    }

    const handleddSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategory(e=>[inputValue,...e]);
            setInputValue('')
        }
    }
    return (
        
        <form onSubmit={handleddSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleddInput} />
        </form>    
    )
}

AddCategory.propTypes={
    setCategory:PropTypes.func.isRequired
}
export default AddCategory
