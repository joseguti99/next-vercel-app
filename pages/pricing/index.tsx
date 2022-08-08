import { MainLayouts } from "../../Components/layouts/MainLayouts";
import Link from "next/link";

const pricing = () => {
  return (
    <>
      <h1 className={"title"}>
        <Link href="/home">Go to Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code>pages/piercing.jsx</code>
      </p>
    </>
  )
}

export default pricing;

pricing.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayouts>{page}</MainLayouts>;
};
