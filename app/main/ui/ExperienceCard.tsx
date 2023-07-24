import Link from 'next/link';

export const ExperienceCard = ({
  dateRange,
  title,
  role,
  href,
}: {
  dateRange: string;
  title: string;
  role: string;
  href: string;
}) => {
  return (
    <Link href={{ pathname: `/blog/experiences/${href}` }} className="experience-card">
      <h4>{dateRange}</h4>
      <div>
        <h4>{title}</h4>
        <h3 className='font-semibold'>{role}</h3>
      </div>
      <div>
        <hr />
        <button className="mt-2">
          <p>Read more →</p>
        </button>
      </div>
    </Link>
  );
};
