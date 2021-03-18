import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Loader from "../components/Loader.js";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <>
      {/* <Loader show /> */}
      <button onClick={() => toast.success("Hello toast")}> Toast </button>
    </>
  );
}
