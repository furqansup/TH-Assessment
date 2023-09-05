// Jar image part

const imagePath = "./resources/Jar.jpg";
const jarContainer = document.querySelector(".jar");
const numberOfImages = 3;

// Using for loop to append;
for (let i = 0; i < numberOfImages; i++) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("jar-container");

  const img = document.createElement("img");
  img.src = imagePath;
  img.alt = `Image ${i + 1}`;

  // Title with class
  const title = document.createElement("h3");
  title.textContent = "Where does it come from?";
  title.classList.add("jar-sub-title");

  // Subtitle with class
  const subtitle = document.createElement("p");
  subtitle.textContent =
    "Lorem lspum is simply dummy text of the printing and the typesetting industry";
  subtitle.classList.add("jar-para");

  // Appending every elements to child
  imageContainer.appendChild(img);
  imageContainer.appendChild(title);
  imageContainer.appendChild(subtitle);

  // Appendind to parent ie jar
  jarContainer.appendChild(imageContainer);
}

// Bullet points part-1

const bulletsContainerA = document.querySelector(".bullets-point-a");
const numberOfItemsA = 4;

// Adding <li> elements
for (let i = 0; i < numberOfItemsA; i++) {
  const listItem = document.createElement("li");
  const loremText = document.createTextNode(
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
  );

  // Appending the text node to the <li> element
  listItem.appendChild(loremText);

  // Appending the <li> element to the bullets-point container
  bulletsContainerA.appendChild(listItem);
}

// Bullet points part-2

const bulletsContainerB = document.querySelector(".bullets-point-b");
const numberOfItemsB = 5;

// Adding <li> elements
for (let i = 0; i < numberOfItemsB; i++) {
  const listItem = document.createElement("li");
  const loremText = document.createTextNode(
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
  );

  // Appending the text node to the <li> element
  listItem.appendChild(loremText);

  // Appending the <li> element to the bullets-point container
  bulletsContainerB.appendChild(listItem);
}

// Sidebar that toggle when click;

const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");

function closeSidebar() {
  sidebar.style.right = "-250px";
}

menuButton.addEventListener("click", () => {
  if (sidebar.style.right === "-250px" || sidebar.style.right === "") {
    sidebar.style.right = "0"; 
  } else {
    closeSidebar();
  }
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && event.target !== menuButton) {
    closeSidebar();
  }
});
