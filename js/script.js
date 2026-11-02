
// PICK N PAY WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

    // 1. ACTIVE NAVIGATION LINK
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // 2. PRODUCT SEARCH AND CATEGORY FILTER
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const productCards = document.querySelectorAll(".product-card");
    const noResults = document.getElementById("noResults");

    function filterProducts() {
        if (!searchInput || !categoryFilter) return;

        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        let visibleCount = 0;

        productCards.forEach(function (card) {
            const productText = card.textContent.toLowerCase();
            const category = card.dataset.category;

            const matchesSearch = productText.includes(searchText);
            const matchesCategory =
                selectedCategory === "all" ||
                category === selectedCategory;

            const showProduct = matchesSearch && matchesCategory;
            card.hidden = !showProduct;

            if (showProduct) visibleCount++;
        });

        if (noResults) {
            noResults.hidden = visibleCount !== 0;
        }
    }

    if (searchInput && categoryFilter) {
        searchInput.addEventListener("input", filterProducts);
        categoryFilter.addEventListener("change", filterProducts);
    }

    // 3. PRODUCT IMAGE GALLERY
    document.querySelectorAll(".gallery-image").forEach(function (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function () {
            const overlay = document.createElement("div");

            Object.assign(overlay.style, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.85)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "9999",
                cursor: "pointer"
            });

            const largeImage = document.createElement("img");
            largeImage.src = image.src;
            largeImage.alt = image.alt;

            Object.assign(largeImage.style, {
                maxWidth: "90%",
                maxHeight: "90%"
            });

            overlay.appendChild(largeImage);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", function () {
                overlay.remove();
            });
        });
    });

    // 4. ENQUIRY FORM
    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!enquiryForm.checkValidity()) {
                enquiryForm.reportValidity();
                return;
            }

            const enquiryType =
                document.getElementById("enquiry-type").value;

            const response =
                document.getElementById("enquiryResponse");

            if (response) {
                if (enquiryType === "products") {
                    response.textContent =
                        "Thank you! Your product enquiry has been received. Please contact your local Pick n Pay store for product availability and pricing.";
                } else if (enquiryType === "delivery") {
                    response.textContent =
                        "Thank you! Your delivery enquiry has been received. Please check with Pick n Pay online shopping for delivery availability and costs.";
                } else {
                    response.textContent =
                        "Thank you! Your enquiry has been received. We appreciate your interest in Pick n Pay.";
                }
            }

            enquiryForm.reset();
        });
    }

    // 5. CONTACT FORM
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const name = document.getElementById("contactName").value;
            const email = document.getElementById("contactEmail").value;
            const type = document.getElementById("messageType").value;
            const message = document.getElementById("contactMessage").value;

            const subject = encodeURIComponent("Pick n Pay: " + type);

            const body = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\nMessage Type: " + type +
                "\nMessage: " + message
            );

            const response = document.getElementById("contactResponse");

            if (response) {
                response.textContent =
                    "Your email is ready. Please send it using your email application.";
            }

            window.location.href =
                "mailto:customerservice@pnp.co.za?subject=" +
                subject + "&body=" + body;
        });
    }

    // 6. INTERACTIVE STORE MAP
    const mapElement = document.getElementById("map");

    if (mapElement && typeof L !== "undefined" &&
        !mapElement.classList.contains("leaflet-container")) {

        const storeMap = L.map("map").setView([-25.9955, 28.1076], 15);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(storeMap);

        L.marker([-25.9955, 28.1076])
            .addTo(storeMap)
            .bindPopup("Pick n Pay - Mall of Africa, Midrand")
            .openPopup();
    }

    // 7. READ MORE AND READ LESS
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreAbout = document.getElementById("moreAbout");

    if (readMoreBtn && moreAbout) {
        readMoreBtn.addEventListener("click", function () {
            moreAbout.hidden = !moreAbout.hidden;

            readMoreBtn.textContent = moreAbout.hidden
                ? "Read More"
                : "Read Less";
        });
    }

    // 8. ABOUT PAGE IMAGE SLIDESHOW
    const slideImage = document.getElementById("slideImage");
    const slideTitle = document.getElementById("slideTitle");
    const slideCounter = document.getElementById("slideCounter");
    const nextBtn = document.getElementById("nextBtn");
    const previousBtn = document.getElementById("previousBtn");

    if (slideImage && slideTitle && slideCounter &&
        nextBtn && previousBtn) {

        const slides = [
            {
                image: "images/Pick-n-pay-300x200.jpg",
                title: "Our Stores"
            },
            {
                image: "images/fresh-produce.jpg",
                title: "Fresh Produce"
            },
            {
                image: "images/grocery-products.jpg",
                title: "Everyday Products"
            }
        ];

        let currentSlide = 0;

        function showSlide() {
            slideImage.src = slides[currentSlide].image;
            slideImage.alt = slides[currentSlide].title;
            slideTitle.textContent = slides[currentSlide].title;
            slideCounter.textContent =
                (currentSlide + 1) + " / " + slides.length;
        }

        nextBtn.addEventListener("click", function () {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide();
        });

        previousBtn.addEventListener("click", function () {
            currentSlide =
                (currentSlide - 1 + slides.length) % slides.length;
            showSlide();
        });

        showSlide();
    }

    // 9. ABOUT PAGE CLICKABLE TABS
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons.length > 0 && tabContents.length > 0) {

        tabButtons.forEach(function (button) {
            button.addEventListener("click", function () {

                // Hide all information
                tabContents.forEach(function (content) {
                    content.hidden = true;
                    content.classList.remove("active");
                });

                // Remove active style from all buttons
                tabButtons.forEach(function (btn) {
                    btn.classList.remove("active");
                });

                // Display the selected tab
                const selectedTab =
                    document.getElementById(button.dataset.tab);

                if (selectedTab) {
                    selectedTab.hidden = false;
                    selectedTab.classList.add("active");
                    button.classList.add("active");
                }
            });
        });
    }

    
