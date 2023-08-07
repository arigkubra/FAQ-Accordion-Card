const faqs = document.querySelectorAll('.faq');



faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    const answer = faq.querySelector('.answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    const arrowPicture = faq.querySelector('.arrowPicture');
    arrowPicture.style.transform = arrowPicture.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)'
  });
});



