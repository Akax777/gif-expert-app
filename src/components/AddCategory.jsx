import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory = ({handleNewCategory}) => {
    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) =>{
        setinputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length<=1)return;
        handleNewCategory(inputValue.trim())
        setinputValue('')
    }



  return (
    <form onSubmit={handleSubmit}>

        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={handleInputChange}
        />

    </form>
  )
}

AddCategory.propTypes={
    handleNewCategory: PropTypes.func
}