const carousel = document.querySelector('.product-list');
    const items = document.querySelectorAll('.product-item');
    const totalItems = items.length;
    let index = 0;

    document.getElementById('prev').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalItems - 1;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    document.getElementById('next').addEventListener('click', () => {
    index = (index < totalItems - 1) ? index + 1 : 0;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    });