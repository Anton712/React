import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing); // when updating value based on previous value state, you should use the function form of setState
    setIsEditing((editing) => !editing);
  }

  let playerName = isEditing
    ? <input type="text" required value={name}></input>
    : <span className="player-name">{name}</span>;
    let buttonCaption = isEditing ? "Save" : "Edit";

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}