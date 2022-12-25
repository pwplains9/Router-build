const canvas = document.createElement('canvas');

document.documentElement.classList.toggle('no-webp', canvas.getContext && canvas.getContext('2d') && canvas.toDataURL('image/webp').indexOf('data:image/webp') < 0);
