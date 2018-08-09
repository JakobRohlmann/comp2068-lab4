function addSpecForm() {
  let specTemp = document.querySelector('#book_specification');
  let insertPnt = document.querySelector('#book_specifications');

  let clone = document.importNode(specTemp.content, true);

  insertPnt.appendChild(clone);
}

function delSpecForm(event) {
  event.target.parentNode.remove();
}
