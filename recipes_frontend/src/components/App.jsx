import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/app.css"
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Recipe from "./Recipe";
import Recipes from "./Recipes";
import Navigation from "./Navigation";


function App() {
    return(
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/categories/:id" element={<Category />}/>
                <Route path="/recipes/:id" element={<Recipe />}/>
                <Route path="/recipes" element={<Recipes />}/>
            </Routes>
        </div>
    );
}

export default App
