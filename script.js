async function fetchData(url) {
  const jsonData = await (await fetch(url)).json();

  const listDataParent = document.querySelector('.main .list-data');

  jsonData.forEach((data) => {
    const { day, amount } = data;

    listDataParent.innerHTML += `
    <li>
      <div class="data" data-amount="$${amount}"></div>
      <p>${day}</p>
     </li>
    `;
  });
}

fetchData('./data.json');
