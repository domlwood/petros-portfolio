import { ProjectCard } from '../ui/ProjectCard';

export const Projects = () => {
  return (
    <section className="flex flex-col gap-gap pb-10">
      <div className="resp-width">
        <h1>Unfortunately, great designs cant always be made public.</h1>
        <p className="pt-12">
        If you would like to see my “secret” portfolio with some real life examples of my designs drop me an email at:
          <br />
          <br /> <span className='font-semibold'>petros.chantz [at] gmail [dot] com</span>
        </p>

      </div>
      <div className="resp-width md:ml-auto">
        <h1 className='md:text-right'>Meanwhile...</h1>
        <p className="pt-12 md:text-right">
        You can always browse the projects I’ve done in the past which helped me refine my design skills, challenged me to think about the project as a system and solidified my design language.  
        </p>
      </div>
      <ProjectCard
        year="2022"
        title="testTitle"
        content="lorem ipsum blahsads daksdj asdhisadjhk lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads"
        src="test"
      />
      <ProjectCard
        year="2022"
        title="testTitle"
        content="lorem ipsum blahsads daksdj asdhisadjhk lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads"
        src="test"
      />
      <ProjectCard
        year="2022"
        title="testTitle"
        content="lorem ipsum blahsads daksdj asdhisadjhk lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads lorem ipsum blahsads"
        src="test"
      />
    </section>
  );
};
