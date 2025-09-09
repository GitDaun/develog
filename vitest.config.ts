/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default async () => {
  // 동적으로 tsconfigPaths 모듈 불러오기
  const tsconfigPaths = (await import('vite-tsconfig-paths')).default

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      globals: true,
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      outputFile: './coverage', // 커버리지 리포트 저장경로
      include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
      deps: {
        optimizer: {
          web: {
            include: [
              '@testing-library/jest-dom', '@testing-library/react']
          }
        }
      },
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './coverage',
        all: true,
        include: [
          'src/app/_components/**/*.{js,ts,jsx,tsx}',
          'src/hooks/**/*.{js,ts,jsx,tsx}'
        ],
        exclude: [
          'node_modules/**',
          '**/*.d.ts',
          '**/*.test.{js,ts,jsx,tsx}',
          '**/types/**',
          '**/setupTests.ts',
          'src/test/**',
          'src/app/__mocks__/**',
          'src/app/_test/**',
          'src/app/layout.tsx',
          'src/app/loading.tsx',
          'src/app/not-found.tsx',
          'src/app/page.tsx'
        ],
        thresholds: {
          lines: 80,
          functions: 80,
          branches: 80,
          statements: 80
        }
      }
    }
  })
}