const user = netlifyIdentity.currentUser();
const hidePortfolios = () => {
	// Todo: Remove the "selected" class from all buttons with the class of "portfolioButton"
 const myButtons = document.querySelectorAll(".portfolioButton")
 const myButtonsArray = Array.from(myButtons)
 myButtonsArray.forEach(element => element.classList.remove("selected"))

	// "all portfolio divs" ==> get all elements with the class of "preview"
	const myElements = document.getElementsByClassName("preview")
	// a list of DOM elements
	
	const myElementsArray = Array.from(myElements)
	// a Javascript Array



	// how do we hide them? We give them the "hide" class	
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	myElementsArray.forEach(element  => element.classList.add("hide"))
}

const showPortfolio = (event) => {
	hidePortfolios()		
	const clickedElementId = `#${event.target.id}`


	// Todo: Add the "selected" class to whichever button was clicked
	// document.getElementById(clickedElementId).doSomething???
	document.querySelector(clickedElementId).classList.add("selected")
  

	// Find out which portfolio to show
	// ^ What property can we use to detect which portfolio we need to show?
	const portfolioToShow = `${clickedElementId}wrapper`

	// show that portfolio div
	// portfolioToShow ==> classname ==> remove class "hide"
	document.querySelector(portfolioToShow).classList.remove("hide")
}
hidePortfolios()

document.getElementById("portfolio1").onclick = showPortfolio
document.getElementById("portfolio2").onclick = showPortfolio
document.getElementById("portfolio3").onclick = showPortfolio


document.getElementById("portfolio1").click()



