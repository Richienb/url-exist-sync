import test from "ava"
import urlExistSync from "./index.js"

test("main", t => {
	t.true(urlExistSync("https://httpbin.org/status/200"))

	t.true(urlExistSync("https://httpbin.org/status/300"))

	t.false(urlExistSync("https://httpbin.org/status/404"))

	t.false(urlExistSync("notaurl"))

	t.false(urlExistSync("https://aurlthatprobablydoesnotexist.co"))
})
