import NavBar from "../../Components/NavBar/NavBar";
import Link from "next/link";
import { MainLayouts } from "../../Components/layouts/MainLayouts";

export default function contact() {
  return (
    <>
      <h1 className={"title"}>
        <Link href="/pricing">Go to Pricing</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code>pages/contact.jsx</code>
      </p>
    </>
  );
}

contact.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayouts>{page}</MainLayouts>;
};
