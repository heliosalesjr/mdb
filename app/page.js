import getPostMetadata from "@/utils/getPostMetadata";
import Link from 'next/link';

export default async function Home() {
  // Carregar posts diretamente no lado do servidor
  const posts = getPostMetadata('content/posts') || [];

  // Filtrar posts por tipo
  const techPosts = posts.filter(post => post.type === 'tech');
  const recordPosts = posts.filter(post => post.type === 'record');
  const placePosts = posts.filter(post => post.type === 'place');

  return (
    <>
      <h1>Hi!</h1>

      <section>
        <h2>História</h2>
        {techPosts.length > 0 ? (
          techPosts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>No tech posts available</p>
        )}
      </section>

      <section>
        <h2>Discos</h2>
        {recordPosts.length > 0 ? (
          recordPosts.map((post) => (
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

      <section>
        <h2>Lugares</h2>
        {placePosts.length > 0 ? (
          placePosts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>No place posts available</p>
        )}
      </section>
    </>
  );
}
