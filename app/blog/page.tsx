import { mdToBlogProps } from '../main/utils/MdToProps';

export default async function MainPage() {
  const blogs = mdToBlogProps('app/blog');
  return (
    <section>
      <h1>Blog Page</h1>
      <div className="grid-resp-4">
        {blogs.map((blog) => (
          <div key={blog.title}>
            <h2>{blog.title}</h2>
            <a href={`/blog/${blog.href}`}>go to</a>
          </div>
        ))}
      </div>
    </section>
  );
}
