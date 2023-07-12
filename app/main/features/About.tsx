import Image from 'next/image';
import { AboutCard } from '../ui/AboutCard';

export const Info = () => {
  return (
    <section>
      <h3 className="text-grey pb-5">about</h3>
      <div className="image pb-gap">
        <Image
          alt=""
          sizes="80%"
          src="/placeholder.jpg"
          width={0}
          height={0}
          style={{ width: '80%', height: 'auto' }}
        />
      </div>
      <div className="w-4/5 ml-auto">
        <AboutCard
          title={`I’m interested in the interactions that happen between the physical 
            & the digital world.`}
          content={`I research, explore, prototype and develop new modalities 
            of interactions. I love translating (often) abstract and ambiguous 
            user/stakeholder needs and wishes into detailed interaction requirements 
            for tech teams. I thrive in multidisciplinary teams and enjoy working in 
            diverse projects and domains.`}
        />
        <AboutCard
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
