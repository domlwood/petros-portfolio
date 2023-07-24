import { ProjectCard } from '../ui/ProjectCard';
import { mdToProjectProps } from '../utils/MdToProps';

export const Projects = () => {
  const projects = mdToProjectProps('app/blog/projects');

  return (
    <section className="flex flex-col pb-10">
      <div id="restricted-work" className="w-1/2 pt-12 resp-width md:ml-auto">
        <h1>Unfortunately, great designs cant always be made public.</h1>
        <p className='pt-12'>I know it’s a bummer.</p>
        <p className="py-12">
        If you send me an email at the following address I can send you a “secret” portfolio with some real life examples of designs I’ve made for clients.          <br />
          <br /> <h2 className="font-semibold">petros.chantz [at] gmail [dot] com</h2>
        </p>
      </div>
      <div id="public-work" className="w-1/2 py-[100px] resp-width">
        <h1 className="">
          Meanwhile...
          <br />
          ...you can also have a look at my other projects.{' '}
        </h1>
      </div>
      <div className="gap-12 resp-grid-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
