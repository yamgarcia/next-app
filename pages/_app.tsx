import "../styles/globals.css";

import Navbar from "../components/Navbar";

import { Toaster } from "react-hot-toast";

import { UserContext } from "../lib/context";

import { useUserData } from "../lib/hooks";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

// https://console.firebase.google.com/u/0/project/marcosnextfireblog/settings/general/web:MDcxMTI4ZmMtZjczYS00YWM0LThmNDItZTI2NDlhZDlmNTY5

export default MyApp;
