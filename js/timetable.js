if(localStorage.getItem("timetable") === null) {
    localStorage.setItem("timetable", "[]");
} else {
    try {  
        const kjm1 = {
            class : "정보시스템구축관리",
            name : '김종민'
        }
        const kkm = {
            class : "디지털콘텐츠디자인",
            name : '김경모'
        }
        const kyy = {
            class : "온라인광고컨텐츠제작",
            name : '김은영'
        }
        const timetable = {
            "월요일" : {
                "1" : "",
                "2" : kjm1,
                "3" : kjm1,
                "4" : "",
                "5" : kkm,
                "6" : kkm,
                "7" : kkm,
                "8" : ""
            }, "화요일" : {

            }
        }
    } catch(err) {
        console.log(err);
    }
}