(() => {

    const refs = {
      openModalBtn: document.querySelector("[data-mob-open]"),
      closeModalBtn: document.querySelector("[data-mob-close]"),
      modal: document.querySelector("[data-modal-mob]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();