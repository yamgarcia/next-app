import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "jeffd23" },
        }}
      ></Link>
    </>
  );
}
