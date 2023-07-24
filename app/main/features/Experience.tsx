import { ExperienceCard } from '../ui/ExperienceCard';
import { mdToExperienceProps } from '../utils/MdToProps';

export const Experience = () => {
  const experiences = mdToExperienceProps('app/blog/experiences');

  return (
    <section id="experience">
      <h1 className="pb-12 text-center">In the past years I’ve worked at</h1>
      <div className="h-full gap-10 m-auto resp-grid-4">
        {experiences.map((e) => (
          <ExperienceCard key={e.href} {...e} />
        ))}
      </div>
    </section>
  );
};
