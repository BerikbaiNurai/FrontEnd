import { useState, useMemo, useCallback } from "react";
import { List } from "react-virtualized";
import { generateItems } from "../utils/generateItems";
import type { Item } from "../utils/generateItems"; // Исправленный импорт
import "react-virtualized/styles.css";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

export function VirtualList({ itemCount = 10000, height = 500 }: VirtualListProps) {
  const [filter, setFilter] = useState("");
  
  // Явно указываем тип
  const items: Item[] = useMemo(() => generateItems(itemCount), [itemCount]);
  
  const filteredItems: Item[] = useMemo(() => {
    console.log("Filtering virtual list...");
    if (!filter) return items;
    return items.filter((item: Item) => 
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);
  
  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);
  
  const rowRenderer = ({ index, key, style }: any) => {
    const item = filteredItems[index];
    return (
      <div key={key} style={style} className="list-item">
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
    );
  };
  
  return (
    <div className="virtual-list-container">
      <h2>Virtualized List ({filteredItems.length.toLocaleString()} items)</h2>
      
      <input
        type="text"
        placeholder="Filter by title or category..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      
      <div className="list-info">
        Showing {filteredItems.length.toLocaleString()} of {items.length.toLocaleString()} items
      </div>
      
      <List
        width={800}
        height={height}
        rowCount={filteredItems.length}
        rowHeight={120}
        rowRenderer={rowRenderer}
        overscanRowCount={10}
      />
    </div>
  );
}