import getPostMetadata from "@/utils/getPostMetadata";
import HistorySection from "@/components/HistorySection";
import RecordSection from "@/components/RecordSection";
import PlaceSection from "@/components/PlaceSection";
import HeroSection from "@/components/Hero";

export default async function Home() {
  const posts = await getPostMetadata('content/posts') || [];

  const techPosts = posts.filter(post => post.type === 'tech');
  const recordPosts = posts.filter(post => post.type === 'record');
  const placePosts = posts.filter(post => post.type === 'place');

  return (
    <>
      <HeroSection />
      <div className="max-w-5xl mx-auto">
        <HistorySection posts={techPosts} />
        <RecordSection posts={recordPosts} />
        <PlaceSection posts={placePosts} />
      </div>
      
    </>
  );
}
