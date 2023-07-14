import Image from 'next/image';

export const AboutCard = ({ title, content, imgSrc }: { title: string; content: string; imgSrc: string }) => {
  return (
    <div className="flex flex-col pb-12 gap-12">
      <Image
        className="pb-12"
        alt=""
        sizes="100%"
        src={imgSrc}
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
      />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
