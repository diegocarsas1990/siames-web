import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';

export default function Usos() {
  const posts = getSortedPostsData('usos');

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow w-full">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl mb-6">Usos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descubre cómo nuestra comunidad utiliza sus cuadernos Siames en su día a día. Diarios, bocetos y más.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link href={`/usos/${post.slug}`} key={post.slug} className="group block">
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted mb-4">
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              )}
            </div>
            <h2 className="font-serif text-2xl mb-2 group-hover:text-accent transition-colors">{post.title}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
              {post.excerpt}
            </p>
            <span className="text-xs font-semibold tracking-widest uppercase text-foreground/50">
              {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
