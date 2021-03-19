import "../styles/globals.css";

import Navbar from "../components/Navbar";

import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

// https://console.firebase.google.com/u/0/project/marcosnextfireblog/settings/general/web:MDcxMTI4ZmMtZjczYS00YWM0LThmNDItZTI2NDlhZDlmNTY5

export default MyApp;
