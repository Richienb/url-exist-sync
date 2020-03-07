"use strict"

const isUrl = require("is-url-superb")
const request = require("sync-request")

module.exports = (url) => {
	if (!isUrl(url)) return false
	try {
		const res = request("HEAD", url)
		return !/4\d\d/.test(res.statusCode)
	} catch (_) {
		return false
	}
}
