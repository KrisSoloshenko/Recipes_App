import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios
            .get("http://127.0.0.1:8000/api/categories/")
            .then((response) => {
                setCategories(response.data);
                setError(null)
            })
            .catch((error) => {
                console.error(error);
                setError('Ошибка при загрузке данных о категориях')
            })
            .finally(() => {
                setLoading(false)
            });
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
  
    return (
        <div>
          <h1>Рецепты по категориям</h1>
          <ListGroup>
            {categories.map(category => (
              <ListGroup.Item key={category.id}>
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
    );
}

export default Home
