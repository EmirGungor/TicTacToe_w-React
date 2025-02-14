import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsediting] = useState(false);
  const handleEditClick = () => {
    setIsediting((prev) => !prev);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  //   if (isEditining===true)
  //     setIsediting(false)
  //   else setIsediting(true)
  //bu şekilde yazmak yerine yukarıdaki toggle yapısını kullan bu mal gibi bişi zaten
  // setIsEditing(!isEditing) işe yarar ama best practise değil asenkron işlediği için sıkıntı çıkarır

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            placeholder="Your name..."
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
