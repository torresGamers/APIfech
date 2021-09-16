import React, { useState } from 'react'
import AddCategory from './componentes.js/AddCategory';
import GifGrid from './componentes.js/GifGrid';

const GifExpertApp = () => {
    // const category =;
    const [category, setCategory] = useState(['One Punch']);
      
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategory={setCategory}/>   
        <hr/>
        <ol>
            {
                category.map(category=>
                    <GifGrid key={category} category={category}/>
                    // return <li key={category}>{category}</li>
                )
            }
        </ol>
            
        </>
    )
}          

export default GifExpertApp
