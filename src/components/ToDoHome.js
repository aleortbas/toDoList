import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Card = ({title}) => {
    return(
        <div className="inside-list" style={{height:"100%", overflow:"auto"}}>
            <p>{title}</p>
            <div style={{backgroundColor:"white"}}>
                <input type="checkbox" id="toDoListItems"></input> 
                <p id="toDoListItems">Titulo de la tarea</p>
                <Button id="toDoListItems">Details</Button>
                <p id="toDoListItems">date</p>
                <FontAwesomeIcon id="toDoListItems" icon={faPenToSquare}/>
            </div>
        </div>
    )
}

export default Card;