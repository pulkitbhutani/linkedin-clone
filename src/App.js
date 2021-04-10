import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { login ,logout } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,
          photoUrl : userAuth.photoURL
        }))
        //then user is logged in
      } else {
        dispatch(logout());
        //user is logged out
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
