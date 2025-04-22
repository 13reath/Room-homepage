import { useState, useEffect } from "react";

const slides = [
  {
    image: {
      desktop: "/images/desktop-image-hero-1.jpg",
      mobile: "/images/mobile-image-hero-1.jpg",
    },
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: {
      desktop: "/images/desktop-image-hero-2.jpg",
      mobile: "/images/mobile-image-hero-2.jpg",
    },
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our",
  },
  {
    image: {
      desktop: "/images/desktop-image-hero-3.jpg",
      mobile: "/images/mobile-image-hero-3.jpg",
    },
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const changeImage = 500;
  const slide = slides[index];
  const [screenType, setScreenType] = useState(
    window.innerWidth > changeImage ? "desktop" : "mobile"
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenType(window.innerWidth > changeImage ? "desktop" : "mobile");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <main>
      <header className="header">
        <img className="logo" src="/images/logo.svg" alt="logo" />

        {!showMenu && (
          <img
            className="hamburger"
            src="/images/icon-hamburger.svg"
            alt="hamburger"
            onClick={() => setShowMenu(true)}
          />
        )}

        <nav className={`navbar ${showMenu ? "show" : ""}`}>
          <img
            className="hamburger close"
            src="/images/icon-close.svg"
            alt="close"
            onClick={() => setShowMenu(false)}
          />
          <div className="nav-links">
            <a href="#home">home</a>
            <a href="#shop">shop</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
          </div>
        </nav>
      </header>

      <section className="slider">
        <img
          src={process.env.PUBLIC_URL + slide.image[screenType]}
          alt="hero"
        />
        <div className="slider-icons">
          <img
            className="slider-icon"
            src="/images/icon-angle-left.svg"
            alt="left"
            onClick={prevSlide}
          />
          <img
            className="slider-icon"
            src="/images/icon-angle-right.svg"
            alt="right"
            onClick={nextSlide}
          />
        </div>
      </section>

      <section className="section-row">
        <div className="info content">
          <h2>About our furniture</h2>
          <p className="text">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
        </div>
        <div className="about about-dark">
          <img
            src={process.env.PUBLIC_URL + "/images/image-about-dark.jpg"}
            alt=""
          />
        </div>
      </section>

      {/* Второй блок: картинка слева, текст справа */}
      <section className="section-row reverse">
        <div className="info content">
          <h2>More about our design</h2>
          <p className="text">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best expresses your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className="about about-light">
          <img
            src={process.env.PUBLIC_URL + "/images/image-about-light.jpg"}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
