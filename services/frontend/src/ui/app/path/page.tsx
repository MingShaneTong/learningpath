"use client"
import { useCallback, useEffect, useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import { DagApi, Configuration, DagData } from "@learningpath/client-gateway";
import DagPanel from "./DagPanel";
import NotesPanel from "./NotesPanel";

import "react-grid-layout/css/styles.css";
import "./page.css"

enum ColumnType {
  Main = "main-column",
  Second = "second-column"
}

function Divider() {
  return (
    <div style={{
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: "4px",
      background: "#ccc"
    }} />
  );
}

function ColumnGrid({ children, layout, windowSize, onLayoutChange, resizeHandles }: {
  children: React.ReactNode;
  layout: Layout[];
  windowSize: { width: number; height: number };
  onLayoutChange: (layout: Layout[]) => void;
  resizeHandles?: ("n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw")[];
}) {
  return (
    <GridLayout
      layout={layout}
      cols={12}
      rowHeight={windowSize.height / 12}
      width={windowSize.width}
      margin={[0, 0]}
      containerPadding={[0, 0]}
      onLayoutChange={onLayoutChange}
      isDraggable={false}
      isResizable={true}
      resizeHandles={resizeHandles}
      onResizeStart={(layout, oldItem, newItem, placeholder, e, element) => {
        return oldItem.i === ColumnType.Main;
      }}
    >
      {children}
    </GridLayout>
  );
}

export default function Path() {
  const [dagResult, setDagResult] = useState<DagData>();
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>();
  const [showSecondColumn, setShowSecondColumn] = useState(false);
  const [mainColumnWidth, setMainColumnWidth] = useState(8);
  
  useEffect(() => {
    const config = new Configuration({
      basePath: "/api"
    });
    const api = new DagApi(config);
    api.dagGet({ dagid: 1 })
      .then((response : DagData) => {
        console.log(response)
        setDagResult(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Update window size on resize
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle layout change from dragging
  const onLayoutChange = useCallback((layout: Layout[]) => {
    if (layout.length < 2) return;
    
    const mainColumn = layout.find(item => item.i === ColumnType.Main);
    if (mainColumn) {
      setMainColumnWidth(mainColumn.w);
    }
  }, []);

  // Calculate layout based on window size and column visibility
  const getLayout = useCallback((): Layout[] => {
    const mainColumn = {
      i: ColumnType.Main,
      x: 0,
      y: 0,
      w: showSecondColumn ? mainColumnWidth : 12,
      h: 12,
      minW: 2, // Minimum width
      maxW: 10, // Maximum width
    };

    const secondColumn = {
      i: ColumnType.Second,
      x: mainColumnWidth,
      y: 0,
      w: 12 - mainColumnWidth,
      h: 12,
      isResizable: false // Disable resizing for second column
    };

    return showSecondColumn ? [mainColumn, secondColumn] : [mainColumn];
  }, [showSecondColumn, mainColumnWidth]);

  const columnStyle = {
    width: "100%",
    height: "100%",
    padding: "20px"
  };

  if (!windowSize) return null; 

  return (
    <main style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <ColumnGrid 
        layout={getLayout()} 
        windowSize={windowSize} 
        onLayoutChange={onLayoutChange}
        resizeHandles={showSecondColumn ? ["e"] : undefined}
      >
        <div key={ColumnType.Main} style={columnStyle}>
          {dagResult ? <DagPanel dag={dagResult} openFunction={() => setShowSecondColumn(true)} /> : <div>Loading...</div>}
          {showSecondColumn && <Divider />}
        </div>
        {showSecondColumn && (
          <div key={ColumnType.Second} style={columnStyle}>
            <NotesPanel closeFunction={() => setShowSecondColumn(false)} />
          </div>
        )}
      </ColumnGrid>
    </main>
  );
}
