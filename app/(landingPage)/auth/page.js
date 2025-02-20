import AuthForm from "@/components/auth/authForm";
import classes from "./page.module.scss";
import Image from "next/image";
import moneyBg from "@/assets/money_1.jpg";

export default async function authPage({ searchParams }) {
  const { mode } = await searchParams;

  return (
    <main className={[classes["auth"]]}>
      <section className={[classes["auth-imgSection"]]}>
        <Image
          className={classes["auth-img"]}
          src={moneyBg}
          alt="auth background image"
        />
      </section>
      <section className={[classes["auth-formSection"]]}>
        <AuthForm classes={classes} mode={mode} />
      </section>
    </main>
  );
}
