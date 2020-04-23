import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(newNotes) {
    setItems(prevItems => {
      return [...prevItems, newNotes];
    });
  }

  function deleteNotes(id) {
    setItems(prevItems => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((finalNotes, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={finalNotes.title}
            content={finalNotes.content}
            onDel={deleteNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
