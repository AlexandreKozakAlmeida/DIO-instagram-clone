const modal = document.getElementById('modal')

const openModal = document.getElementById('openModal')

const closeModal = document.getElementById('closeModal')

openModal.onclick = function () {
  modal.classList.add('show')
}

closeModal.onclick = function () {
  modal.classList.remove('show')
}


