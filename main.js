let evalBtn = document.querySelectorAll(".button");
let submitBtn = document.querySelector(".btn");
let backBtn = document.querySelector(".back-btn");
let section1 = document.querySelector('.query');
let section2 = document.querySelector('.thank-you');
let queryReturn = document.querySelector('.query-return');
let rating;


evalBtn.forEach((item) =>
  item.addEventListener("click", (e) => {
    rating = item.value;
    item.style.backgroundColor = "hsl(25, 97%, 53%)";
    cancelPrevious();
  }));

evalBtn.forEach((item) =>{
  item.addEventListener("mouseover", (e) => {
    item.style.backgroundColor = 'hsl(216, 12%, 54%)';
  })
})


function cancelPrevious() {
  evalBtn.forEach((item) => {
    if (item.value !== rating) {
      item.style.backgroundColor = "var(--circle)";
      item.addEventListener("mouseout", (e) => {
        item.style.backgroundColor = "var(--circle)";
      });
    }
    else{
      item.addEventListener("mouseout", (e) => {
        item.style.backgroundColor = "hsl(25, 97%, 53%)";
      });
    }
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (rating) {
    section1.style.display = 'none';
    section2.style.display = 'block';
    queryReturn.textContent = `You selected ${rating} out of 5`
  }
});

backBtn.addEventListener("click", (e) => {
  section1.style.display = 'block';
  section2.style.display = 'none';
});