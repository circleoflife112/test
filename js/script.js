// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("페이지 로드 완료. GitHub Pages 심플 랜딩 페이지.");

    // (선택 사항) 네비게이션 활성 링크 하이라이트 기능
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        let linkPath = new URL(link.href).pathname.replace(/\/$/, "");
        
        // 메인 페이지(index.html) 처리
        if (linkPath === '/test' && currentPath === '/test') {
             link.classList.add('active');
        } else if (linkPath.includes(currentPath) && currentPath !== '/test') {
            link.classList.add('active');
        }
    });

    // CSS에서 active 클래스에 스타일을 추가하세요. (예: .nav-links a.active { color: var(--accent-color); font-weight: 600; })
});