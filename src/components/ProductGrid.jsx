import React, { useState, useEffect } from "react"
import '../styles/Product.css';
import Filters from "./Filter";

// Component for displaying a grid of products with filtering options
function ProductGrid() {
    // State for storing fetched product data
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ // State for storing filter values
        price: "",
        category: "",
        collection: "",
        size: "",
    });

    const [loading, setLoading] = useState(false); // State for tracking loading status
    const [error, setError] = useState(null); // State for tracking errors

    // Fetch products from the server when filters change
    useEffect(() => {
        console.log("Filters:", filters); // Log the current filter values (debugging)
        setLoading(true); // Set loading state to true
        setError(null); // Clear any previous errors

        const query = new URLSearchParams(filters).toString(); // Convert filters to query string
        fetch(`/api/products?${query}`) // Fetch products with filters
            .then((response) => response.json()) // Parse JSON response
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