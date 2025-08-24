"use client"
import GridLayout from "react-grid-layout";

export default function Path() {
  const layout = [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
    { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
    { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
    { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
  ];

  return (
    <main>
        <GridLayout layout={layout} cols={5} rowHeight={300} width={1000}>
          <div key="blue-eyes-dragon">

          </div>
          <div key="dark-magician">

          </div>
          <div key="kuriboh">

          </div>
          <div key="spell-caster">

          </div>
          <div key="summoned-skull">

          </div>
        </GridLayout>
    </main>
  );
}
