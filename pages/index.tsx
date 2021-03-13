import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Loader from "../components/Loader.js";

export default function Home() {
  return (
    <>
      <Loader show />
    </>
  );
}
