export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <div className="mt-8">
        <h2 className="text-xl mb-4">About 레이아웃입니다</h2>
        <ul>
          <li>1st blog post</li>
          <li>2nd blog post</li>
          <li>3rd blog post</li>
        </ul>
      </div>
    </div>
  );
}