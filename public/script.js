async function diningHall () {
  const dinHallReq = await fetch('/api/dining');
  const dinHallData = await dinHallReq.json();
  const dinArray = dinHallData.data;
  console.log(dinArray);
  const ttable = document.querySelector('.ttable');

  dinArray.forEach((element) => {
    console.log(element.dining);
    console.log(element.hall_address);
    const appEle = document.createElement('tr');
    appEle.innerHTML = `
                <td>${element.hall_id}</td>
                <td>${element.hall_name}</td>
                <td>${element.hall_address}</td>
            </tr>
        `;
    ttable.append(appEle);
  });
}
window.onload = diningHall();
