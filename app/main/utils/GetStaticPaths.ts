import fs from 'fs';

export const getStaticPaths = (dir: string) =>
  fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      return { id: file };
    });
