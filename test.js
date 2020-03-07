const test = require("ava")
const urlExistSync = require(".")

test("main", (t) => {
	t.true(urlExistSync("https://httpbin.org/status/200"))

	t.true(urlExistSync("https://httpbin.org/status/301"))

	t.false(urlExistSync("https://httpbin.org/status/404"))

	t.false(urlExistSync("notaurl"))

	t.false(urlExistSync("https://aurlthatprobablydoesnotexist.co"))
})
