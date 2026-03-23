import { useState, useMemo, useCallback } from "react";
import { generateItems } from "../utils/generateItems";
import type { Item } from "../utils/generateItems";

export function RegularList({ itemCount = 10000 }: { itemCount?: number }) {
  const [filter, setFilter] = useState("");
  
  const items = useMemo(() => generateItems(itemCount), [itemCount]);
  
  const filteredItems = useMemo(() => {
    console.log("Filtering regular list...");
    if (!filter) return items;
    return items.filter(item => 
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);
  
  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);
  
  return (
    <div className="regular-list-container">
      <h2>Regular List ({filteredItems.length.toLocaleString()} items)</h2>
      
      <input
        type="text"
        placeholder="Filter by title or category..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      
      <div className="list-info">
        Showing {filteredItems.length.toLocaleString()} of {items.length.toLocaleString()} items
        <span className="warning">⚠️ May be slow!</span>
      </div>
      
      <div className="regular-list">
        {filteredItems.map((item: Item) => (
          <div key={item.id} className="list-item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              width: '100%',
              marginTop: 'auto'
            }}>
              <span className="category">{item.category}</span>
              <small>{new Date(item.timestamp).toLocaleDateString()}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}