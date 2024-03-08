import "./editName.scss";

const EditName = ({ handleEditName }) => {
  return (
    <form className="editName">
      <div className="editName_group">
        <input type="text" name="firstname" />
        <button type="submit">Save</button>
      </div>
      <div className="editName_group">
        <input type="text" name="lastname" />
        <button type="button" onClick={handleEditName}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;