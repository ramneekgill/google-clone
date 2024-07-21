import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import AppsIcon from '@mui/icons-material/Apps';


function Home() {
    return (
        <div className="home">
             
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'></div>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                   
            </div>
            <div className='home__body'></div>
        </div>
        
    )
}
    
export default Home