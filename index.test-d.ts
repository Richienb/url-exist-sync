import { expectType } from "tsd"
import urlExistSync from "./index.js"

expectType<boolean>(urlExistSync("https://google.com"))
