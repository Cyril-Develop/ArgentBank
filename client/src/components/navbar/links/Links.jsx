import { CircleUserRound, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Links = () => {

  const connected = false;

  return (
    <>
      {!connected ? (
        <li>
          <Link to="/login">
            <CircleUserRound /> <span>Sign in</span> 
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/dashboard">
              <CircleUserRound /> <span>Martin</span>  
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <LogOut /> <span>Sign Out</span> 
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default Links;
