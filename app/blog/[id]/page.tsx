import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import { getStaticPaths } from 'app/main/utils/GetStaticPaths';
import { readAndCleanMd } from '../../main/utils/ReadAndCleanMd';

export const generateStaticParams = async () => {
  return getStaticPaths(`app/blog`);
};

export default async function BlogPage({ params }: { params: { id: string } }) {
  const content = readAndCleanMd(`app/blog/${params.id}.md`);

  return (
    <section>
      <Markdown className="pb-12">{content}</Markdown>
      <Link className="btn" href="/">
        back →
      </Link>
    </section>
  );
}
