import "./about.css"


const About = () => {

  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">Sobre o First-Step</h2>
        <p className="about-title-sec">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          odit quos impedit sequi neque, quo a
        </p>
        <div className="card">
          <div>
            <img
              src="https://placehold.co/600x400"
              alt="Job"
              className="job-image"
            />
          </div>
          <div>
            <h4 className="job-title">Vaga 01</h4>
            <p className="job-subheading">Subheading</p>
            <p className="job-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              placeat minus neque voluptatum, magni itaque quaerat inventore
              recusandae voluptatem nobis sunt perspiciatis iste in autem quos
              eveniet ducimus sit nesciunt!
            </p>
          </div>
          <div className="job-more">
            <span className="material-symbols-outlined">
              arrow_circle_right
            </span>
            <p className="job-subheading">Mais vagas</p>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="cursos">
          <h4 className="about-title">Alguns cursos</h4>
          <p className="job-subheading">Subheading</p>
        </div>
        <div className="card">
          <div>
            <div className="card-header">
              <span class="material-symbols-outlined icon-sec">book_5</span>
              <h4 className="card-title">Curso 01</h4>
            </div>
            <p className="card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a
              fugiat aliquid repellendus voluptate incidunt quo exercitationem
              asperiores illum dicta ipsum labore veniam saepe, magni porro
              deserunt laboriosam commodi. Dolorum.
            </p>
          </div>
          <div>
            <div className="card-header">
              <span class="material-symbols-outlined icon-sec">book_5</span>
              <h4 className="card-title">Curso 01</h4>
            </div>
            <p className="card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a
              fugiat aliquid repellendus voluptate incidunt quo exercitationem
              asperiores illum dicta ipsum labore veniam saepe, magni porro
              deserunt laboriosam commodi. Dolorum.
            </p>
          </div>
          <div className="job-more">
            <span className="material-symbols-outlined">
              arrow_circle_right
            </span>
            <p className="job-subheading">Mais vagas</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About

