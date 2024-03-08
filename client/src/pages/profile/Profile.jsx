import "./profile.scss";
import { useState } from "react";
import EditName from "../../components/editName/EditName";
import Account from "../../components/account/Account";

const Profile = () => {
  const [editName, setEditName] = useState(false);

  const handleEditName = () => {
    setEditName(!editName);
  };

  return (
    <div className="profile">
      <header className="profile_title">
        {editName ? (
          <>
            <h1>Welcome back</h1>
            <EditName handleEditName={handleEditName} />
          </>
        ) : (
          <>
            <h1>
              Welcome back <br /> Tony Jarvis!
            </h1>
            <button type="button" onClick={() => setEditName(!editName)}>
              Edit Name
            </button>
          </>
        )}
      </header>
      <section>
        <Account />
      </section>
    </div>
  );
};

export default Profile;
