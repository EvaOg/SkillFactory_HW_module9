
const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`;

const jsData = JSON.parse(jsonString); 
console.log(typeof jsData)

const listJS = jsData.list;
console.log(listJS)

const result = {
  list: listJS
}  

console.log(result)
