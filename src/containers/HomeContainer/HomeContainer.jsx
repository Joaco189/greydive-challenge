import React from 'react'
import Home from '../../components/Home/Home'
import data from "../../data/db.json"

const HomeContainer = () => {
    return (
        <Home data={data}/>
    )
}

export default HomeContainer