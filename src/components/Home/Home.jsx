import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = ({data}) => {
    return (
            <div className='home-container'>
                <div className='home-content'>
                    <h1>Tests</h1>
                    <div className='test-links'>
                        {data.map(test => {
                            return <Link key={test.idVideo} to={`/${test.cliente}`}>{test.cliente}</Link>
                        })}
                    </div>
                </div>
            </div>
    )
}

export default Home