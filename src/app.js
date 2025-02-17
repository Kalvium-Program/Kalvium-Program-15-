// Initialize an empty array to hold the bucket list items.
var bucketList = [];
// Getting the container element where the bucket list items will be displayed.
var listItem = document.getElementById('list-container');

function addValues() {
    // Step 1: Get the value entered by the user in the input field.
    var inputField = document.getElementById('input-field');
    var value = inputField.value.trim();
    
    // Step 2: Ensure the value is not empty before adding
    if (value !== "") {
        bucketList.push(value); // Add value to the array
        inputField.value = ""; // Clear input field after adding
        showList(); // Step 3: Update the displayed list
    }
}

function remove(i) {
    // Step 4: Remove the item at index 'i' from the array
    bucketList.splice(i, 1);
    showList(); // Step 5: Update the displayed list
}

function showList() {
    // Step 6: Clear the existing HTML content to avoid duplicates
    listItem.innerHTML = "";

    // Step 7: Loop through the 'bucketList' array and create list elements
    bucketList.forEach((item, index) => {
        var li = document.createElement("li");
        li.innerHTML = `${item} <button class='checked' onclick='remove(${index})'>❌</button>`;
        li.className = "list"; // Step 8: Add a class for styling
        listItem.appendChild(li); // Step 9: Append the <li> element to the container
    });
}

function reset() {
    // Step 10: Clear the 'bucketList' array
    bucketList = [];
    showList(); // Step 11: Update the displayed list
}
