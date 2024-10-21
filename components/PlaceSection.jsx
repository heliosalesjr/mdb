// components/PlaceSection.jsx

import Card from '@/components/Card';

export default function PlaceSection({ posts }) {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-slate-700 mb-6">Lugares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.slug} post={post} />
          ))
        ) : (
          <p className="text-slate-400">No place posts available</p>
        )}
      </div>
    </section>
  );
}
