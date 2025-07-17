document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone-input");

  phoneInput.addEventListener("input", function (e) {
    let value = this.value.replace(/\D/g, "");

    let formattedValue = "+7 ";

    if (value.length > 1) {
      value = value.substring(1);

      if (value.length > 0) {
        formattedValue += value.substring(0, 3);
      }
      if (value.length > 3) {
        formattedValue += ` ${value.substring(3, 6)}`;
      }
      if (value.length > 6) {
        formattedValue += ` ${value.substring(6, 8)}`;
      }
      if (value.length > 8) {
        formattedValue += ` ${value.substring(8, 10)}`;
      }
    }

    this.value = formattedValue;
  });

  phoneInput.addEventListener("keydown", function (e) {
    if (
      [46, 8, 9, 27, 13].includes(e.keyCode) ||
      (e.keyCode == 65 && e.ctrlKey === true) ||
      (e.keyCode == 67 && e.ctrlKey === true) ||
      (e.keyCode == 86 && e.ctrlKey === true) ||
      (e.keyCode == 88 && e.ctrlKey === true) ||
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      return;
    }

    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });
});
