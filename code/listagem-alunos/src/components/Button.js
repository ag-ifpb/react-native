import React from "react";

const styles = {
  button: {
    backgroundColor: "blue",
    border: 0,
    padding: 8
  },
  text: {
    color: "#fff"
  }
};

function Button({
  // título do botão
  title,
  // propaga o evento de acionamento do botão
  onClick
}) {
  //
  function handleClick() {
    if (onClick) onClick();
  }
  //
  return (
    <button style={styles.button} onClick={handleClick}>
      <span style={styles.text}>{title}</span>
    </button>
  );
}

export default Button;
