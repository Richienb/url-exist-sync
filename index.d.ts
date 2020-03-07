/**
 * Synchronously check if a URL exists.
 * @param url The URL to check.
 * @example
 * ```
 * const urlExistSync = require("url-exist");
 *
 * urlExistSync("https://google.com");
 * //=> true
 *
 * urlExistSync("https://google.com/404ingURL");
 * //=> false
 *
 * urlExistSync("notaurl");
 * //=> false
 * ```
*/
declare function urlExistSync(url: string): boolean

export = urlExistSync
