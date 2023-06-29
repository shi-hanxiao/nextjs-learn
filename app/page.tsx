import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={"text-4xl text-orange-600"}> hello home page</h1>
      <br />
      <Link href={"/dashboard"}>dashboard</Link>
    </>
  )
}
