import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Sections/Marquee";
import { Collections } from "@/components/Sections/Collections";
import { ProductGrid } from "@/components/Sections/ProductGrid";
import { Lookbook } from "@/components/Sections/Lookbook";
import { WhyChooseUs } from "@/components/Sections/WhyChooseUs";
import { FeaturedProduct } from "@/components/Sections/FeaturedProduct";
import { Testimonials } from "@/components/Sections/Testimonials";
import { InstagramGallery } from "@/components/Sections/InstagramGallery";
import { Newsletter } from "@/components/Sections/Newsletter";
import { Footer } from "@/components/Sections/Footer";
import { Cursor } from "@/components/Layout/Cursor";

export default function Home() {
  return (
    <main className="relative bg-primary">
      <Cursor />
      
      <Header />

      <Hero />
      <Collections />
      <ProductGrid />
      <Lookbook />
      <WhyChooseUs />
      <FeaturedProduct />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
