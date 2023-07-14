import Link from 'next/link';
import { stringToKebab } from '../utils/stringToKebab';

export const ExperienceCard = ({ dateRange, title, role }: { dateRange: string; title: string; role: string }) => {
  return (
    <Link href={`/${stringToKebab(title)}`} className="experience-card">
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
