import React, { useState, useEffect } from "react"
import '../styles/Product.css';
import Filters from "./Filter";


function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        price: "",
        category: "",
        collection: "",
        size: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Filters:", filters);
        setLoading(true);
        setError(null);
        
        const query = new URLSearchParams(filters).toString();
        fetch(`https://your-heroku-app.herokuapp.com/api/products?${query}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setError("Failed to load products. Please try again.");
                setLoading(false);
            });
    }, [filters]);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ 
            ...prevFilters, 
            [name]: value 
        }));
    };

    return (
        <div>
            <Filters filters={filters} handleFilterChange={handleFilterChange} />
            
            {loading && <p>Loading...</p>}

            {error && <p className="noProductsMessage">{error}</p>}

            {!loading && !error && products.length === 0 && (
                <p className="noProductsMessage">Not a match. The product your looking for is not Available.</p>
            )}

            {!loading && products.length > 0 && (
                <div className="containerGrid">
                    {products.map((product) => (
                        <section key={product.id}>
                            <a>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p className="price">${product.price}</p>
                                <p className="description">{product.description}</p>
                            </a>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductGrid;