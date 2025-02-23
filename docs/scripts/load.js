function budgetSSG(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
          document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

budgetSSG("header", "./html/header.html");
budgetSSG("nav-top", "./html/nav-top.html");
budgetSSG("footer", "./html/footer.html");