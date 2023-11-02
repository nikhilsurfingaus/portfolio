import { data } from "../portfolio/PortfolioData";
import Project from "../portfolio/Project";

const Portfolio = () => {

  return (
    <div>
      <section className="portfolio">
        <div className="row">
          {data.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              technologies={project.technologies}
              image={project.image}
              color={project.bgcolor}
              github={project.github}
              deployed={project.deployed}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Portfolio;
