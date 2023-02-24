<script>
  fetch("https://cors-anywhere.herokuapp.com/https://www.nasdaq.com/api/v1/historical/QYLD/dividends?limit=20&sort=declarationDate|desc")
    .then(response => response.json())
    .then(data => {
      let html = "";
      data.data.forEach(dividend => {
        const date = new Date(dividend.declarationDate).toLocaleDateString();
        html += `<tr><td>${date}</td><td>$${dividend.amount}</td></tr>`;
      });
      document.getElementById("dividend-history").innerHTML = html;
    });
</script>
