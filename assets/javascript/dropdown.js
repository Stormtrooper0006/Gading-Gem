function showDropBtnContent() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".drop_button")) {
    let dropdown = document.getElementsByClassName("dropdown_content");

    for (let i = 0; i < dropdown.length; i++) {
      let showDropdown = dropdown[i];

      if (showDropdown.classList.contains("show")) {
        showDropdown.classList.remove("show");
      }
    }
  }
};
