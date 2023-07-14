import { AboutCard } from '../ui/AboutCard';

export const About = () => {
  return (
    <section id="about">
      <div className="pb-12 resp-width">
        <AboutCard
          imgSrc="/placeholder.jpg"
          title={`I’m interested in the interactions that happen between the physical 
            & the digital world.`}
          content={`I research, explore, prototype and develop new modalities 
            of interactions. I love translating (often) abstract and ambiguous 
            user/stakeholder needs and wishes into detailed interaction requirements 
            for tech teams. I thrive in multidisciplinary teams and enjoy working in 
            diverse projects and domains.`}
        />
      </div>
      <div className="pt-12 resp-width md:ml-auto md:text-right">
        <AboutCard
          imgSrc="/placeholder.jpg"
          title={`"Show me, don't tell me" mindset.`}
          content={`Experiences are always felt, never described. Designing meaningful 
          interactions is an act of doing, not an act of “gut feelings”. In my work, 
          experience and interaction take central role in informing my design process 
          and the design decisions I make. I don't design things for myself, thus testing 
          soon and often with real people is my modus operandi.`}
        />
      </div>
    </section>
  );
};
