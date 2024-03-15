function greet(name: string) {
	// 🐨 Looks like someone has changed the implementation...
	return `Howdy, ${name}!`
}

let message = greet('John')

if (message !== 'Hello, John!') {
	throw new Error(
		`Expected message to equal to "Hello, John!" but got "${message}"`,
	)
}
