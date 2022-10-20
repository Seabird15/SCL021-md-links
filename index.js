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
  console.log("Ingresaste: ", route)
  //transformar ruta de relativa a absoluta 
  const relativePath = (route) => {
    if(path.isAbsolute(route) === false) {
      return path.resolve(route)
    } return route
  }
//   //ruta existe?
   const routeExist = () => fs.existsSync(relativePath);
   console.log("Ruta ingresada es valida? ")
   console.log(routeExist(route))
//   //es archivo?
   const routeType = (route) => {
     if(route.isFile() === true) {
       return true 
     }
     return false; 
   };
//   //leer archivos
   const routeFiles = fs.statSync(route);
   console.log("Es un archivo? ")
   console.log(routeType(routeFiles));
  
   //archivos de la ruta relativa
   const dir = fs.readdirSync(route, {encoding: "utf8", flag: "r" });
   console.log("Archivos del directorio ingresado: ")
   console.log(dir);
//   console.log(dir) //muestra todos los archivos del directorio ... 

   //filtro archivo md 
   let array = [];
   function rute(dir) {
     return (array = dir.filter((archivo) => {
       return path.extname(archivo) === ".md";
     }));
   }
   //leer los archivos md 
   const arrayMd = rute(dir);
   function readMD(paths) {
     paths.forEach((element)=> {
       const data = fs.readFileSync(element, {encoding: "utf8", flag: "r"});
     });
   }
 //readMD(arrayMd)
 console.log("Archivos .MD encontrados: ")
 console.log(rute(dir)) //muestra solo los archivos .md que encuentra en el directorio
//   //url unicas 
//   function options () {
//     if(options === "--stats --validate" || options === "--validate --stats"){
//     const total = arrayMd.length
//     const uniqueLinks = (source)=> {
//       let unique = 0;
//       source.forEach((link, index) => {
//         if(source.indexOf(link) === index) {
//           unique++
//         }
//       })
//       const uniques = uniqueLinks(arrayMd)
//     }

//   }
// }
}

const arguments = process.argv
console.log({arguments})
//extraer links (?)
//fetch a links


mdlink(arguments[2]);

//new promise

module.exports = () => {
  // ...
};
