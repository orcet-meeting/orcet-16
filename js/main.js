document.addEventListener('DOMContentLoaded', () => {
    
    // トップに戻るボタンの制御
    const pageTopBtn = document.getElementById('page-top');

    if (pageTopBtn) {
        // スクロールイベント（ボタンの表示・非表示）
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                pageTopBtn.classList.add('show');
            } else {
                pageTopBtn.classList.remove('show');
            }
        });

        // クリックイベント（スムースに上へ戻る）
        pageTopBtn.addEventListener('click', (e) => {
            e.preventDefault(); // href="#" の標準動作をキャンセル
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});