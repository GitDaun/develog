'use client';

import { useEffect } from 'react';

export default function AnimatedTitle() {
  useEffect(() => {
    const title = "DEVLOG          "; // 공백을 추가하여 자연스럽게
    let i = 0;
    const intervalId = setInterval(() => {
      document.title = title.substring(i) + title.substring(0, i);
      i = (i + 1) % title.length;
    }, 300); // 300ms 마다 제목을 변경합니다.

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌을 정리.
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
}
