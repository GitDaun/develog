// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

const titles = {
  first: 'First Blog Post',
  second: 'Second Blog Post',
  third: 'Third Blog Post',
} as const;

type TitleKeys = keyof typeof titles;
type Params = { slug: TitleKeys };

type Props = {
  params: { slug: TitleKeys };
  searchParams: { [key: string]: string | string[] | undefined };
};

// generateMetadata도 async로 선언하고, await params!
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedParams = await params;           // 중요!
  // const resolvedParams = await params;           // 중요!
  return {
    description: (await parent).description ?? 'Description for blog post',
    title: titles[resolvedParams.slug],           // resolvedParams.slug로 접근
  };
}

// 컴포넌트도 async, 그리고 await params!
export default async function BlogPost({ params }: { params: Params }) {
  const resolvedParams = await params; // 중요!
  const { slug } = resolvedParams;

  if (!Object.keys(titles).includes(slug)) {
    notFound();
  }

  return (
    <div>
      <h1>Blog Post</h1>
      <p>{slug}</p>
    </div>
  );
}

// 정적 경로 생성 함수는 그대로 사용 가능
export function generateStaticParams(): Params[] {
  return [
    { slug: 'first' },
    { slug: 'second' },
    { slug: 'third' },
  ];
}
