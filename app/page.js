import getPostMetadata from "@/utils/getPostMetadata";

export default async function Home() {
  // Carregar posts diretamente no lado do servidor
  const posts = getPostMetadata('content/posts') || [];

  if (!posts || posts.length === 0) {
    return <h1>No posts available</h1>;
  }

  return (
    <>
      <h1>Hi!</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </>
  );
}
