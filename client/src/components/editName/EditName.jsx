import "./editName.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

const EditName = ({ handleEditName }) => {

  const { user } = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState(
    user ? user.firstName : ""
  );
  const [lastname, setLastname] = useState(
    user ? user.lastName : ""
  );

  return (
    <form className="editName">
      <div className="editName_group">
        <input type="text" name="firstname" value={firstname} onChange={e => setFirstname(e.target.value)}/>
        <button type="submit">Save</button>
      </div>
      <div className="editName_group">
        <input type="text" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)}/>
        <button type="button" onClick={handleEditName}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;