/* When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API */

const activityName = document.getElementById('activity-name')
const getIdeaButton = document.getElementById('get-idea-btn')
const headerSection = document.getElementById('header-section')

getIdeaButton.addEventListener('click', () => {
	fetch("https://apis.scrimba.com/bored/api/activity")
		.then(response => response.json())
		.then(data => {
			console.log(data)
			activityName.textContent = data.activity
			activityName.classList.add('transition')
			document.getElementById('main-section').style.marginTop = '.75em'
			document.getElementById('subheading').classList.add('transition')
		})
})