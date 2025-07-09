import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing); // when updating value based on previous value state, you should use the function form of setState
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = isEditing
    ? <input type="text" required value={playerName} onChange={handleNameChange}></input>
    : <span className="player-name">{playerName}</span>;
    let buttonCaption = isEditing ? "Save" : "Edit";

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}