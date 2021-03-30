if(localStorage.getItem("timeTable") === null) {
    localStorage.setItem("timeTable", "[]");
} else {
    const kjm1 = makeClassJson("정보시스템구축관리","김종민","#ffe6e6");
    const kkm = makeClassJson("디지털콘텐츠디자인","김경모","#fff3e2");
    const kyy = makeClassJson("온라인광고컨텐츠제작","김은영","#ccf6c8");
    const jys =  makeClassJson("소프트웨어 공학","진용석","#d2f6c5");
    const kjm2 = makeClassJson("융합프로젝트실습1","김종민","#dbc6eb");
    const hsy1 = makeClassJson("디자인과3D프린팅","허성율","#e4fbff");
    const hsy2 = makeClassJson("디자인과3D프린팅실습","허성율","#fdffbc");
    const hsy3 = makeClassJson("UI/UX디자인","허성율","#d2c6b2");

    const timeTable = [
        [
                "월요일", "", kjm1, kjm1, "", kkm, kkm, kkm, ""
        ], [
                "화요일", kyy, kyy, kyy, "", jys, jys, "", ""
        ], [
                "수요일", kjm2, kjm2, kjm2, kjm2, "", "", "", ""
        ], [
                "목요일", hsy1, hsy1, hsy2, hsy2, hsy2, hsy3, hsy3, hsy3
        ], [
                "금요일", "", "", "", "", "", "", "", ""
        ]
    ]
    localStorage.setItem("timeTable", JSON.stringify(timeTable));
}

if(localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", "[]");
}

function makeClassJson(className, name, color) {
    const json = {
        class : className,
        name : name,
        color : color
    }
    return json;
}