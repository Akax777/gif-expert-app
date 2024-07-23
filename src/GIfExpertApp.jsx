import { useState } from "react";
import { AddCategory , GifGrid } from './components';

const GIfExpertApp = () => {

    const [categories, setCategories] = useState(['The Choosen'])

    const onAddCategory =(e)=>{
      if(categories.includes(e))return;
      setCategories([e,...categories])
    }


  return (
  <>
    <h1>GIfExpertApp</h1>
    <AddCategory handleNewCategory={onAddCategory} />

      {
      categories.map(categories=>
        <GifGrid 
          key={categories}
          categories={categories} 
        />
      )
      }
  </>
  )
}

export default GIfExpertApp