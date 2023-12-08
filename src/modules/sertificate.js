const sertificate = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const certificateImages = document.querySelectorAll(
      ".sertificate-document"
    );

    certificateImages.forEach(function (image) {
      image.addEventListener("click", function (event) {
        event.preventDefault();
        const imageUrl = this.getAttribute("href");

        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.style.display = "block";
        modal.style.top = "-10%";
        modal.style.left = "25%";
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close">X</span>
            <img src="${imageUrl}" alt="Certificate">
          </div>
        `;

        document.body.appendChild(modal);

        const closeModal = modal.querySelector(".close");

        closeModal.style.position = "relative";
        closeModal.style.top = "120px";
        closeModal.style.left = "-415px";
        closeModal.style.color = "black";

        closeModal.addEventListener("click", function () {
          modal.remove();
        });
      });
    });
  });
};

export default sertificate;
