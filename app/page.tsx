import AnimatedTitle from "@/components/AnimatedTitle";

export default async function Home({searchParams}: {searchParams: Promise<{error: string}>}) {

  const resolvedSearchParams = await searchParams;

  console.log(resolvedSearchParams);
  return (
    <div>
      <AnimatedTitle />
      <h1>Home</h1>
      <p>{resolvedSearchParams.error}</p>
    </div>
  );  
}
