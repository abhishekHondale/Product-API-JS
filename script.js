let divcontainer = document.getElementById("container");
      let searchInput = document.getElementById("searchInput");
      let productsData = [];

      // Fetch and display products
      let product = async () => {
        let data = await fetch('https://dummyjson.com/products/search?q=phone');
        let finaldata = await data.json();
        console.log(finaldata)
        productsData = finaldata.products;
        displayProducts(productsData); // Display all products initially
      };

      // Function to display products
      let displayProducts = (products) => {
        divcontainer.innerHTML = ""; // Clear previous content
        products.forEach(({ title, thumbnail, price, brand }) => {
          divcontainer.innerHTML += `
            <div class="card">
              <img src="${thumbnail}" alt="${title}">
              <h2>${title}</h2>
              <p>$${price}</p>
              <p>Brand: ${brand}</p>
            </div>`;
        });
      };

      // Search functionality
      searchInput.addEventListener("input", () => {
        let searchValue = searchInput.value.toLowerCase();
        let filteredProducts = productsData.filter((product) =>
          product.title.toLowerCase().includes(searchValue)
        );
        displayProducts(filteredProducts); // Display only filtered products
      });
      product(); // Initial fetch