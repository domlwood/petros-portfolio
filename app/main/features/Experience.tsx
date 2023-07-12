import { ExperienceCard } from '../ui/ExperienceCard';

export const Experience = () => {
  return (
    <section>
      <h4 className="text-grey pb-5">work experience</h4>
      <div className="h-full grid grid-cols-4 gap-10">
        <ExperienceCard dateRange="2016" title="Cube Design Mouse" role="Interaction Designer" />
        <ExperienceCard dateRange="2017 - 2018" title="Philips Signify" role="Interaction Designer" />
        <ExperienceCard dateRange="2020 - 2021" title="Freelance" role="UX & UI Designer" />
        <ExperienceCard dateRange="2021 - now" title="APS Group" role="Interaction Designer" />
      </div>

      <div className="w-4/5 py-gap">
        <h3>restricted work</h3>
        <h4 className="pt-2">
          Unfortunately, great designs cant always be made public. Working with companies and clients can be challenging
          as your designs cant be shared. If you would like to see some of the work I can share with others email me at:
          <br />
          <br /> petros.chantz [at] gmail [dot] com <br />
          <br />
          and you’ll receive a private portfolio.
        </h4>
      </div>
    </section>
  );
};
