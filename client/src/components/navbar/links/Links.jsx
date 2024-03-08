import { CircleUserRound, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Links = () => {

  const connected = false;

  return (
    <>
      {!connected ? (
        <li>
          <Link to="/login">
            <CircleUserRound /> Sign in
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/dashboard">
              <CircleUserRound /> Martin
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <LogOut /> Sign Out
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default Links;
