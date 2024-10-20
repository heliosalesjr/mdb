import getPostMetadata from "@/utils/getPostMetadata";
import HistorySection from "@/components/HistorySection";
import RecordSection from "@/components/RecordSection";
import PlaceSection from "@/components/PlaceSection";

export default async function Home() {
  // Carregar posts diretamente no lado do servidor
  const posts = getPostMetadata('content/posts') || [];

  // Filtrar posts por tipo
  const techPosts = posts.filter(post => post.type === 'tech');
  const recordPosts = posts.filter(post => post.type === 'record');
  const placePosts = posts.filter(post => post.type === 'place');

  return (
    <>
      <HistorySection posts={techPosts} />
      <RecordSection posts={recordPosts} />
      <PlaceSection posts={placePosts} />
    </>
  );
}
