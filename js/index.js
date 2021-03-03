const detailClass = document.querySelector(".detail-class");
try {
    const timeTable = JSON.parse(localStorage.getItem("timeTable"));
    const timetable = document.querySelector(".timetable");
    
    timeTable && timeTable.forEach(data => {
        const timetableCol = document.createElement("div");
        timetableCol.classList.add("timetable-col");
        data.classes.forEach((cla, index) => {
            const div = document.createElement("div");
            if(index === 0) {
                div.innerText = data.day;
                div.addEventListener("mouseover", function(e) {
                    detailClass.style.opacity = 0;
                })
            } else if(cla.class === undefined) {
                div.addEventListener("mouseover", function(e) {
                    detailClass.style.opacity = 0;
                })
            } else {
                div.innerText = cla.class;
                div.style.backgroundColor = cla.color;
                div.addEventListener("mouseover", function(e) {
                    showDetailClass(cla)
                    e.preventDefault();
                })
            }
            timetableCol.append(div);
        })
        timetable.append(timetableCol);
    })
    refine();
} catch(e) {
    console.error(e);
}
window.addEventListener("mousemove", function(e) {
    detailClass.style.transform = `translate(${e.clientX+10}px, ${e.clientY+10}px)`;
})

function refine() {
    const timeTableCols = document.querySelectorAll(".timetable-col");
    timeTableCols.forEach(el => {
        const divs = el.querySelectorAll("div");
        let preName = "";
        divs.forEach(div => {
            if(preName === "") {
                preName = div.textContent;
            } else if(preName === div.textContent) {
                div.innerText = "";
            } else if(div.textContent === 'undefined') {
                div.innerText = "";
            } else {
                preName = div.textContent;
            }
        });
    });
}

function showDetailClass(json) {
    detailClass.querySelector(".class-name").innerText = json.class;
    detailClass.querySelector(".professor-name").innerText = json.name;
    detailClass.style.opacity = 1;
    detailClass.style.backgroundColor = json.color;
}