# 🪀 Registry AppPaths 🗃

🪀 A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt. 🗃

<br>

<blockquote align="center">
<em>Uses reg.exe, <strong>WINDOWS ONLY!</strong></em>
</blockquote>

<br>
<br>

<div align="center">
	<blockquote>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/registry-apppaths"
```

<br>

## 🤹🏼 API


`.get(): string[]`

Returns an array of sub-keys located in the AppPaths key.

```ts
import { get } from '@igor.dvlpr/registry-apppaths'
const apps: string[] = get()

console.log(apps)

// ['chrome.exe', 'firefox.exe', 'opera.exe'...]
```

<br>

`.has(list: string[]): boolean[]`

Returns an array of Booleans indicating whether the entries of the parameter **list** are installed on the system.

```js
import { has } from '@igor.dvlpr/registry-apppaths'
const has: boolean[] = has(['chrome.exe', 'winword.exe', 'mspaintTYPO.exe'])

console.log(has)

// [true, true, false]
```

<br>

`.refresh(): void`

Force refresh the info from the registry, instead of retrieving the cached data.

```js
import { get } from '@igor.dvlpr/registry-apppaths'
let apps: string[] = appPaths.get()

console.log(apps)

// ['chrome.exe', 'firefox.exe', 'opera.exe'...]

// application install...
// we installed Word for example

appPaths.refresh()

apps = appPaths.get()

console.log(apps)

// ['chrome.exe', 'firefox.exe', 'opera.exe', 'winword.exe'...]
```

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-registry-apppaths/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/pathexists](https://www.npmjs.com/package/@igor.dvlpr/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

[@igor.dvlpr/valid-path](https://www.npmjs.com/package/@igor.dvlpr/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

[@igor.dvlpr/unc-path](https://www.npmjs.com/package/@igor.dvlpr/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

[@igor.dvlpr/extendable-string](https://www.npmjs.com/package/@igor.dvlpr/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

[@igor.dvlpr/mp3size](https://www.npmjs.com/package/@igor.dvlpr/mp3size)

> _🧮 Calculates an estimated file size of Mp3 files. 🎶_

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
