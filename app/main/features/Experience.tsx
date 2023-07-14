import { ExperienceCard } from '../ui/ExperienceCard';
import { mdToProps } from '../utils/MdToProps';

export const WorkExperience = () => {
  const experiences = mdToProps('app/blog');

  return (
    <section id="experience">
      <h1 className="pb-12 text-center">In the past years I’ve worked at</h1>
      <div className="h-full gap-10 m-auto resp-grid">
        {experiences.map((e) => (
          <ExperienceCard key={e.href} {...e} />
        ))}
      </div>
    </section>
  );
};
