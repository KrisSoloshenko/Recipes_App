import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';

function Category() {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://127.0.0.1:8000/api/categories/${id}/`)
            .then((response) => {
                setCategory(response.data);
                setError(null)
            })
            .catch((error) => {
                console.error(error);
                setError('Ошибка при загрузке данных о категрии')
            })
            .finally(() => {
                setLoading(false)
            });
        
        axios
            .get(`http://localhost:8000/api/categories/${id}/recipes/`)
            .then((response) => {
                setRecipes(response.data);
                setError(null)
            })
            .catch((error) => {
                console.log(error);
                setError('Ошибка при загрузке данных о рецептах')
            })
            .finally(() => {
                setLoading(false)
            });
    }, [id]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div>
            <h1>{category.name}</h1>
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

  export default Category;
