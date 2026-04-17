import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';

export default function Encuentros() {
  const posts = getSortedPostsData('encuentros');

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex-grow w-full">
      <div className="text-center mb-20 border-b border-muted pb-12">
        <h1 className="font-serif text-5xl mb-6">Encuentros</h1>
        <p className="text-muted-foreground">
          Eventos, talleres y colaboraciones con artistas de la Ciudad de México.
        </p>
      </div>

      <div className="space-y-16">
        {posts.map((post) => (
          <article key={post.slug} className="flex flex-col md:flex-row gap-8 items-start group">
            {post.image && (
              <div className="w-full md:w-2/5 aspect-[4/3] bg-muted overflow-hidden flex-shrink-0">
                <Link href={`/encuentros/${post.slug}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </Link>
              </div>
            )}
            
            <div className="w-full md:w-3/5 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3 block">
                {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <Link href={`/encuentros/${post.slug}`}>
                <h2 className="font-serif text-3xl mb-4 group-hover:text-accent transition-colors">{post.title}</h2>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <Link href={`/encuentros/${post.slug}`} className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">
                Leer Más
              </Link>
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-center text-muted-foreground">Próximamente nuevos encuentros.</p>
        )}
      </div>
    </div>
  );
}
