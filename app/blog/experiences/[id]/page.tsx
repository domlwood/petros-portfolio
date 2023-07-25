import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import { getStaticPaths } from '../../../main/utils/GetStaticPaths';
import { readAndCleanMd } from '../../../main/utils/ReadAndCleanMd';

export const generateStaticParams = async () => {
  return getStaticPaths(`app/blog/experiences`);
};

export default async function ExperienceBlogPage({ params }: { params: { id: string } }) {
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
