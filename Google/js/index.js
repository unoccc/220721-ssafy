const toggleBtn = document.querySelector('.toggle-btn');
const bodyBackgroundColor = document.querySelector('body');
const headerNav = document.querySelector('.header-nav');
const text = document.querySelectorAll('.text');
const input = document.querySelector('.search-input');

toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle("toggle-btn-darkmode");
    if (toggleBtn.textContent === "다크모드") {
        toggleBtn.textContent = "일반모드"
    } else {
        toggleBtn.textContent = "다크모드"
    }

    bodyBackgroundColor.classList.toggle("body-background-darkmode");
    headerNav.classList.toggle("text-darkmode");
    for (let str of text) {
        str.classList.toggle("text-darkmode");
    }
})

input.addEventListener('keyup', function (e) {
    if (e.code === "Enter") {
        if (!e.target.value) {
            alert("검색어를 입력해주세요");
            return;
        }
        // 이동하는 두가지 방법
        const target = "https://www.google.com/search?q=";
        // 1. 그냥 이동 (location.href)
        location.href = target + e.target.value;
        // 2. 새 탭 이동 (window.oepn)
        // window.open(target + e.target.value);
    }
})
