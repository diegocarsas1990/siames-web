import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostDetails {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  contentHtml?: string;
}

export function getSortedPostsData(folder: string): PostDetails[] {
  const folderPath = path.join(contentDirectory, folder);
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(folderPath);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(folderPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        image: matterResult.data.image as string,
        excerpt: matterResult.data.excerpt as string,
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(folder: string, slug: string): Promise<PostDetails> {
  const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    image: matterResult.data.image,
    excerpt: matterResult.data.excerpt,
  };
}
