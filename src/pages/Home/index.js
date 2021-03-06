import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

import api from '../../services/api';

import { UseTheme } from '../../context/Theme';

export default function Home() {

    const [houses, setHouses] = useState([]);
    const { setTheme } = UseTheme();

    useEffect(() => { 
        async function getHouses(){
            const response = await api.get('/houses');
            setHouses(response.data);
        }

        setTheme({ background: '#008ce0' });
        getHouses();
     }, [setTheme]); 

    return (
        <main>
            <div className="head">
                <img src="https://i.pinimg.com/originals/7a/37/c7/7a37c7b60c016089a64ec5effc1a2512.png" alt="Escudo de Hogwarts"/>
                <h1>Escolha Uma Casa</h1>
            </div>
            <div className="choice">

                <Link to={`/characters/${houses[0]}`} className= "grifi" onClick={() => setTheme({  background: '#97100a' })}>
                    <img src="
                    https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072953571   " alt={houses[0]}/>
                </Link>

                <Link to={`/characters/${houses[1]}`} className= "sons" onClick={() => setTheme({  background: '#0b6242' })}>
                    <img src="https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072953899" alt={houses[1]}/>
                </Link>

                <Link to={`/characters/${houses[2]}`} className= "corv" onClick={() => setTheme({  background: '#43547f' })}>
                    <img src="https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072954238" alt={houses[2]}/>
                </Link>
                <Link to={`/characters/${houses[3]}`} className= "lufa" onClick={() => setTheme({  background: '#ca9923' })}>
                    <img src="https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072954574?dimensions=600x315&crop_position=c" alt={houses[3]}/>
                </Link>
            </div>           
        </main>
    );
}