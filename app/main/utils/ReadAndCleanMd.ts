import * as fs from 'fs';
import matter from 'gray-matter';

export const readAndCleanMd = (location: string) => matter(fs.readFileSync(location, 'utf-8')).content;
