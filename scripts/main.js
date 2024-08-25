let elementButton = document.querySelector(" .button-navigation");
let elementMonthly = document.querySelector(" .monthly");
let elementAnnually = document.querySelector(" .annually ");
let elementDate = document.querySelectorAll(".date");
let elPrice = document.querySelectorAll(".price");

elementAnnually.addEventListener("click", function () {
  elementButton.style.transform = `translateX(81px)`;
  elementAnnually.style.color = `#fff`;
  elementMonthly.style.color = `#000`;
  elPrice.forEach(function (item) {
    item.innerHTML = "$320";
  });
  elementDate.forEach(function (item) {
    item.innerHTML = "/Year";
  });
});

elementMonthly.addEventListener("click", function () {
  elementButton.style.transform = `translateX(-81px)`;
  elementAnnually.style.color = `#000`;
  elementMonthly.style.color = `#fff`;
  elPrice.forEach(function (item) {
    item.innerHTML = "$125";
  });
  elementDate.forEach(function (item) {
    item.innerHTML = "/Month";
  });
});
