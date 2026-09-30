// Open (or create) the database with the version 1
let db;
const request = indexedDB.open('exampleProductDB', 1);

request.onerror = function(event) {
    console.error("Database error: ", event.target.error);
};

request.onsuccess = function(event) {
    db = event.target.result;
    loadProductTable(); // Load products after the database is opened
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    db.createObjectStore('products', { keyPath: 'id' });
};

// ===== Modal: abrir y cerrar el formulario de productos =====
const modalOverlay = document.getElementById('modalOverlay');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');

function openModal() {
    modalOverlay.classList.add('active');
    nameInput.focus();
}

function closeModal() {
    modalOverlay.classList.remove('active');
    //Clear the form fields
    nameInput.value = '';
    priceInput.value = '';
}

document.getElementById('openModalBtn').addEventListener('click', openModal);
document.getElementById('closeModalBtn').addEventListener('click', closeModal);
document.getElementById('cancelModalBtn').addEventListener('click', closeModal);

//Close the modal when clicking outside the window
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

//Close the modal with the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

//Load/Read products from IndexedDB and display them in the table
function loadProductTable() {
    const transaction = db.transaction(['products'], 'readonly');
    const store = transaction.objectStore('products');

    const request = store.getAll();

    request.onsuccess = function(event) {
        const products = event.target.result;
        const tableBody = document.querySelector('#productsTable tbody');
        tableBody.innerHTML = ''; // Clear the table before adding new products

        if (products.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="4" class="empty-state">No products added yet.</td>`;
            tableBody.appendChild(row);
        }

        products.forEach(product => {
            //Create a table row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td><button class="delete-btn" data-id="${product.id}">Delete</button></td>
            `;
            tableBody.appendChild(row);
        });

        //Update the status bar with the product count
        document.getElementById('statusText').textContent =
            products.length + (products.length === 1 ? ' product' : ' products');

    //Add event listeners for delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteProduct);
        });
    };
}

//Add/Create a new product
function addProduct() {
    const name = document.getElementById('name').value.trim();
    const price = parseFloat(document.getElementById('price').value);

    //Validate inputs
    if (!name || isNaN(price) || price <= 0) {
        alert("Please enter a valid name and price.");
        return;
    }

    const transaction = db.transaction(['products'], 'readwrite');
    const store = transaction.objectStore('products');

    //Get/Read the products
    const getAllRequest = store.getAll();

    getAllRequest.onsuccess = function(event) {
        const products = event.target.result;
        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1, // Assign an incremental ID
            name: name,
            price: price
        };

    //Add/Create the new product to the DB
        store.add(newProduct);

    //Update the table with the new product
        loadProductTable();

    //Close the modal (it also clears the form fields)
        closeModal();
    };
}

//Delete a product
function deleteProduct(event) {
    const productId = parseInt(event.target.getAttribute('data-id')); // Get the product ID from the button's data attribute
    const transaction = db.transaction(['products'], 'readwrite');
    const store = transaction.objectStore('products');

    //Delete the product with the corresponding ID
    store.delete(productId);

    //Reload the product table to reflect changes
    loadProductTable();
}

//Event listener for the button click
document.getElementById('addProduct').addEventListener('click', addProduct);

//Allow pressing Enter inside the modal inputs to add the product
[nameInput, priceInput].forEach(input => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addProduct();
        }
    });
});
