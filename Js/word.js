document.querySelectorAll('.secondaryMenu a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // 防止連結跳轉
        
        // 取得點擊的 data-class 屬性值
        var selectedClass = link.getAttribute('data-class');
        
        // 隱藏所有 .A 區域中的 div
        document.querySelectorAll('.A div').forEach(function(div) {
            div.style.display = 'none';
        });
        
        // 顯示選擇的 class 元素
        document.querySelectorAll('.A .' + selectedClass).forEach(function(div) {
            div.style.display = 'block';
        });
    });
});