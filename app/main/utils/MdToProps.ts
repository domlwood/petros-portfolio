import matter from 'gray-matter';
import fs from 'fs';

export const mdToProps = (dir: string) => {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const fileContents = fs.readFileSync(`${dir}/${file}`, 'utf-8');
      const metaData = matter(fileContents);
      return {
        dateRange: metaData.data.dateRange,
        title: metaData.data.title,
        role: metaData.data.role,
        href: file.replace('.md', ''),
        order: metaData.data.order,
      };
    })
    .sort((a, b) => a.order - b.order)
    .map((file) => {
      delete file.order;
      return file;
    });
};
