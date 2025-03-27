
function matchToy(needle, toy) {
	return match(needle, toy.name) || match(needle, toy.description)
}

function match(needle, haystack) {
	haystack = haystack.toLowerCase()
	needle = needle.toLowerCase()
	return haystack.includes(needle)
}

export { match, matchToy }
