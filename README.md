<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-registry-apppaths/main/media/registry-apppaths.png" alt="Icon of Registry AppPaths" width="256" height="256">
  <h1>Registry AppPaths</h1>
</div>

<br>

<h4 align="center">
  🪀 A package for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt. 🗃
</h4>

<br>

> 🛑 **CAUTION**
>
> *WINDOWS ONLY*
>
> This package uses `reg.exe` under the hood, thus, only works on Windows OS.
>

<br>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

⚡ Instant results - reads Windows App Paths registry keys synchronously
🗂 Full list retrieval - grab all registered app paths in one call
🧠 Smart caching - avoids repeated registry lookups for faster performance
🔄 Force refresh - bypass cache when you need the latest data
🔍 Key presence check - verify if specific apps are registered
🔠 Case sensitivity option - match keys exactly or loosely
🧹 Cache clear - reset stored results anytime
💻 Windows-only - throws error if run on non‑Windows systems

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/registry-apppaths
```

```bash
yarn add @igorskyflyer/registry-apppaths
```

```bash
npm i @igorskyflyer/registry-apppaths
```

<br>
<br>

## 🤹🏼 API


`getAppPaths(): string[]`

Returns an array of sub-keys located in the AppPaths key.

```ts
import { getAppPaths } from '@igorskyflyer/registry-apppaths'

const apps: string[] = getAppPaths()

console.log(apps) // ['chrome.exe', 'firefox.exe', 'opera.exe'...]
```

<br>

`hasAppPaths(list: string[]): boolean[]`

Returns an array of Booleans indicating whether the entries of the parameter **list** are installed on the system.

```ts
import { hasAppPaths } from '@igorskyflyer/registry-apppaths'

const has: boolean[] = hasAppPaths(['chrome.exe', 'winword.exe', 'mspaintTYPO.exe'])

console.log(has) // [true, true, false]
```

<br>

`refreshAppPaths(): void`

Force refresh the info from the registry, instead of retrieving the cached data.

```ts
import { getAppPaths, refreshAppPaths } from '@igorskyflyer/registry-apppaths'

let apps: string[] = getAppPaths()

console.log(apps) // ['chrome.exe', 'firefox.exe', 'opera.exe'...]

// application install...
// we installed Word for example

refreshAppPaths()

apps = getAppPaths()

console.log(apps) // ['chrome.exe', 'firefox.exe', 'opera.exe', 'winword.exe'...]
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-registry-apppaths/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-registry-apppaths/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/pathexists](https://www.npmjs.com/package/@igorskyflyer/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

[@igorskyflyer/valid-path](https://www.npmjs.com/package/@igorskyflyer/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

[@igorskyflyer/unc-path](https://www.npmjs.com/package/@igorskyflyer/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

[@igorskyflyer/extendable-string](https://www.npmjs.com/package/@igorskyflyer/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

[@igorskyflyer/mp3size](https://www.npmjs.com/package/@igorskyflyer/mp3size)

> _🧮 Calculates an estimated file size of Mp3 files. 🎶_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
