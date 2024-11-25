document.addEventListener('DOMContentLoaded', () => {
  const projectsList = document.querySelectorAll(
    '.list-projects .list-project-item'
  );
  const loadBtn = document.querySelector('.load-btn');
  const itemsPerLoad = 3;
  let visibleItems = 3;

  const updateVisibleItems = () => {
    for (let i = visibleItems; i < visibleItems + itemsPerLoad; i++) {
      if (projectsList[i]) {
        projectsList[i].style.display = 'flex';
      }
    }
    visibleItems += itemsPerLoad;
    if (visibleItems >= projectsList.length) {
      loadBtn.style.display = 'none';
    }
  };
  projectsList.forEach((item, index) => {
    item.style.display = index < visibleItems ? 'block' : 'none';
  });
  loadBtn.addEventListener('click', updateVisibleItems);
});
