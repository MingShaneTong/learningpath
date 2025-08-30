import {Card, CardBody, Image, Button, Slider} from "@heroui/react";

export const CrossIcon = ({
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
};



interface NotesPanelProps {
  closeFunction: () => void;
}

export default function NotesPanel({ closeFunction }: NotesPanelProps) {
  return (
    <div className="notes-panel">
      <h2>Second Column</h2>
      <button onClick={closeFunction}>
        Close
      </button>
      
      <Button
        // isIconOnly
        className="absolute top-0 right-0 size-16"
        // radius="full"
        onPress={closeFunction}
      >
        <CrossIcon />
      </Button>
    </div>
  );
}