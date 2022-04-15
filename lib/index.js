import { mkdirSync, writeFileSync, existsSync } from "fs";
import { question } from "readline-sync";

export const fun = () => {
  const projectName = question("Qual o nome do projeto(pasta): ");

  if (existsSync(`./${projectName}`)) {
    return console.log("Diretório já existe.");
  }

  mkdirSync(`./${projectName}`);
  mkdirSync(`./${projectName}/config`);
  mkdirSync(`./${projectName}/controllers`);
  mkdirSync(`./${projectName}/middlewares`);
  mkdirSync(`./${projectName}/models`);
  mkdirSync(`./${projectName}/public`);
  mkdirSync(`./${projectName}/routes`);
  mkdirSync(`./${projectName}/views`);

  const indexFile = `const express = require('express')
  const app = express()
  const port = 3000

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log("http://localhost:3000")
  })`;

  const gitIgnore = `node_modules/`;

  const readme = `#${projectName}
A project created by my lib.`;

  writeFileSync(`./${projectName}/index.js`, indexFile, "utf8");
  writeFileSync(`./${projectName}/.gitignore`, gitIgnore, "utf8");
  writeFileSync(`./${projectName}/README.md`, readme, "utf8");
};
