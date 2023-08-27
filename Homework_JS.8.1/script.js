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


const students = xmlDOM.querySelectorAll("student");


for (const el of students) {
  let naMe = el.quesySelector("name")
  let nameFirst = el.querySelector("first");
  let nameSecond = el.querySelector("second");
  let age = students.querySelector("age");
  let prof = students.querySelector("prof");
  let lang = students.getAttribute("lang");

  let result = {
    age: age.textContent,
    prof: prof.textContent,
    lang: lang.textContent,
  }
  
  console.log(result)
  
}
      




