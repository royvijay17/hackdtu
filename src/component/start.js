import { useNavigate } from "react-router-dom";

export default function Start({ username, setUsername }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home")
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your user name"
        onChange={(e)=>{setUsername(e.target.value);}}
      />
      <button className="startButton" onClick={handleClick}>
        Enter
      </button>
    </div>
  );
}