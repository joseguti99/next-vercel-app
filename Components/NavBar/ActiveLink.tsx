import Link from "next/link";
import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";

const styleLink: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
  margin: '5px',
  fontSize: '20px',
}

const styleDefault: CSSProperties = {
  color: 'black',
  margin: '5px',
  fontSize: '20px'
}

interface Props { text: string; href: string }

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a style={asPath === href ? styleLink : styleDefault}>{text}</a>
    </Link>
  );
};
