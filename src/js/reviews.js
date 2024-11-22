import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const hardcodedReviews = [
    {
      _id: 1,
      author: "Natalia",
      avatar_url: "https://ftp.goit.study/img/avatars/4.jpg",
      review: "Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations."
    },
    {
      _id: 2,
      author: "Dmytro",
      avatar_url: "https://ftp.goit.study/img/avatars/5.jpg",
      review: "I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results."
    },
    {
      _id: 3,
      author: "Anna",
      avatar_url: "https://ftp.goit.study/img/avatars/6.jpg",
      review: "The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!"
    },
    {
      _id: 4,
      author: "Ivetta",
      avatar_url: "https://ftp.goit.study/img/avatars/8.jpg",
      review: "It's not the will to win that matters—everyone has that. It's the will to prepare to win that matters."
    },
    {
      _id: 5,
      author: "Andriy",
      avatar_url: "https://ftp.goit.study/img/avatars/9.jpg",
      review: "Working with him was an absolute pleasure. He demonstrated exceptional professionalism and skill in handling our project. Not only did he meet all deadlines, but he also went above and beyond to ensure the final product was flawless. Highly recommend his services."
    },
    {
      _id: 6,
      author: "Eduard",
      avatar_url: "https://ftp.goit.study/img/avatars/11.jpg",
      review: "I couldn't be happier with the outcome of our collaboration. He proved to be a reliable and proficient expert. The results speak for themselves - impeccable work delivered in a timely manner. Looking forward to future projects together!"
    }
  ];

  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1280: {
        slidesPerView: 2,
      },
    },
    on: {
      slideChange: () => {
        updateButtonStates();
      },
    },
  });

  fetchReviews();

  async function fetchReviews() {
    const reviewsList = document.getElementById('reviews-list');
    const errorMessage = document.getElementById('error-message');

    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api/reviews', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error(`Failed to fetch reviews: ${response.status}`);

      const fetchedReviews = await response.json();
<<<<<<< Updated upstream

      const allReviews = [...hardcodedReviews, ...fetchedReviews];

      renderReviews(allReviews, reviewsList);

=======
      renderReviews(fetchedReviews, reviewsList);
>>>>>>> Stashed changes
      swiper.update();
    } catch (error) {
      console.error('Error fetching reviews:', error);
      errorMessage.textContent = 'Reviews not found';
      errorMessage.classList.remove('hidden');

      renderReviews(hardcodedReviews, reviewsList);
      swiper.update();
    }
  }

  function renderReviews(reviews, reviewsList) {
<<<<<<< Updated upstream
=======
    reviewsList.innerHTML = '';

>>>>>>> Stashed changes
    reviews.forEach((review) => {
      const listItem = document.createElement('li');
      listItem.className = 'swiper-slide';

      const text = document.createElement('p');
      text.className = 'review-text';
      text.textContent = review.review;

      const reviewerInfo = document.createElement('div');
      reviewerInfo.className = 'reviewer-info';

      const photo = document.createElement('img');
      photo.className = 'review-photo';
      photo.src = review.avatar_url;
      photo.alt = `${review.author}'s photo`;

      const name = document.createElement('p');
      name.className = 'reviewer-name';
      name.textContent = review.author;

      reviewerInfo.appendChild(photo);
      reviewerInfo.appendChild(name);

      listItem.appendChild(text);
      listItem.appendChild(reviewerInfo);
      reviewsList.appendChild(listItem);
    });
  }

  function updateButtonStates() {
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    nextButton.disabled = swiper.isEnd;
    prevButton.disabled = swiper.isBeginning;

    nextButton.classList.toggle('disabled', swiper.isEnd);
    prevButton.classList.toggle('disabled', swiper.isBeginning);
  }

  updateButtonStates();
});

