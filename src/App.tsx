import React from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <div className={'topnav'}>
                <NavLink to={'/'}>main</NavLink>
                <NavLink to={'/login'}>login</NavLink>
                <NavLink to={'/profile'}>profile</NavLink>
            </div>

            <div>
                <Routes>
                    <Route path={'/'} element={<div>main</div>}/>
                    <Route path={'/login'} element={<div>login</div>}/>
                    <Route path={'/profile'} element={<div>profile</div>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;