import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import { readAndCleanMd } from '../../main/utils/ReadAndCleanMd';

export default async function BlogPage({ params }: { params: { id: string } }) {
  const content = readAndCleanMd(`app/blogs/${params.id}.md`);

  return (
    <section>
      <Markdown className="pb-12">{content}</Markdown>
      <Link className="btn" href="/">back →</Link>
    </section>
  );
}
