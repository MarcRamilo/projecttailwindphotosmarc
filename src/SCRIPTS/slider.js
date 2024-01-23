document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
      type       : 'fade',
      heightRatio: 0.5,
      pagination : false,
      arrows     : true,
    }).mount();
  });