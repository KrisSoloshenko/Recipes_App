import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios
            .get("http://127.0.0.1:8000/api/recipes/")
            .then((response) => {
                setRecipes(response.data);
                setError(null)
            })
            .catch((error) => {
                console.error(error);
                setError('Ошибка при загрузке данных о рецептах')
            })
            .finally(() => {
                setLoading(false)
            });
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
  
    return (
        <div>
          <h1>Книга рецептов</h1>
          <ListGroup>
            {recipes.map(recipe => (
              <ListGroup.Item key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
    );
}

export default Recipes