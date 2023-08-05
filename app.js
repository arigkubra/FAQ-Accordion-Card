const faqs = document.querySelectorAll('.faq');
const arrowPicture = document.querySelector('.arrowPicture');


faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    const answer = faq.querySelector('.answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

  });
});

arrowPicture.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const image = arrow.querySelector('.img')
        image.style.transform = image.style.transform === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});


