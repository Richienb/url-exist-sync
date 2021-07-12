/**
Synchronously check if a URL exists.

@param url The URL to check.

@example
```
import urlExistSync from "url-exist-sync"

urlExistSync("https://google.com")
//=> true

urlExistSync("https://google.com/404ingURL")
//=> false

urlExistSync("notaurl")
//=> false
```
*/
export default function urlExistSync(url: string): boolean
