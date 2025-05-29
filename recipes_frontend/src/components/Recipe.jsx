import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "../styles/recipe.css"

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://127.0.0.1:8000/api/recipes/${id}/`)
            .then((response) => {
                setRecipe(response.data);
                setError(null)
            })
            .catch((error) => {
                console.error(error);
                setError('Ошибка при загрузке данных о рецепте')
            })
            .finally(() => {
                setLoading(false)
            });
    }, [id]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка! {error.message}</div>;

    return (
        <div className="Recipe">
            <h1>{recipe.name}</h1>
            <h2>Ингредиенты:</h2>
            <div>{recipe.ingredients}</div>
            <h2>Описание:</h2>
            <div>{recipe.description}</div>  
        </div>
    );
  }

  export default Recipe;