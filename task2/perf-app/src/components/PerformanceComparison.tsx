import { useState } from "react";
import { VirtualList } from "./VirtualList";
import { RegularList } from "./RegularList";

export function PerformanceComparison() {
  const [showVirtual, setShowVirtual] = useState(true);
  const [renderTime, setRenderTime] = useState<number | null>(null);

  const measureRender = (type: string) => {
    const start = performance.now();
    setShowVirtual(type === 'virtual');
    setTimeout(() => {
      const end = performance.now();
      setRenderTime(end - start);
    }, 100);
  };

  return (
    <div className="comparison-container">
      <h1>Performance Comparison: Virtual vs Regular List</h1>
      
      <div className="controls">
        <button 
          onClick={() => measureRender('virtual')}
          className={showVirtual ? 'active' : ''}
        >
          Virtual List
        </button>
        <button 
          onClick={() => measureRender('regular')}
          className={!showVirtual ? 'active' : ''}
        >
          Regular List
        </button>
      </div>

      {renderTime && (
        <div className="metrics">
          <h3>Render Time: {renderTime.toFixed(2)}ms</h3>
          <div className="metrics-detail">
            <p>DOM Nodes: {showVirtual ? '~20-30' : '10,000+'}</p>
            <p>Memory Usage: {showVirtual ? 'Low' : 'High'}</p>
            <p>Scroll Performance: {showVirtual ? 'Smooth' : 'Laggy'}</p>
          </div>
        </div>
      )}

      <div className="list-wrapper">
        {showVirtual ? (
          <VirtualList itemCount={10000} />
        ) : (
          <RegularList itemCount={10000} />
        )}
      </div>
    </div>
  );
}