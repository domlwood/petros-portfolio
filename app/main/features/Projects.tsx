import { ProjectCard } from '../ui/ProjectCard';

export const Projects = () => {
  return (
    <section className="flex flex-col gap-10 pb-10">
      <div className="w-4/5 pb-gap">
        <h3>Meanwhile...</h3>
        <h4>
          you can browse the following curated selection of projects I’ve done focused on strengthening my design skills
          and sharpening my vision. some of the projects I’ve worked on
        </h4>
      </div>
      <ProjectCard year="2022" title='testTitle' content="lorem ipsum blahsads daksdj asdhisadjhk lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads" src="test" />
      <ProjectCard year="2022" title='testTitle' content="lorem ipsum blahsads daksdj asdhisadjhk lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads" src="test" />
      <ProjectCard year="2022" title='testTitle' content="lorem ipsum blahsads daksdj asdhisadjhk lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads" src="test" />
    </section>
  );
};
