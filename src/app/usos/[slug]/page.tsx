import { getPostData, getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData('usos');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function UsoPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData('usos', slug);

  return (
    <article className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex-grow w-full">
      <div className="mb-12 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-foreground/50 block mb-4">
          {new Date(postData.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">{postData.title}</h1>
      </div>

      {postData.image && (
        <div className="aspect-[21/9] w-full overflow-hidden bg-muted mb-12">
          <img 
            src={postData.image} 
            alt={postData.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div 
        className="prose prose-lg prose-neutral mx-auto prose-headings:font-serif prose-headings:font-normal prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-foreground"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
      />

      <div className="mt-20 pt-8 border-t border-muted text-center">
        <Link href="/usos" className="text-sm tracking-widest uppercase font-medium hover:text-accent transition-colors">
          &larr; Volver a Usos
        </Link>
      </div>
    </article>
  );
}
