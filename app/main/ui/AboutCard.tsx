export const AboutCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col pb-12 gap-4">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};
