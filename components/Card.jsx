import Link from 'next/link';

export default function Card({ post }) {
  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Imagem do post */}
      <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${post.image})` }}>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5">
        <Link href={`/posts/${post.slug}`}>
          <h3 className="text-xl font-semibold text-green-400 hover:text-green-300 transition-colors">{post.title}</h3>
        </Link>
        <p className="mt-3 text-slate-400">{post.description}</p>
      </div>
    </div>
  );
}
