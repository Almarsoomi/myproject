document.addEventListener('DOMContentLoaded', function () {
    // Get references to the modal and image elements
    const modal = document.getElementById('imageModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalImage = document.getElementById('modalImage');

    // Get references to all images that should open the modal
    const imagesToOpenModal = document.querySelectorAll('.imageToOpenModal');

    // Function to open the modal with a specific image
    function openModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Attach event listeners to all images
    imagesToOpenModal.forEach((image) => {
        image.addEventListener('click', () => {
            const imageSrc = image.getAttribute('src');
            openModal(imageSrc);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Close the modal when clicking outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
