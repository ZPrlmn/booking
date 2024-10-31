import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Booking | Affiliate Messages",
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