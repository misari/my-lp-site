import { client } from '../lib/microcms';

async function getPages() {
  const data = await client.get({
    endpoint: 'pages',
  });
  return data.contents;
}

export default async function Home() {
  const pages = await getPages();
  const page = pages[0]; // 最初のページを表示

  if (!page) {
    return <div>コンテンツが見つかりません</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
      <p className="text-gray-600 mb-8">{page.description}</p>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </main>
  );
}