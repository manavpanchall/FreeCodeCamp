const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
	const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	const reversedStr = formattedStr.split("").reverse().join("");
	return formattedStr === reversedStr;
}

function checkBtn(event) {
	event.preventDefault();
	const inputValue = textInput.value.trim();
	if (!inputValue) {
		alert("Please input a value");
		return;
	}
	result.classList.remove("hidden");
	result.innerText = inputValue + (isPalindrome(inputValue) ? " is a palindrome" : " is not a palindrome");
}

textInput.addEventListener("input", () => result.classList.add("hidden"));
checkButton.addEventListener("click", checkBtn);
