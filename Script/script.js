document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('grocery-form');
    const itemInput = document.getElementById('item');
    const quantityInput = document.getElementById('quantity');
    const groceryList = document.getElementById('grocery-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const item = itemInput.value;
        const quantity = quantityInput.value;

        if (item && quantity) {
            const listItem = document.createElement('li');
            listItem.textContent = `${item} - ${quantity}`;
            groceryList.appendChild(listItem);

            itemInput.value = '';
            quantityInput.value = '';
        }
    });
});
