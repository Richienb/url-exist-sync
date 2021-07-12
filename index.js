import isUrl from "is-url-superb"
import retus from "retus"

export default function urlExistSync(url) {
	if (!isUrl(url)) {
		return false
	}

	try {
		const { statusCode } = retus.head(url, {
			throwHttpErrors: false,
		})
		return !/4\d\d/.test(statusCode)
	} catch {
		return false
	}
}
