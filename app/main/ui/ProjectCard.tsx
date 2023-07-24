import Image from 'next/image';

export const ProjectCard = ({ title, subtitle, href }: { title: string; subtitle: string; href: string }) => {
  return (
    <div className="flex flex-col">
      <Image
        alt=""
        sizes="100%"
        src={`/projects/${href}.jpg`}
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
      />
      <h2 className="pt-12 font-medium">{title}</h2>
      <p className="py-8">{subtitle}</p>
        <a href={`/blog/projects/${href}`} className="ml-auto text-orange">Read more →</a>
    </div>
  );
};
