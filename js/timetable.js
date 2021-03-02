if(localStorage.getItem("timeTable") === null) {
    localStorage.setItem("timeTable", "[]");
} else {
    const kjm1 = {
        class : "정보시스템<br>구축관리",
        name : '김종민',
        color : '#e1bdd3'
    }
    const kkm = {
        class : "디지털콘텐츠디자인",
        name : '김경모',
        color : '#e7aabc'
    }
    const kyy = {
        class : "온라인광고컨텐츠제작",
        name : '김은영',
        color : '#e8df9e'
    }
    const jys = {
        class : "소프트웨어 공학",
        name : "진용석",
        color : '#a1cdc3'
    }
    const timeTable = [
        {
            "day" : "월요일",
            "first" : "",
            "second" : kjm1,
            "third" : kjm1,
            "forth" : "",
            "fivth" : kkm,
            "sixth" : kkm,
            "seventh" : kkm,
            "eighth" : ""
        }, {
            "day" : "화요일",
            "first" : kyy,
            "second" : kyy,
            "third" : kyy,
            "forth" : "",
            "fivth" : jys,
            "sixth" : jys,
            "seventh" : "",
            "eighth" : ""
        }, {
            "day" : "수요일",
            "first" : kyy,
            "second" : kyy,
            "third" : kyy,
            "forth" : "",
            "fivth" : jys,
            "sixth" : jys,
            "seventh" : "",
            "eighth" : ""
        }, {
            "day" : "목요일",
            "first" : kyy,
            "second" : kyy,
            "third" : kyy,
            "forth" : "",
            "fivth" : jys,
            "sixth" : jys,
            "seventh" : "",
            "eighth" : ""
        }, {
            "day" : "금요일",
            "first" : kyy,
            "second" : kyy,
            "third" : kyy,
            "forth" : "",
            "fivth" : jys,
            "sixth" : jys,
            "seventh" : "",
            "eighth" : ""
        }
    ]
    localStorage.setItem("timeTable", JSON.stringify(timeTable));
}