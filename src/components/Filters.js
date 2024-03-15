import React,{useContext} from 'react'
import { DarkModeContext } from '../context/DarkModeContext';
export default function Filters() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={`filters-div p-3 ${darkMode ? 'bg-dark text-light' : 'text-light'}`}>

            <h3>Filters</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, non illum quam natus minima, in ea, consectetur maiores nesciunt impedit sit aut hic officiis! Consequuntur fugit, quas dolores voluptate veritatis quia excepturi ipsum quam cum, doloribus deleniti voluptatem a laborum minus porro laboriosam incidunt nulla consequatur et sequi. Qui quis porro aspernatur nihil tenetur rem vero ducimus error a incidunt nulla, voluptas voluptates nisi, at totam minima. Mollitia illum tempore voluptate impedit. Tenetur, voluptas totam expedita excepturi, consequuntur maiores rerum animi explicabo illum molestias, quos quo sapiente accusantium provident in voluptatem aliquam nostrum nesciunt at libero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur soluta a nam maxime qui nesciunt eum sapiente, iure odio! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ducimus.
        </div>
    )
}
