const galleryModal = document.getElementById('galleryModal');
galleryModal.addEventListener('show.bs.modal', event => {
    const triggerElement = event.relatedTarget;

    const title = triggerElement.getAttribute('data-modal-title');
    const image = triggerElement.getAttribute('data-modal-image');
    const date = triggerElement.getAttribute('data-modal-date');
    const description = triggerElement.getAttribute('data-modal-description');
    const link = triggerElement.getAttribute('data-modal-link');
    const linkText = triggerElement.getAttribute('data-modal-link-text');

    const modalTitle = galleryModal.querySelector('.modal-title');
    const modalImage = galleryModal.querySelector('#galleryModalImage');
    const modalDescription = galleryModal.querySelector('#galleryModalDescription');
    const modalDate = galleryModal.querySelector('#galleryModalDate');
    const modalLink = galleryModal.querySelector('#galleryModalLink');

    modalTitle.textContent = title;
    modalImage.src = image;
    modalDescription.textContent = description;
    modalDate.textContent = date;
    
    if (link && link !== "#" && linkText) {
        modalLink.href = link;
        modalLink.textContent = linkText;
        modalLink.style.display = 'inline-block';
    } else {
        modalLink.style.display = 'none';
    }
});