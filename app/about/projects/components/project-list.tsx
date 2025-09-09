import Card from "@/components/card";

// API 응답에 대한 타입 정의
interface Repo {
  id: number;
  title: string;
  stargazers_count: number;
  description: string;
}

export default async function ProjectList() {
  const response = await fetch('http://localhost:3001/repos', {
    //cache: 'no-store',
  });
  const repos: Repo[] = await response.json();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <li key={repo.id} className="mb-4">
          <Card className="font-mono h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="font-bold">{repo.title}</div>
              <div>⭐{repo.stargazers_count}</div>
            </div>
            <div>{repo.description}</div>
          </Card>
        </li>
      ))}
    </ul>
  )
}