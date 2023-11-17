import { GoogleLogout } from "react-google-login";

const clientID =
  "985974388232-na3n5t8lhtf13fl0r3vuugsg3umofb2s.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Log out successfull!");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientID={clientID}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
