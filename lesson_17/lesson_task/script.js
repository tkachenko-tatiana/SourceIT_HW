const listMain = document.getElementById('list-main');

function adding () {
  const liMain = document.createElement('li');
  const listData = document.getElementById('list-input').value;
  // add data
  liMain.innerHTML = listData;
  // add to ul
  listMain.appendChild(liMain);
}

document.getElementById('list-btn').addEventListener('click', adding);
