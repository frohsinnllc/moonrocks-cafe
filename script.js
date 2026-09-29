const menuDialog = document.querySelector('.menu-dialog');
const menuDialogImage = document.querySelector('.menu-dialog-image');
const menuDialogClose = document.querySelector('.menu-dialog-close');

function openMenuImage(button) {
  menuDialogImage.src = button.dataset.image;
  menuDialogImage.alt = button.dataset.alt || '';
  menuDialog.showModal();
}

document.querySelectorAll('.menu-zoom, .menu-open').forEach((button) => {
  button.addEventListener('click', () => openMenuImage(button));
});

menuDialogClose.addEventListener('click', () => menuDialog.close());
menuDialog.addEventListener('click', (event) => {
  if (event.target === menuDialog) menuDialog.close();
});
menuDialog.addEventListener('close', () => {
  menuDialogImage.removeAttribute('src');
});