// ---------------------------------------------------------------------
// 7. Modal: service details
//    The buttons carry the text in data-title and data-details.
//    <dialog> is a built-in HTML element: showModal() opens it with a
//    dark backdrop and close() closes it. Esc works automatically.
// ---------------------------------------------------------------------
var serviceModal = document.getElementById("service-modal");
var detailButtons = document.querySelectorAll(".open-modal");

function openServiceModal(event) {
  var button = event.currentTarget;

  document.getElementById("modal-title").textContent = button.dataset.title;
  document.getElementById("modal-text").textContent = button.dataset.details;
  // The link carries the service name to the enquiry form
  document.getElementById("modal-enquire").href =
    "enquiries.html?service=" + encodeURIComponent(button.dataset.title);

  serviceModal.showModal();
}

function closeServiceModal() {
  serviceModal.close();
}

if (serviceModal) {
  for (var m = 0; m < detailButtons.length; m++) {
    detailButtons[m].addEventListener("click", openServiceModal);
  }

  // Close buttons: anything with the class "close-modal"
  var closeButtons = serviceModal.querySelectorAll(".close-modal");
  for (var x = 0; x < closeButtons.length; x++) {
    closeButtons[x].addEventListener("click", closeServiceModal);
  }

  // Clicking the dark area outside the box also closes it
  serviceModal.addEventListener("click", function (event) {
    if (event.target === serviceModal) {
      closeServiceModal();
    }
  });
}

// ---------------------------------------------------------------------
// 8. Gallery with lightbox
//    Every gallery link points to the big picture, so the gallery still
//    works if JavaScript is off. JavaScript shows it in a lightbox.
// ---------------------------------------------------------------------
var lightbox = document.getElementById("lightbox");
var galleryLinks = document.querySelectorAll(".gallery-item");
var currentPicture = 0; // which picture is showing

function showPicture(number) {
  // Wrap around: after the last picture comes the first
  if (number < 0) {
    number = galleryLinks.length - 1;
  }
  if (number >= galleryLinks.length) {
    number = 0;
  }
  currentPicture = number;

  var link = galleryLinks[number];
  var smallImage = link.querySelector("img");

  document.getElementById("lightbox-img").src = link.href;
  document.getElementById("lightbox-img").alt = smallImage.alt;
  document.getElementById("lightbox-caption").textContent = smallImage.alt;
}

if (lightbox && galleryLinks.length > 0) {
  for (var g = 0; g < galleryLinks.length; g++) {
    galleryLinks[g].addEventListener("click", function (event) {
      event.preventDefault(); // do not follow the link
      showPicture(
        Array.prototype.indexOf.call(galleryLinks, event.currentTarget),
      );
      lightbox.showModal();
    });
  }

  document
    .getElementById("lightbox-prev")
    .addEventListener("click", function () {
      showPicture(currentPicture - 1);
    });
  document
    .getElementById("lightbox-next")
    .addEventListener("click", function () {
      showPicture(currentPicture + 1);
    });
  document
    .getElementById("lightbox-close")
    .addEventListener("click", function () {
      lightbox.close();
    });

  // Keyboard: left and right arrows change the picture
  lightbox.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      showPicture(currentPicture - 1);
    }
    if (event.key === "ArrowRight") {
      showPicture(currentPicture + 1);
    }
  });

  // Clicking outside the picture closes the lightbox
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });
}
});

