import React from 'react';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <div className={'topnav'}>
                <NavLink to={'/'}>main</NavLink>
                <NavLink to={'/login'}>login</NavLink>
                <NavLink to={'/profile'}>profile</NavLink>
                <NavLink to={'/profile/settings'}>settings</NavLink>
                <NavLink to={'/login/password'}>password</NavLink>
            </div>

            <div className={'content'}>
                <Routes>
                    <Route path={'/'} element={<div>main</div>}/>
                    <Route path={'/*'} element={<div>404</div>}/>
                    // Вложенность первый способ
                    <Route path={'/profile/*'} element={(
                        <div>
                            profile

                            <Routes>
                                <Route path={'/settings'} element={<div>settings</div>}/>
                            </Routes>
                        </div>)}
                    />
                    // Вложенность второй способ
                    <Route path={'/login/*'} element={(
                        <div>
                            login

                            <Outlet/>
                        </div>
                    )}>
                        <Route path={'password'} element={<div>password</div>}/>
                        <Route path={'*'} element={<div>check id</div>}/>
                        <Route path={':id'} element={<div>id</div>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
};

export default App;