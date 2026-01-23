import React from "react";
import Card from "./Card";

function ProductList() {
    const products = [
        {id: 1, name: "Phone", price: 9.99},
        {id: 2, name: "Ipad", price: 14.99},
        {id: 3, name: "Laptop", price: 19.99},
    ];

    return (
        <>
            {products.map((product) => (
                <Card key = {product.id} title = {product.name}>
                    Price: ${product.price}
                </Card>
            ))}
        </>
    );
}

export default ProductList;