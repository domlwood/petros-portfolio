import fs from 'fs';
import matter from 'gray-matter';

//generic function to collect the metadata from the markdown file
const getMdMetaData = (dir: string) => {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const fileContents = fs.readFileSync(`${dir}/${file}`, 'utf-8');
      const meta = matter(fileContents);
      return { meta, file };
    })
    .sort((a, b) => a.meta.data.order - b.meta.data.order);
};

//mapping of the data
export const mdToExperienceProps = (dir: string) => {
  return getMdMetaData(dir).map(({ meta, file }) => {
    return {
      dateRange: meta.data.dateRange,
      title: meta.data.title,
      role: meta.data.role,
      href: file.replace('.md', ''),
    };
  });
};

export const mdToProjectProps = (dir: string) => {
  return getMdMetaData(dir).map(({ meta, file }) => {
    return {
      title: meta.data.title,
      subtitle: meta.data.subtitle,
      href: file.replace('.md', ''),
    };
  });
};

export const mdToBlogProps = (dir: string) => {
  return getMdMetaData(dir).map(({ meta, file }) => {
    return {
      title: meta.data.title,
      content: meta.data.subtitle,
      href: file.replace('.md', ''),
    };
  });
};
