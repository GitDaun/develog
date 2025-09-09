
import { ErrorBoundary } from "react-error-boundary";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { Suspense } from "react";

export const metadata = {
  title: 'Projects', 
}


export default async function ProjectsPage() {


  return (
    <>
      <div>
        <h1 className="mb-8 text-xl">Projects</h1>
        <div className="mb-8"> Hello, this is the list of my projects</div>
        
        <ErrorBoundary fallback={<div>에러 바운더리 사용했습니다</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList />
        </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
} 