import React from "react";
import ItemList from "./ItemList";

function CombinedComponent() {
    const items = [1, 2, 3];

    return (
        <>
            <h2>Fruit List</h2>
            <ItemList />
            <p>Total: {items.length} items</p>
        </>
    );
}

export default CombinedComponent;