import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Quadro from './pages/Quadro';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Quadro} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    );
};