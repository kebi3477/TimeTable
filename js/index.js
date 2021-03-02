try {
    const timeTable = JSON.parse(localStorage.getItem("timeTable"));
    const timetable = document.querySelector(".timetable");
    
    timeTable && timeTable.forEach(data => {
        const timetableCol = document.createElement("div");
        timetableCol.classList.add("timetable-col");
        timetableCol.innerHTML = `
            <div>${data.day}</div>
            <div style="background-color : ${data.first.color}">${data.first.class}</div>
            <div style="background-color : ${data.second.color}">${data.second.class}</div>
            <div style="background-color : ${data.third.color}">${data.third.class}</div>
            <div style="background-color : ${data.forth.color}">${data.forth.class}</div>
            <div style="background-color : ${data.fivth.color}">${data.fivth.class}</div>
            <div style="background-color : ${data.sixth.color}">${data.sixth.class}</div>
            <div style="background-color : ${data.seventh.color}">${data.seventh.class}</div>
            <div style="background-color : ${data.eighth.color}">${data.eighth.class}</div>
        `;
        timetable.append(timetableCol)
    })
    refine();
} catch(e) {
    console.error(e);
}

function refine() {
    const timeTableCols = document.querySelectorAll(".timetable-col");
    timeTableCols.forEach(el => {
        const divs = el.querySelectorAll("div");
        let preName = "";
        divs.forEach(div => {
            console.log(div);
            if(preName === "") {
                preName = div.textContent
            } else if(preName === div.textContent){
                div.innerText = "";
            } else {
                preName = div.textContent
            }
        })
    })
}