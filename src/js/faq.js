document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    duration: 300,
    openOnInit: [0],
    collapse: true,
  });
});
