import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Booking | Login",
  };

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav></nav>
   
        {children}
      </section>
    )
  }