// document.addEventListener('DOMContentLoaded', () => {
//   const projectsList = document.querySelectorAll(
//     '.list-projects .list-project-item'
//   );
//   const loadBtn = document.querySelector('.load-btn');
//   const itemsPerLoad = 3;
//   let visibleItems = 3;

//   const updateVisibleItems = () => {
//     for (let i = visibleItems; i < visibleItems + itemsPerLoad; i++) {
//       if (projectsList[i]) {
//         projectsList[i].style.display = 'flex';
//       }
//     }
//     visibleItems += itemsPerLoad;
//     if (visibleItems >= projectsList.length) {
//       loadBtn.style.display = 'none';
//     }
//   };
//   projectsList.forEach((item, index) => {
//     item.style.display = index < visibleItems ? 'block' : 'none';
//   });
//   loadBtn.addEventListener('click', updateVisibleItems);
// });

document.addEventListener('DOMContentLoaded', () => {
  const projectsList = document.querySelectorAll(
    '.list-projects .list-project-item'
  );
  const loadBtn = document.querySelector('.load-btn');
  const container = document.querySelector('.my-projects .container');
  const itemsPerLoad = 3;
  let visibleItems = 3;

  const uppBtn = document.createElement('button');
  uppBtn.classList.add('upp-btn');
  uppBtn.textContent = 'UP';
  uppBtn.style.display = 'none';
  container.appendChild(uppBtn);

  const updateVisibleItems = () => {
    for (let i = visibleItems; i < visibleItems + itemsPerLoad; i++) {
      if (projectsList[i]) {
        projectsList[i].style.display = 'flex';
      }
    }
    visibleItems += itemsPerLoad;

    if (visibleItems >= projectsList.length) {
      loadBtn.style.display = 'none';
      uppBtn.style.display = 'block';
    }
  };

  const resetVisibleItems = () => {
    visibleItems = 3;
    projectsList.forEach((item, index) => {
      item.style.display = index < visibleItems ? 'block' : 'none';
    });
    loadBtn.style.display = 'block';
    uppBtn.style.display = 'none';
  };

  resetVisibleItems();

  loadBtn.addEventListener('click', updateVisibleItems);

  uppBtn.addEventListener('click', () => {
    resetVisibleItems();
    container.scrollIntoView({ behavior: 'smooth' });
  });
});
