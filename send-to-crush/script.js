const simBtn = document.querySelector(".sim-btn");
const naoBtn = document.querySelector(".nao-btn");
const question = document.querySelector(".pergunta");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
simBtn.addEventListener("click", () => {
  question.innerHTML = "Parece que vc gamou 😘";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// Make the No button move randomly on hover
naoBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = naoBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  naoBtn.style.left = randomX + "px";
  naoBtn.style.top = randomY + "px";
});
