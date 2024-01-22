import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState();
  const handleRequest = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://chat-app-back-6bsl.onrender.com/api/user/login",
      { emal: "test", password: "test" }
    );
    setUsers(data.data);
    setLoading(false);
  };

  return (
    <>
      <div className="container-fluid d-flex vh-100 align-items-center justify-content-center">
        <div className="d-flex flex-column">
          <h1>Request Test Button</h1>
          <button className="btn btn-lg btn-primary" onClick={handleRequest}>
            Request Data
          </button>
          {loading && <div className="lds-hourglass text-center"></div>}
          {users &&
            users.map((user) => (
              <div className="row" key={user.age}>
                {user.name}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
