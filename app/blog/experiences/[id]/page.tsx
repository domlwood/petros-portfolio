import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import { readAndCleanMd } from '../../../main/utils/ReadAndCleanMd';

export const generateStaticParams = async () => {
  return [{id: 'aps-group'}];
};

export default async function ExperienceBlogPage({ params }: { params: any }) {
  const content = readAndCleanMd(`app/blog/experiences/${params.id}.md`);
  return (
    <section>
      <Markdown className="pb-12">{content}</Markdown>
      <Link className="btn" href="/">
        ← back
      </Link>
    </section>
  );
}
