import { Link } from "react-scroll"
import react from "react"

export default function HeroSection() {
  return (
    <section id="HeroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey I'm John</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Full Stack</span>{" "}
                    <br />
                    Developer
                </h1>
                <p className="hero--section--description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    <br /> Debitis tempore iure atque explicabo accusamus?
                </p>
            </div>
            <button className="btn btn-primary">
                              <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="Contact"
                              >Get In Touch
                              </Link></button>
        </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="Hero Section" />
        </div>

    </section>
  )
}
