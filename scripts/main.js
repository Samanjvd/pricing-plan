let elementButton = document.querySelector(" .button-navigation");
let elementMonthly = document.querySelector(" .monthly");
let elementAnnually = document.querySelector(" .annually ");
let elementDate = document.querySelectorAll(".date");
let elPrice = document.querySelectorAll(".price");

elementAnnually.addEventListener("click", function () {
  elementButton.style.transform = `translateX(81px)`;
  elementAnnually.style.color = `#fff`;
  elementMonthly.style.color = `#000`;
  elPrice[0].innerHTML = "$320";
  elPrice[1].innerHTML = "$420";
  elPrice[2].innerHTML = "$520";
  // elPrice.forEach(function (item) {
  //   item.innerHTML = "$320";
  // });
  elementDate.forEach(function (item) {
    item.innerHTML = "/Year";
  });
});

elementMonthly.addEventListener("click", function () {
  elementButton.style.transform = `translateX(-81px)`;
  elementAnnually.style.color = `#000`;
  elementMonthly.style.color = `#fff`;
  elPrice[0].innerHTML = "$120";
  elPrice[1].innerHTML = "$220";
  elPrice[2].innerHTML = "$350";
  // elPrice.forEach(function (item) {
  //   item.innerHTML = "$125";
  // });
  elementDate.forEach(function (item) {
    item.innerHTML = "/Month";
  });
});
