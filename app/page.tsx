import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Testimonials from "@/components/Testimonials";
import Homebuyers from "@/components/Homebuyers";
import Experts from "@/components/Experts";
import Empty from "@/components/empty";
import Email from "@/components/email";
import TopSection from "@/components/TopSection";
import GetIntoch from "@/components/GetIntoch";
import Navbar from "@/components/nav";

export const metadata = {
  title: "The Mortgage Bureau | Colorado Home Loans & Experts",
  description:
    "The Mortgage Bureau helps Colorado families with honest, personalized mortgage support. Call (303) 929-4700 to start your homeownership journey today.",
};

export default function Home() {
  return (
    <main>
      <TopSection/>
      <Hero />
      <Homebuyers />
      <Testimonials />
      <Empty />
      <Experts />
      <Empty />
      <div className="md:hidden">
        <Empty />
        <Empty />
        <Empty />
        <Empty />
      </div>
      <GetIntoch/>
      <Email />
      <Empty />
    </main>
  );
}
