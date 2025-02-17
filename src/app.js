// Initialize an empty array to hold the bucket list items.
var bucketList = [];
// Getting the container element where the bucket list items will be displayed.
var listItem = document.getElementById('list-container');

/**
 * Function to add values to the bucket list.
 * This function retrieves the value entered by the user in the input field, 
 * adds it to the 'bucketList' array, and updates the displayed list by calling 'showList()'.
 */
// Step 1: Get the value entered by the user in the input field.
// Use 'document.getElementById' to get the value from the input field.
// retrieve the value from the input field
// Step 2: Add this value to the 'bucketList' array.
// Step 3: Call the function 'showList()' to update the displayed list.


function addValues() {
 values = document.getElementById("values");
 

}

/**
 * Function to remove an item from the bucket list.
 * This function removes the item at index 'i' from the 'bucketList' array and updates the displayed list.
 */

// Step 4: Use 'splice()' to remove the item at index 'i' from the array.
// 'splice()' takes two arguments: the index and the number of items to remove.
// Step 5: Update the displayed list after the item is removed by calling 'showList()'.
function remove(i) {
 
}
/**
 * Function to display the bucket list on the webpage.
 * This function clears the current list in the 'listItem' container and adds updated list items with remove buttons.
 */

// Step 6: Clear the existing HTML content of the 'listItem' container to avoid duplicates.
// Step 7: Loop through the 'bucketList' array and create a new <li> element for each item.
 // Step 8: Set the inner HTML of the <li> element to display the bucket list item.
// Also, include an image element with an onclick event that calls 'remove()' to remove the item.
// Add a class name to the <li> element for styling.
 // Step 9: Append the <li> element to the 'listItem' container so it appears on the webpage.
function showList(){

  
}
/**
 * Function to reset the bucket list.
 * This function clears the 'bucketList' array and updates the displayed list.
 */

// Step 10: Clear the 'bucketList' array by setting it to an empty array.
 // Step 11: Update the displayed list by calling 'showList()'.
function reset() {
  
}
