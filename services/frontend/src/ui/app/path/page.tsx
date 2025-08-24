"use client"
import { useCallback, useEffect, useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";

export default function Path() {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [showSecondColumn, setShowSecondColumn] = useState(false);
  const [mainColumnWidth, setMainColumnWidth] = useState(8);

  // Update window size on resize
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    handleResize(); // Initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle layout change from dragging
  const onLayoutChange = useCallback((layout: Layout[]) => {
    if (layout.length < 2) return;
    
    const mainColumn = layout.find(item => item.i === "main-column");
    if (mainColumn) {
      setMainColumnWidth(mainColumn.w);
    }
  }, []);

  // Calculate layout based on window size and column visibility
  const getLayout = useCallback((): Layout[] => {
    const mainColumn = {
      i: "main-column",
      x: 0,
      y: 0,
      w: showSecondColumn ? mainColumnWidth : 12,
      h: 12,
      minW: 2, // Minimum width
      maxW: 10, // Maximum width
    };

    const secondColumn = {
      i: "second-column",
      x: mainColumnWidth,
      y: 0,
      w: 12 - mainColumnWidth,
      h: 12,
      isResizable: false // Disable resizing for second column
    };

    return showSecondColumn ? [mainColumn, secondColumn] : [mainColumn];
  }, [showSecondColumn, mainColumnWidth]);

  return (
    <main style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <GridLayout
        layout={getLayout()}
        cols={12}
        rowHeight={windowSize.height / 12}
        width={windowSize.width}
        margin={[0, 0]}
        containerPadding={[0, 0]}
        onLayoutChange={onLayoutChange}
        isDraggable={false}
        isResizable={true}
        resizeHandles={["e"]}
        onResizeStart={(layout, oldItem, newItem, placeholder, e, element) => {
          // Only allow resizing the main column
          return oldItem.i === "main-column";
        }}
      >
        <div key="main-column" style={{ 
          background: "#f0f0f0",
          width: "100%",
          height: "100%",
          padding: "20px",
          position: "relative"
        }}>
          <h2>Main Content</h2>
          <button onClick={() => setShowSecondColumn(!showSecondColumn)}>
            {showSecondColumn ? "Hide" : "Show"} Second Column
          </button>
          {showSecondColumn && (
            <div style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "4px",
              background: "#ccc",
              cursor: "col-resize"
            }} />
          )}
        </div>
        {showSecondColumn && (
          <div key="second-column" style={{
            background: "#e0e0e0",
            width: "100%",
            height: "100%",
            padding: "20px"
          }}>
            <h2>Second Column</h2>
            <button onClick={() => setShowSecondColumn(false)}>
              Close
            </button>
          </div>
        )}
      </GridLayout>
    </main>
  );
}
