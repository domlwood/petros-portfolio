import { ExperienceCard } from '../ui/ExperienceCard';
import { mdToProps } from '../utils/MdToProps';

export const Experience = () => {
  const experiences = mdToProps('app/blogs');

  return (
    <section>
      <h1 className="pb-12 text-center">In the past years I’ve worked at</h1>
      <div className="h-full gap-10 m-auto resp-grid">
        {experiences.map((e) => (
          <ExperienceCard key={e.href} {...e} />
        ))}
      </div>
    </section>
  );
};
