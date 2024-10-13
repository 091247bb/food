import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Herder'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

    const [category,setCategory] = useState("All");

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay  category={category}/> 
        </div>
    )
}

