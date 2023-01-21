import React from "react";
import Card from './Card.js';
import './CardList.css'

const CardList = ({arrayOfRobots}) => {
    const robotsArray = arrayOfRobots.map((robot) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    })
    return (
        <div className="tc main-element">
            {robotsArray}
        </div>
    )
}

export default CardList;