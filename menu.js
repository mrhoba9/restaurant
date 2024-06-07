/*search starts*/
const search_input = document.getElementById("first-part-search");
const result_input = document.getElementById("first-part-result");

function updateResult() {
	let query = search_input.value.trim();
	query = query.replace(/[<>'"!=();/]/g, "");
	result_input.value = `Your Result Is '${query} '`;
	updateURL(query.toLowerCase());
	filterFoodCards(query.toLowerCase());
}
function updateVisibility() {
	const query = search_input.value.toLowerCase();
	updateURL(query);
	filterFoodCards(query);
}
function updateURL(query) {
	const newUrl = query ? `?search=${encodeURIComponent(query)}` : "";
	history.replaceState(null, "", newUrl);
}
search_input.addEventListener("input", updateVisibility);
document.addEventListener("keydown", function (event) {
	if (event.target === search_input && event.key === "Enter") {
		updateResult();
	}
});
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get("search");
if (searchQuery) {
	search_input.value = searchQuery;
	updateVisibility();
}
function filterFoodCards(query) {
	const foodCards = document.querySelectorAll(".food-card");
	foodCards.forEach((card) => {
		const dishNameElem = card.querySelector(".second-part-div2-name");
		if (dishNameElem.innerText.toLowerCase().includes(query)) {
			card.style.display = "";
		} else {
			card.style.display = "none";
		}
	});
}

/*search ends */
document
	.getElementById("second-part-submit")
	.addEventListener("click", createDish);

function createDish() {
	// Get the values from the input fields
	const dishName = document.getElementById("second-part-dish").value;
	const imageUrl = document.getElementById("second-part-url").value;
	const recipe = document.getElementById("second-part-recipe").value;
	const price = document.getElementById("second-part-price").value;
	const userName = document.getElementById("second-part-name").value;

	// Create a new food card
	const foodCard = document.createElement("div");
	foodCard.className = "food-card";

	const dishNameElem = document.createElement("p");
	dishNameElem.className = "second-part-div2-name";
	dishNameElem.innerText = dishName;

	const imageElem = document.createElement("img");
	imageElem.className = "second-part-div2-img";
	imageElem.src = imageUrl;

	const recipeElem = document.createElement("p");
	recipeElem.className = "second-part-div2-recipe";
	recipeElem.innerText = recipe;

	const priceElem = document.createElement("p");
	priceElem.className = "second-part-div2-price";
	priceElem.innerText = price;

	const userElem = document.createElement("p");
	userElem.className = "second-part-div2-user";
	userElem.innerText = userName;

	// Append all elements to the food card
	foodCard.appendChild(dishNameElem);
	foodCard.appendChild(imageElem);
	foodCard.appendChild(recipeElem);
	foodCard.appendChild(priceElem);
	foodCard.appendChild(userElem);

	// Append the new food card to the second part div2
	document.getElementById("second-part-div2").appendChild(foodCard);

	// Optionally, clear the form fields after submission
	document.getElementById("second-part-dish").value = "";
	document.getElementById("second-part-url").value = "";
	document.getElementById("second-part-recipe").value = "";
	document.getElementById("second-part-price").value = "";
	document.getElementById("second-part-name").value = "";
}
submit.onclick = () => {
	createDish();
};
