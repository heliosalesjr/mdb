import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function getPostMetadata(basePath) {
  const folder = path.join(process.cwd(), basePath);
  const files = fs.readdirSync(folder);
  console.log("Files found:", files); // Log para ver os arquivos encontrados
  const markdownPosts = files.filter(file => file.endsWith('.md'));

  // get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(path.join(folder, filename), 'utf8');
    const matterResult = matter(fileContents);
    console.log("Matter result for", filename, ":", matterResult); // Log para verificar o conteúdo extraído
    return {
      title: matterResult.data.title || "No title",
      date: matterResult.data.date || "No date",
      tag: matterResult.data.tag || "No tag",
      description: matterResult.data.description || "No description",
      type: matterResult.data.type || "No type",
      slug: filename.replace('.md', ''),
      image: matterResult.data.image,
      
    };
  });

  
  return posts;
}