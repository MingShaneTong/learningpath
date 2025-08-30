interface DagPanelProps {
  openFunction: () => void;
}

export default function DagPanel({ openFunction }: DagPanelProps) {
  return (
    <div className="dag-panel">
        <h2>Main Content</h2>
        <button onClick={openFunction}>
          Toggle Second Column
        </button>
    </div>
  );
}