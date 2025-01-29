import React from "react";

function Filters({ filters, handleFilterChange}) {
    return (
        <div className="filterContainer">

        <div className="filterWrapper">
        <div className="filterGroup">
            <select 
                name="price" 
                value={filters.price} 
                onChange={handleFilterChange}
                className="filterSelect"
            >
                <option value="">Filter by Prices</option>
                <option value="0-20">$0 - $20</option>
                <option value="20-40">$20 - $40</option>
                <option value="40-60">$40 - $60</option>
                <option value="60+">$60+</option>
            </select>
            <select name="category" value={filters.category} onChange={handleFilterChange} placeholder="Filter by category" className="filterSelect">
                <option value="">Filter by Type</option>
                <option value="flowers">Flowers</option>
                <option value="plants">Plants</option>
            </select>
            <select name="collection" value={filters.collection} onChange={handleFilterChange} placeholder="Filter by collection" className="filterSelect">
                <option value="">Filter by Collection</option>
                <option value="1">Divine greens</option>
                <option value="2">Desert delight</option>
                <option value="3">Angel's paradise</option>
            </select>
            <select name="size" value={filters.size} onChange={handleFilterChange} placeholder="Filter by size" className="filterSelect">
                <option value="">Filter by Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
        </div>
        </div>
    )
}

export default Filters;