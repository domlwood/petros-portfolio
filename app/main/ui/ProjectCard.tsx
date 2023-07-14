import Image from 'next/image';

export const ProjectCard = ({
  year,
  title,
  content,
  src,
}: {
  year: string;
  title: string;
  content: string;
  src: string;
}) => {
  return (
    <div className="flex">
      <h1 className="px-5">{year}</h1>
      <p className="flex-1 py-4 pl-10 pr-4">
        <span className="font-bold">{title} - </span>
        {content}
      </p>
      <Image
        alt=""
        sizes="100%"
        src="/placeholder.jpg"
        width={0}
        height={0}
        style={{ width: '330px', height: 'auto' }}
      />
    </div>
  );
};
