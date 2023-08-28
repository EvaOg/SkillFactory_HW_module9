const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
console.log(xmlDOM)

const students = xmlDOM.querySelectorAll("student");
console.log(students);
let arr = [];

for (const student of students) {
  let langNode = student.querySelector("name").getAttribute("lang");
  let nameFirstNode = student.querySelector("name").querySelector("first").textContent;
  let nameSecondNode = student.querySelector("name").querySelector("second").textContent;
  let fullNameNode = `${nameFirstNode} ${nameSecondNode}`;
  let ageNode = student.querySelector("age").textContent;
  console.log(ageNode)
  let profNode = student.querySelector("prof").textContent;

  let result = {
    name: fullNameNode,
    age: ageNode,
    prof: profNode,
    lang: langNode,
  }
  
  console.log(result)
  arr.push(result)
  
}
console.log(arr)