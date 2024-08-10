const accessKey = "JuOwxTpb8Pm5gkSyzZQ-r8B1cikxzei3ZJEU5WHioVU";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const cardEl = document.querySelector(".cards");
const showBtn = document.getElementById("show-more");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com//search/photos/?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    cardEl.innerHTML = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("card");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLinksAnchor = document.createElement("a");
    imageLinksAnchor.href = result.links.html;
    imageLinksAnchor.target = "_blank";
    imageLinksAnchor.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLinksAnchor);
    cardEl.appendChild(imageWrapper);
  });

  page++;
  if (page > 1) {
    showBtn.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showBtn.addEventListener("click", () => {
  searchImages();
});
