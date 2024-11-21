import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    duration: 300,
    openOnInit: [0],
    collapse: true,
  });
});

document.querySelectorAll('.ac').forEach(el => {
  el.style.marginTop = '0';
  el.style.borderBottom = '1px solid #e4e5e6';
  el.style.backgroundColor = 'transparent';
  //   el.style.border = 'none';
});
