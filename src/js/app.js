const markAllRead = document.querySelector(".notification__reader");
const dots = document.querySelectorAll(".dot");
const notificationNumber = document.querySelector(".notification__number");

const unreadNotifications = document.querySelectorAll(".notification--unread");

markAllRead.addEventListener("click", function () {
  unreadNotifications.forEach((notification) => {
    notification.classList.add("read");
  });
  dots.forEach((dot) => {
    dot.classList.add("hide");
  });
  notificationNumber.textContent = 0;
});
