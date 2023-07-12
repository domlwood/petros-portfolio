export const ExperienceCard = ({ dateRange, title, role }: { dateRange: string; title: string; role: string }) => {
  return (
    <div className="flex flex-col h-96 p-5	 bg-blackAccent justify-between">
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
    </div>
  );
};
