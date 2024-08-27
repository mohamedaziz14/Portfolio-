export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi 👋, I'm Mohamed Aziz Jouini</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack js</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Novice Full Stack JS Developer proficient in JavaScript, React, and Node.js. Eager to collaborate on dynamic projects and expand skills within diverse teams to contribute to innovative web solutions.                             
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
