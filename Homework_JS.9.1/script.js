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


for (const student of students) {
  let naMe = student.quesySelector("name")
  let nameFirst = naMe.querySelector("first").textContent;
  let nameSecond = naMe.querySelector("second").textContent;
  let fullName = `${nameFirst} ${nameSecond}`
  let age = student.querySelector("age");
  let prof = student.querySelector("prof");
  let lang = student.getAttribute("lang");

  let result = {
    name: fullName,
    age: age.textContent,
    prof: prof.textContent,
    lang: lang.textContent,
  }
  
  console.log(result)
  
}