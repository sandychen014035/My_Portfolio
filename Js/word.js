document.querySelectorAll('.secondaryMenu a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 

        // 取得點擊的 data-class 屬性值
        var selectedClass = link.getAttribute('data-class');

        // 隱藏所有 .worksField 內的元素
        document.querySelectorAll('.worksField').forEach(function (field) {
            field.style.display = 'none';
        });

        // 顯示選擇的 class 元素
        document.querySelectorAll('.' + selectedClass).forEach(function (div) {
            div.parentElement.style.display = 'flex';
        });
    });
});