import React, { useState } from "react";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import "./styles.css";

// supondo receber estes dados do servidor
const dataFake = [
  { seq: 1, name: "Paulo Sérgio" },
  { seq: 2, name: "Ana Maria" },
  { seq: 3, name: "Claudiana Maria" },
  { seq: 4, name: "Ney Gonçalves" },
  { seq: 5, name: "Italos Rossi" },
  { seq: 6, name: "Nanda Gouveia" },
  { seq: 7, name: "José Silva" },
  { seq: 8, name: "Ana Paula" }
];

const styles = {
  titleContainer: {
    textAlign: "center"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
    padding: "5px 0"
  },
  input: {
    height: 25
  },
  scrollable: {
    height: "300px",
    overflowY: "auto",
    overflowX: "hidden"
  }
};

const App = () => {
  // estado local dos itens
  const [items, setItems] = useState(dataFake);

  function handleRemoteItem(seq) {
    const newItems = items.filter((a) => a.seq !== seq);
    setItems(newItems);
  }
  //
  return (
    <div>
      {/* title da aplicação (ou da tela) */}
      <div style={styles.titleContainer}>
        <h1>{"Listagem de alunos"}</h1>
      </div>
      {/* input */}
      <div style={styles.container}>
        <div>
          <label>{"Nome do aluno"} </label>
          <div>
            <input style={styles.input} type={"text"} />
            <Button title={"adicionar"} />
          </div>
        </div>
      </div>
      {/* list */}
      <div style={styles.scrollable}>
        {items.map((a) => (
          <ListItem seq={a.seq} text={a.name} onRemoveItem={handleRemoteItem} />
        ))}
      </div>
    </div>
  );
};

export default App;
