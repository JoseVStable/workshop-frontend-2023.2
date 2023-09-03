import React from "react";
import { useState } from "react";


const Searchbar = () =>{
    const[search, setSearch] = useState("Darth")
    
    const onChangeHandler = (e) =>{
        console.log("personagem", e.target.value)
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () => {
        console.log("personagem",search)
    }
    return(

        <div className="pesquisar-container">
            <div className="pesquisar">
                <input placeholder="Buscar personagem" onChange={onChangeHandler}/>
            </div>
            <div className="botao">
                <button onClick= {onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar