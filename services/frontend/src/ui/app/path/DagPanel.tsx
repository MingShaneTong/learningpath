import React, { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import { DagData } from "@learningpath/client-gateway";

interface DagPanelProps {
  openFunction: () => void;
  dag: DagData;
}

export default function DagPanel({ openFunction, dag }: DagPanelProps) {
  const cyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cyRef.current) return;

    const cy = cytoscape({
      container: cyRef.current,
      elements: dag.elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#0074D9',
            'label': 'data(label)',
            'color': '#fff',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': 16
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        }
      ],
      layout: {
        name: 'breadthfirst',
        directed: true,
        padding: 10,
        direction: 'rightward',
        spacingFactor: 1.5
      }
    });
    return () => cy.destroy();
  }, [dag]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div ref={cyRef} style={{ width: "100%", height: "100%" }} />
      <button onClick={openFunction} style={{ position: "absolute", top: 10, right: 10 }}>
        Toggle Second Column
      </button>
    </div>
  );
}