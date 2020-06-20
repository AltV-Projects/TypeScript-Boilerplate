# TypeScript-Boilerplate

A basic boilerplate to get started using typescript with alt:V

## Installation

To install all dependencies just enter the following:

```bash
npm i
```

Next change the gamemode name from "**_YOURGAMEMODENAME_**" in 3 files, `tsconfig-client.json`, `tsconfig-server.json` & `package.json`. There are 4 occurrences in total.

## Usage

Best practice is to use 3 terminal windows. (I prefer using [cmder](https://cmder.net/) on Windows)

```js
npm run build:server:watch //Build server files on the fly
npm run build:client:watch //Build client files on the fly
npm run copy:meta // Copy *.html, *.js, *.css - If you want to copy i.E. .jpg you need to add it to this command
```

## Contributing

Pull requests are welcome. For major changes, please [open an issue](/issues) first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
