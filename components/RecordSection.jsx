import Link from 'next/link';

export default function RecordSection({ posts }) {
  return (
    <section>
      <h2>Discos</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>
          </div>
        ))
      ) : (
        <p>No record posts available</p>
      )}
    </section>
  );
}
