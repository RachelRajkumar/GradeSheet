const subjects = [
    {name:"Mathematics", marks:92},
    {name:"Data Structures", marks:88},
    {name:"Operating Systems", marks:81},
    {name:"Database", marks:76},
    {name:"Computer Networks", marks:84}
];

let total = 0;

subjects.forEach(subject => {

    let grade = "";

    if(subject.marks >= 90)
        grade = "A+";
    else if(subject.marks >= 80)
        grade = "A";
    else if(subject.marks >= 70)
        grade = "B+";
    else if(subject.marks >= 60)
        grade = "B";
    else
        grade = "F";

    total += subject.marks;

    document.getElementById("resultTable").innerHTML += `
        <tr>
            <td>${subject.name}</td>
            <td>${subject.marks}</td>
            <td>${grade}</td>
        </tr>
    `;
});

let percentage = total / subjects.length;

document.getElementById("total").innerText = total;
document.getElementById("percentage").innerText = percentage.toFixed(2);

document.getElementById("result").innerText =
percentage >= 40 ? "PASS" : "FAIL";