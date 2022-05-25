let boxes = document.querySelectorAll(".box");
let areas = document.querySelectorAll(".a");
let id;
boxes.forEach((item) => {
  item.ondragstart = function () {
    id = this.id;
  };
});
areas.forEach((item) => {
  (item.ondragover = function (e) {
    e.preventDefault();
  }),
    (item.ondrop = function () {
      let boxId = document.getElementById(id);
      if (id<=4&&this.id == "a1") {
          this.append(boxId); boxId.style.background="green";
      } else if (id>=5&&id<=8&&this.id == "a2") {
          this.append(boxId); boxId.style.background="green";
        }
       else if (id>=9&&this.id == "a3") {
          this.append(boxId); boxId.style.background="green";
      }
      else{
        boxId.style.background="red";
      }
    });
});
