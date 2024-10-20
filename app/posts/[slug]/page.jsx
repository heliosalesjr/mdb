import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

export default async function Post({ params }) {
  const { slug } = params;

  // Caminho para o arquivo .md
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Processa os metadados e o conteúdo do arquivo
  const { data, content } = matter(fileContents);

  return (
    <div>
      
      {/* Renderiza o conteúdo Markdown usando markdown-to-jsx */}
      <div className="prose mx-auto">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

// Gera os parâmetros de URL dinâmicos para todos os posts
export async function generateStaticParams() {
  const directory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(directory);
  
  // Retorna uma lista de objetos com o parâmetro `slug`
  return filenames.map((filename) => {
    return {
      slug: filename.replace('.md', ''), // Remove a extensão ".md" para usar como slug
    };
  });
}
