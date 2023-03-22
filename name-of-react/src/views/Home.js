import { useEffect, useState, useContext } from "react";
import Car from '../component/Car'
import { DataContext } from '../contexts/DataProvider'

export default function Home(){
    const {cars} = useContext(DataContext)


    return (
        <div>
            <h1>Home</h1>
            {cars.map((car) => <Car car={car} key={car.id}/>)}
        </div>
    )
}
