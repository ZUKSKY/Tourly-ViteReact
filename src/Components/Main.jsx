import HeroSection from "./Section/HeroSection"
import PopularDestinations from "./Section/PopularDestinations"
import TourSearchSection from "./Section/TourSearchSection"
import PackageSection from "./Section/PackageSection"
import GallerySection from "./Section/GallerySection"
import ContactSection from "./Section/ContactSection"

function HomePage() {
  return (
    <>
      <main>
        <article>
        <HeroSection />
        <TourSearchSection />
        <PopularDestinations />
        <PackageSection />
        <GallerySection />
        <ContactSection />
        </article>
      </main>
    </>
  )
}

export default HomePage
