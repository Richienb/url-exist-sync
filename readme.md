# URL Exists Sync [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/url-exist-sync/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/url-exist-sync)

Synchronously check if a URL exists.

[![NPM Badge](https://nodei.co/npm/url-exist-sync.png)](https://npmjs.com/package/url-exist-sync)

## Use asynchronously

If you are able to run this in an asynchronous context, I highly recommended that you do so with [`url-exist`](https://github.com/Richienb/url-exist) since synchronous web requests can hang/freeze clients.

## Install

```sh
npm install url-exist-sync
```

## Usage

```js
import urlExistSync from "url-exist-sync"

urlExistSync("https://google.com")
//=> true

urlExistSync("https://google.com/404ingURL")
//=> false

urlExistSync("notaurl")
//=> false
```

## API

### urlExistSync(url)

#### url

Type: `string`

The URL to check.

## Related

- [url-exist](https://github.com/Richienb/url-exist) - The asynchronous version.
