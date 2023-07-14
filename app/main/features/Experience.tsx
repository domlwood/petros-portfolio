import { ExperienceCard } from '../ui/ExperienceCard';

export const Experience = () => {
  return (
    <section>
      <h1 className="pb-12 text-center">In the past years I’ve worked at</h1>
      <div className="h-full gap-10 m-auto resp-grid">
        <ExperienceCard dateRange="2016" title="Cube Design Mouse" role="Interaction Designer" />
        <ExperienceCard dateRange="2017 - 2018" title="Philips Signify" role="Interaction Designer" />
        <ExperienceCard dateRange="2020 - 2021" title="Freelance" role="UX & UI Designer" />
        <ExperienceCard dateRange="2021 - now" title="APS Group" role="Interaction Designer" />
      </div>
    </section>
  );
};
