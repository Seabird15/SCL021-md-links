#!/usr/bin/env node
//constantes importadas
const fs = require("fs");
const path = require("path");
//const { readFileSync } = require("node:fs");
//const { argv } = require("node:process");
//const parseMD = require("parse-md").default;
//const fetch = require("node-fetch");
//const { url } = require("inspector");

//funcion principal

function mdlink (route, options) {
  console.log("hola", route)
  //ruta existe?
  const routeExist = () => fs.existsSync(route);
  console.log(routeExist())
  //es archivo?
  const routeType = (source) => {
    if(source.isFile() === true) {
      return true 
    }
    return false; 
  };
  //leer archivos
  const routeFiles = fs.statSync(route);
  console.log("es archivo? " + routeType(routeFiles));
  
  //archivos de la ruta relativa
  const dir = fs.readdirSync(route, {encoding: "utf8", flag: "r" });
  console.log("estos son los archivos en el directorio" + dir);
  console.log(dir) //muestra todos los archivos del directorio ... 

  //filtro archivo md 
  let array = [];
  function rute(dir) {
    return (array = dir.filter((archivo) => {
      return path.extname(archivo) === ".md";
    }));
  }
  //leer archivos md 
  const arrayMd = rute(dir);
  function readMD(paths) {
    paths.forEach((element)=> {
      const data = fs.readFileSync(element, {encoding: "utf8", flag: "r"});
    });
  }
readMD(arrayMd)
console.log(rute(dir)) //muestra solo los archivos .md que encuentra en el directorio

  function options () {
    if(options === "--stats --validate" || options === "--validate --stats"){
    const total = arrayMd.length
    const uniqueLinks = (source)=> {
      let unique = 0;
      source.forEach((link, index) => {
        if(source.indexOf(link) === index) {
          unique++
        }
      })
      const uniques = uniqueLinks(arrayMd)
    }

  }
}
}


mdlink("./");

module.exports = () => {
  // ...
};
