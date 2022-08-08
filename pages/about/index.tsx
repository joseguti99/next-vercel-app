import Link from "next/link";
import { MainLayouts } from "../../Components/layouts/MainLayouts";
import DarkLayout from "../../Components/layouts/DarkLayout";
import { FC } from "react";
 
export default function About() {
  return (
    <>
      <h1 className={"title"}>
        <Link href="/contact">Go to Contact</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code>pages/about.jsx</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout (page: JSX.Element){
  return (
    <MainLayouts>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayouts>
  );
};
