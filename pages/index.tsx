import Link from "next/link";
import { MainLayouts } from "../Components/layouts/MainLayouts";

export default function Home() {
  return (
    <MainLayouts>
      <h1 className={'title'}>
        <Link href="/about">Go to About</Link>
      </h1>
      <p className={'description'}>
        Get started by editing{" "}
        <code>pages/home.jsx</code>
      </p>
    </MainLayouts>
  );
}
