function stringChop(str, size) {
  // Return an empty array if the input string is null or size is invalid
  if (!str || size <= 0) {
    return [];
  }

  let chunks = [];
  // Loop through the string and create chunks
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size)); // Slice the string into chunks
  }

  return chunks; // Return the array of chunks
}

// Do not change the code below
const str = prompt("Enter String."); // Prompt user to enter a string
const size = parseInt(prompt("Enter Chunk Size."), 10); // Prompt user for chunk size
alert(stringChop(str, size)); // Alert the resulting chunks as an array
