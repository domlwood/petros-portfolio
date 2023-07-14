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
    <Link href={`/blogs/${href}`} className="experience-card">
      <h4>{dateRange}</h4>
      <div>
        <h5>{title}</h5>
        <p>{role}</p>
      </div>
      <div>
        <hr />
        <button className="mt-2">
          <h5>Read more →</h5>
        </button>
      </div>
    </Link>
  );
};
