// 搜索功能
const searchBox = document.querySelector('.search-box');
const links = document.querySelectorAll('.link-item a');

searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        const parent = link.parentElement;
        
        if (text.includes(searchTerm)) {
            parent.style.display = 'block';
        } else {
            parent.style.display = 'none';
        }
    });
}); 