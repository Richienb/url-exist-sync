"use strict"

const isUrl = require("is-url-superb")
const retus = require("retus").create({
	throwHttpErrors: false,
})

module.exports = (url) => {
	if (!isUrl(url)) return false
	try {
		const { statusCode } = retus.head(url)
		return !/4\d\d/.test(statusCode)
	} catch (_) {
		return false
	}
}
