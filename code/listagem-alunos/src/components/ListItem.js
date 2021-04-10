import React from "react";
import Button from "./Button";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    padding: "5px 0",
    borderBottom: "1px solid #eee"
  },
  seq: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    lineHeight: "40px",
    textAlign: "center"
  },
  text: {
    margin: "0 5px",
    width: 100,
    color: "#000"
  }
};

function ListItem({
  // sequência do item
  seq,
  // texto do item
  text,
  // propaga o evento de remover o item
  onRemoveItem
}) {
  // manipula o toque no botão de remover
  function handleClick() {
    if (onRemoveItem) onRemoveItem(seq);
  }

  return (
    <div style={styles.container}>
      <div style={styles.seq}>{seq}</div>
      <div style={styles.text}>{text}</div>
      <div>
        <Button title={"Remove"} onClick={handleClick} />
      </div>
    </div>
  );
}

export default ListItem;
