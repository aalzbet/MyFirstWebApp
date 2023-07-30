let data = [
  {
    photo: 'images/photo1.jpg',
    title: 'A Desert',
    description: 'What happened here, why is this a very nice image.'
  },
  {
    photo: 'images/photo2.jpg',
    title: 'A Lonely Tree',
    description: 'I feel like the tree sometimes.'
  },
  {
    photo: 'images/photo3.jpg',
    title: 'Mountains',
    description: 'Aim as high as the peaks.'
  },
  {
    photo: 'images/photo4.jpg',
    title: 'A Goat',
    description: 'No living being is too different from us.'
  },
  {
    photo: 'images/photo5.jpg',
    title: 'A Rose',
    description: 'Be as gentle and strong as you can be.'
  }
];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
  currentPhoto = (photoNumber + data.length) % data.length;

  $('#photo').attr('src', data[currentPhoto].photo);
  $('#title').text(data[currentPhoto].title);
  $('#description').text(data[currentPhoto].description);

  $('.thumbnail').removeClass('active-thumbnail');
  $(`.thumbnail[data-index="${currentPhoto}"]`).addClass('active-thumbnail');
};

$('#left').click(() => {
  loadPhoto(currentPhoto - 1);
});

$('#right').click(() => {
  loadPhoto(currentPhoto + 1);
});

let createThumbnail = (photo, index) => {
  let thumbnailImage = document.createElement('img');
  thumbnailImage.src = photo.photo;
  thumbnailImage.classList.add('thumbnail');
  thumbnailImage.setAttribute('data-index', index);

  thumbnailImage.title = photo.title;

  thumbnailImage.addEventListener('click', () => {
    loadPhoto(index);
  });

  let thumbnailTitle = document.createElement('div');
  thumbnailTitle.classList.add('thumbnail-title');
  thumbnailTitle.innerText = photo.title;

  document.getElementById('thumbnails-container').appendChild(thumbnailImage);
};

data.forEach((photo, index) => {
  createThumbnail(photo, index);
});

loadPhoto(currentPhoto);


