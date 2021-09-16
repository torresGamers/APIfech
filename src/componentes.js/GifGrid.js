import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images,loading}= useFetchGifs(category);
    

    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Loading...</p>}
         <div className='card-grid'>           
                {
                    images.map((img)=>{
                       return <GifGridItem  key={img.id} {...img}/>
                        // return<li key={id}>{title}</li>
                    //   return  <img key={id}src={url} alt={title}/>
                    })
                }
            
            
        </div>
        </>
       
    )
}
export default GifGrid
