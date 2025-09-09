import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

/**
 * 외부 사이트를 iframe으로 표시하는 모달 컴포넌트
 * 
 * @param isOpen 모달 표시 여부
 * @param onClose 모달 닫기 함수
 * @param url iframe에 표시할 URL
 * @returns 모달 컴포넌트
 */
export default function Modal({ isOpen, onClose, url }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      />
      
      {/* 모달 컨텐츠 */}
      <div className="relative z-10 w-11/12 h-5/6 max-w-5xl bg-white rounded-lg shadow-xl">
        {/* 닫기 버튼 */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* iframe으로 외부 사이트 표시 */}
        <iframe 
          src={url} 
          className="w-full h-full rounded-lg"
          title="외부 사이트"
          sandbox="allow-scripts allow-same-origin allow-forms"
          loading="lazy"
        />
      </div>
    </div>
  );
}
