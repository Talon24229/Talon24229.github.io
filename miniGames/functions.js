function getData() {
	let currentData = JSON.parse(localStorage.getItem('gameData'))
	let newData = {}
	changed = false

	if (!currentData)
		currentData = {}

	if (!currentData.LemonadeClown) {
		changed = true
		newData.LemonadeClown = {
			normal: {
				highScore: 0
			},
			endless: {
				highScore: 0
			},
			timed: {
				highScore: 0
			}
		}
	}
	else newData.LemonadeClown = currentData.LemonadeClown

	if (!currentData.fruitPunchClown) {
		changed = true
		newData.fruitPunchClown = {
			normal: {
				highScore: 0
			},
			endless: {
				highScore: 0
			},
			timed: {
				highScore: 0
			}
		}
	}
	else newData.fruitPunchClown = currentData.fruitPunchClown

	if (!currentData.SLNight4) {
		changed = true
		newData.SLNight4 = {
			highScore: 0
		}
	}
	else newData.SLNight4 = currentData.SLNight4

	if (!currentData.Trap) {
		changed = true
		newData.Trap = {
			plushWon: false,
			bbWon: false
		}
	}
	else newData.Trap = currentData.Trap

	if (changed) {
		sendData(newData)
	}

	return (newData)
}

function sendData(variable) {
	localStorage.setItem('gameData', JSON.stringify(variable))
}