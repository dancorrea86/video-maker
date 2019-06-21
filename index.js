const readline = require('readline-sync')

function start() {
	const content = {}

	content.searchterm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	function askAndReturnSearchTerm() {
		return readline.question('Type a Wikipedia search term: ')
	}

	function askAndReturnPrefix() {
		const prefixes = ['Who is', 'What is', 'The histoty of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose on option: ' )
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
		
	}


	console.log(content)
}

start()

