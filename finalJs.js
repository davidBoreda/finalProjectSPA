// Declaration of global variables 
//DOM
let header;
let main;
let footer;
//divs
const profileDiv = document.createElement('div');
const coursesDiv = document.createElement('div');
const calenderDiv = document.createElement('div');
let loginDiv = document.createElement('div');

let profile;
let email;
let password;
let calendarEl;
let calendar;
let loginBtn;
let loguotBtn;
let profileBtn;
let calendarBtn;
let courseBtn;
let rowData;
let calenderBtn;

//calender veariables declaratino
let modalFade;
let modalD;
let modalC;
let modalB;
let btnM;
let spanQ;
let h3title;
let h4Star;
let h4End;
let h4Type;
let h4teacher;
let h4location;


// html DOM elemnents construction
function createDoc() {
    // header
    header = document.createElement('header');
    header.id = 'header'
    document.body.append(header);
    // main
    main = document.createElement('main');
    main.id = 'main'
    document.body.append(main);
    //footer
    footer = document.createElement('footer');
    footer.id = 'footer'
    document.body.append(footer);
}



//header/divHeader/ navbar
function createNavbar() {
    let divHeader = document.createElement('div');
    divHeader.id = 'divHeader';
    divHeader.setAttribute('class', 'header container-fluid');
    header.append(divHeader);

    // navbar and inner buttons
    const navBtn = document.createElement('nav');
    navBtn.id = 'navBtn';
    navBtn.setAttribute('class', 'nav nav-pills mb-3');
    navBtn.setAttribute('role', 'tablist');
    divHeader.append(navBtn);

    loginBtn = document.createElement('button');
    loginBtn.id = 'loginBtn';
    loginBtn.innerText = 'Login';
    loginBtn.setAttribute('class', 'nav-item rounded-3');
    loginBtn.setAttribute('role', 'presentation');
    navBtn.append(loginBtn);

    loguotBtn = document.createElement('button');
    loguotBtn.id = 'loguotBtn';
    loguotBtn.innerText = 'Logout';
    loguotBtn.setAttribute('class', 'nav-item rounded-3');
    loguotBtn.setAttribute('role', 'presentation');
    navBtn.append(loguotBtn);

    profileBtn = document.createElement('button');
    profileBtn.id = 'profileBtn';
    profileBtn.innerText = 'Profile';
    profileBtn.setAttribute('class', 'nav-item rounded-3');
    profileBtn.setAttribute('role', 'presentation');
    navBtn.append(profileBtn);

    calenderBtn = document.createElement('button');
    calenderBtn.id = 'calenderBtn';
    calenderBtn.innerText = 'Calender';
    calenderBtn.setAttribute('class', 'nav-item rounded-3');
    calenderBtn.setAttribute('role', 'presentation');
    navBtn.append(calenderBtn);

    courseBtn = document.createElement('button');
    courseBtn.id = 'courseBtn';
    courseBtn.innerText = 'Course List';
    courseBtn.setAttribute('class', 'nav-item rounded-3');
    courseBtn.setAttribute('role', 'presentation');
    navBtn.append(courseBtn);

    // navbar onclick functions buttons
    loginBtn.addEventListener('mouseover', function change() {
        if (MouseEvent==true){
            loginBtn.style.backgroundColor = 'aliceblue';
        loginBtn.style.color = 'black';
        }
        
    });

    loginBtn.onclick = () => {
        profileDiv.hidden = true;
        coursesDiv.hidden = true;
        calenderDiv.hidden = true;
        loginDiv.hidden = false;
        loginForm.hidden = false;
        seeYouDiv.hidden = true;
        password.value = email.value = "";
        location.reload();
    }


    loguotBtn.addEventListener('mouseover', function change() {
        loguotBtn.style.backgroundColor = 'aliceblue';
        loguotBtn.style.color = 'black';
    });

    loguotBtn.addEventListener('mouseout', function change() {
        loguotBtn.style.backgroundColor = 'black';
        loguotBtn.style.color = 'aliceblue';
    });

    loguotBtn.onclick = () => {
        seeYouDiv.hidden = false;
        profileDiv.hidden = true;
        profileCrd.hidden = true;
        coursesDiv.hidden = true;
        calenderDiv.hidden = true;
        profileBtn.hidden = true;
        calenderBtn.hidden = true;
        courseBtn.hidden = true;
        loguotBtn.hidden = true;
        loginBtn.hidden = false;
        loginDiv.hidden = false;
    }


    profileBtn.addEventListener('mouseover', function change() {
        profileBtn.style.backgroundColor = 'aliceblue';
        profileBtn.style.color = 'black';
    });
    profileBtn.addEventListener('mouseout', function change() {
        loguotBtn.style.backgroundColor = 'black';
        loguotBtn.style.color = 'aliceblue';
    });

    profileBtn.onclick = () => {
        seeYouDiv.hidden = true;
        profileDiv.hidden = false;
        profileCrd.hidden = false;
        coursesDiv.hidden = true;
        calenderDiv.hidden = true;
        loginDiv.hidden = true;
    }
    calenderBtn.addEventListener('mouseover', function change() {
        calenderBtn.style.backgroundColor = 'aliceblue';
        calenderBtn.style.color = 'black';
    });
    calenderBtn.addEventListener('mouseout', function change() {
        loguotBtn.style.backgroundColor = 'black';
        loguotBtn.style.color = 'aliceblue';
    });

    calenderBtn.onclick = () => {
        profileDiv.hidden = true;
        profileCrd.hidden = true;
        coursesDiv.hidden = true;
        calenderDiv.hidden = false;
        loginDiv.hidden = true;
        seeYouDiv.hidden = true;
    }


    courseBtn.addEventListener('mouseover', function change() {
        courseBtn.style.backgroundColor = 'aliceblue';
        courseBtn.style.color = 'black';
    });
    courseBtn.addEventListener('mouseout', function change() {
        loguotBtn.style.backgroundColor = 'black';
        loguotBtn.style.color = 'aliceblue';
    });

    courseBtn.onclick = () => {
        profileDiv.hidden = true;
        profileCrd.hidden = true;
        coursesDiv.hidden = false;
        calenderDiv.hidden = true;
        loginDiv.hidden = true;
        seeYouDiv.hidden = true;
    }

}



//login div construction
function createLoginDIv() {
    // let loginDiv = document.createElement('div');
    loginDiv.id = 'loginDiv';
    loginDiv.setAttribute('class', 'loginDiv container');
    main.append(loginDiv);
    const loginForm = document.createElement('form');
    loginForm.id = 'loginForm';
    loginForm.setAttribute('class', 'loginForm');
    loginDiv.append(loginForm);

    let h1studentP = document.createElement('h1');
    h1studentP.id = 'h1studentP';
    h1studentP.innerHTML = 'welcome to Student Portal';
    loginForm.append(h1studentP);

    let h3logIn = document.createElement('h3');
    h3logIn.id = 'h3logIn';
    h3logIn.innerHTML = 'Login with Email & Password';
    loginForm.append(h3logIn);

    let inputBoxE = document.createElement('div');
    inputBoxE.id = 'inputBoxE';
    inputBoxE.setAttribute('class', 'inputBoxE');
    loginForm.append(inputBoxE);

    let emailIcon = document.createElement('i');
    emailIcon.setAttribute('class', 'fa fa-envelope-o');
    inputBoxE.append(emailIcon);

    email = document.createElement('input');
    email.id = 'emailId';
    email.type = 'email';
    email.placeholder = 'Use Email';
    inputBoxE.append(email);

    let inputBoxP = document.createElement('div');
    inputBoxP.id = 'inputBoxP';
    inputBoxP.setAttribute('class', 'inputBoxP');
    loginForm.append(inputBoxP);

    password = document.createElement('input');
    password.id = 'password';
    password.type = 'password';
    password.placeholder = 'password';
    inputBoxP.append(password);

    const loginFoBtn = document.createElement('button');
    loginFoBtn.id = 'loginFoBtn';
    loginFoBtn.innerText = 'Login';
    loginForm.append(loginFoBtn);

    //by clicking on submit btn, this function sends the event collected from 
    //the user( username and password) for comparison with the database.
    loginForm.onsubmit = (event) => {
        event.preventDefault();
        let xml = new XMLHttpRequest();
        xml.open('POST', 'https://rt-dev.xyz:3045/login', true);
        xml.setRequestHeader('Content-Type', 'application/json');
        const user = { // setting an object with user details for authentication against server
            username: email.value, // user input uesrname value
            password: password.value // user input password value
        }
        xml.send(JSON.stringify(user));
        xml.onload = () => {
            const response = JSON.parse(xml.responseText);
            console.log(response);
            if (response.success == true) {
                profile = response.user;
                console.log(profile);
                loginForm.hidden = true;
                createProfile();
                createCalender();
                createCourses();
                profileDiv.hidden = false;
                profileBtn.hidden = false;
                calenderBtn.hidden = false;
                courseBtn.hidden = false;
                loguotBtn.hidden = false;
                loginBtn.hidden = true;
                loginDiv.hidden = true;
            } else {
                console.log(response.message);
            }

        }
    }
}

//profile div construction
function createProfile() {
    // profileDiv = document.createElement('div');
    profileDiv.id = 'profileDiv';
    profileDiv.setAttribute('class', 'profileDiv w-50 d-flex');
    main.append(profileDiv);

    let profileCrd = document.createElement('div');
    profileCrd.id = 'profileCrd';
    profileCrd.setAttribute('class', 'card m-5');
    profileDiv.append(profileCrd);

    let profileCont = document.createElement('div');
    profileCont.id = 'profileCont';
    profileCont.setAttribute('class', 'container');
    profileCrd.append(profileCont);
    let contHead = document.createElement('div');
    contHead.id = 'rowHead';
    contHead.setAttribute('class', 'row h3 mb-4');
    contHead.innerText = 'Student Profile';
    profileCont.append(contHead);
    rowData = document.createElement('div');
    rowData.id = 'rowData';
    rowData.setAttribute('class', 'row justify-content-center');
    profileCont.append(rowData);
    userProf();

}

// looping on data form db for filling in user profile
function userProf() {
    loginBtn.hidden = true;
    console.log(profile);
    let i = 0
    for (let key in profile) {
        // console.log(key);
        // console.log(profile[key]);
        let dataCol = document.createElement('div');
        dataCol.setAttribute('class', 'col-5 ms-4 me-2');
        rowData.append(dataCol);
        let h1Data = document.createElement('h3');
        h1Data.innerText = key
        let pData = document.createElement('p');
        pData.setAttribute('class', 'border-bottom border-1 border-light')
        pData.innerText = profile[key];
        dataCol.append(h1Data, pData);
        i++
        if (i === 6) {
            break
        }


        // let curKey = (users[key]);
        // let tr = document.createElement('tr');
        // tbody.append(tr);
        // for (let property in curKey) {
        //     if (typeof (curKey[property]) == 'object') {
        //         let object = (curKey[property]);
        //         for (let key1 in object) {
        //             if (typeof (object[key1]) == 'object') {
        // td.innerText=''; need to know where to put it לאלאלאלאל
        //             let object2 = (object[key1]);
        //             for (let key2 in object2) {
        //                 let td = document.createElement('td');
        //                 td.innerText = object2[key2];
        //                 tr.append(td);
        //             }
        //         }
        //         let td = document.createElement('td');
        //         td.innerText = object[key1];
        //         tr.append(td);

        //     }

        // }
        // let td = document.createElement('td');
        // td.innerText = curKey[property]
        // tr.append(td);

        // console.log(curKey[property]);לאלאלאלאל
        // }
    }
}
let seeYouDiv;
function seeYou() {
    seeYouDiv = document.createElement('div');
    seeYouDiv.setAttribute('class', 'h3')
    seeYouDiv.id = 'seeYouDiv';
    main.append(seeYouDiv);
    seeYouDiv.innerHTML = 'Thank you for visiting See You Soon';
}



//calender div construction
function createCalenderElements() {
    // let calenderDiv = document.createElement('div');
    calenderDiv.id = 'calenderDiv';
    calenderDiv.setAttribute('class', 'calenderDiv');
    main.append(calenderDiv);
    calendarEl = document.createElement('div');
    calendarEl.id = 'calendar';
    calendarEl.setAttribute('class', 'container');
    calenderDiv.append(calendarEl);
    modalFade = document.createElement('div');
    modalFade.id = 'successModal';
    modalFade.setAttribute('class', 'modal fade');
    modalFade.setAttribute('tabindex', '-1');
    modalFade.setAttribute('role', 'dialog');
    modalFade.setAttribute('aria-hidden', 'true');
    calenderDiv.append(modalFade);
    modalD = document.createElement('div');
    modalD.id = 'modalD';
    modalD.setAttribute('class', 'modal-dialog');
    modalD.setAttribute('role', 'document');
    modalFade.append(modalD);
    modalC = document.createElement('div');
    modalC.id = 'modalC';
    modalC.setAttribute('class', 'modal-content');
    modalD.append(modalC);
    modalB = document.createElement('div');
    modalB.id = 'modalB';
    modalB.setAttribute('class', 'modal-body');
    modalC.append(modalB);
    btnM = document.createElement('button');
    btnM.id = 'btnM';
    btnM.setAttribute('type', 'button');
    btnM.setAttribute('class', 'close');
    btnM.setAttribute('data-dismiss', 'modal');
    btnM.setAttribute('aria-lable', 'close');
    modalB.append(btnM);
    spanQ = document.createElement('span');
    spanQ.id = 'spanQ';
    spanQ.setAttribute('aria-hidden', 'true');
    spanQ.innerText = '&times;';
    btnM.append(spanQ);

    h3title = document.createElement('h3');
    h3title.id = 'title';
    modalB.append(h3title);
    h4Star = document.createElement('h4');
    h4Star.id = 'starttime';
    modalB.append(h4Star);
    h4End = document.createElement('h4');
    h4End.id = 'endtime';
    modalB.append(h4End);
    h4Type = document.createElement('h4');
    h4Type.id = 'type';
    modalB.append(h4Type);
    h4teacher = document.createElement('h4');
    h4teacher.id = 'techear';
    modalB.append(h4teacher);
    h4location = document.createElement('h4');
    h4location.id = 'location';
    modalB.append(h4location);

    createCalender()
}


//create calander function
function createCalender() {
    let url = `https://rt-dev.xyz:3045/student/calendar?id=${password.value}`;
    let xml = new XMLHttpRequest();
    xml.open('GET', url, true);
    xml.setRequestHeader('Content-Type', 'application/json');
    // const calender = [];
    xml.send(JSON.stringify(url));
    xml.onload = () => {
        const response = JSON.parse(xml.responseText);
        console.log(response);

    }
    document.addEventListener('DOMContentLoaded', function () {
        console.log('cal');
        let calendarEl = document.getElementById('calendar');
        let calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev',
                center: 'title,today',
                right: 'next'
            },
            events: function (fetchInfo, successCallback, failureCallback) {
                $.ajax({
                    url: `https://rt-dev.xyz:3045/student/calendar?id=${password.value}`,
                    type: 'GET',
                    dataType: 'JSON',
                    success: function (data) {
                        let events = [];
                        if (data != null) {
                            $.each(data, function (i, item) {
                                events.push({
                                    title: item.courseName,
                                    start: item.sessionDate,
                                    end: item.sessionEndDate,
                                    type: item.type,
                                    teacher: item.teacher,
                                    cyclecode: item.cyclecode,
                                    location: item.web,
                                    session_num: item.session_num,
                                }

                                )
                            })

                        }
                        successCallback(events);
                    }
                })
            },



            eventClick: function (event) {

                $.ajax({
                    url: `https://rt-dev.xyz:3045/student/calendar?id=${password.value}`,
                    type: 'GET',
                    dataType: 'JSON',
                    success: function (data) {
                        let events1 = [];
                        if (data != null) {
                            $.each(data, function (i, item) {
                                events1.push({
                                    title: item.courseName,
                                    start: item.sessionDate,
                                    end: item.sessionEndDate,
                                    type: item.type,
                                    teacher: item.teacher,
                                    location: item.location,
                                })

                                var modal = $("#successModal");
                                modal.modal();
                                $("#successModal .modal-body #title").text(events1[i].title);
                                $("#successModal .modal-body #starttime").text("From:" + moment(events1[i].start).format('HH:mm'));
                                $("#successModal .modal-body #endtime").text("Until: " + moment(events1[i].end).format('HH:mm'));
                                $("#successModal .modal-body #type").text(events1[i].type);
                                $("#successModal .modal-body #teacher").text(events1[i].teacher);
                                $("#successModal .modal-body #location").text(events1[i].location);

                                console.log(item.type);
                            })
                        }

                    }
                })

            },

            eventDisplay: 'block',
            eventColor: 'blue',
            initialView: 'dayGridMonth',
            themeSystem: 'bootstrap5',

        });
        calendar.render();
    });


}

//courses div
function createCourses() {
    // const coursesDiv = document.createElement('div');
    coursesDiv.id = 'coursesDiv';
    coursesDiv.setAttribute('class', 'coursesDiv');
    main.append(coursesDiv);
    let contH3 = document.createElement('div');
    contH3.id = 'contH3';
    contH3.setAttribute('class', 'container');
    coursesDiv.append(contH3);
    const h3CoursesList = document.createElement('h3');
    h3CoursesList.id = 'h3CoursesList';
    // h3CoursesList.setAttribute('class', 'text-align-center');
    h3CoursesList.innerText = 'Courses List';
    contH3.append(h3CoursesList);

    let urlCourses = `https://rt-dev.xyz:3045/student/courses?id=${password.value}`;
    async function fetchFunc() {
        let res = await fetch(urlCourses);
        return res.json();
    }
    fetchFunc().then((data) => {
        console.log(data);
        let coursesCont = document.createElement('div');
        coursesCont.id = 'coursescont';
        coursesCont.setAttribute('class', 'container');
        coursesDiv.append(coursesCont);
        let coursesProperty = document.createElement('div');
        coursesProperty.id = 'coursesProperty';
        coursesProperty.setAttribute('class', 'row');
        coursesCont.append(coursesProperty);

        for (let key of data) {
            console.log(key);
            for (let inKey of Object.keys(key)) {
                console.log(`${inKey}: ${key[inKey]}`);
                if (inKey == 'url') continue;
                if (inKey == 'cycle') continue;
                if (inKey == 'course') continue;
                if (inKey == 'update_date') continue;
                let Property = document.createElement('div');
                Property.id = 'Property';
                Property.setAttribute('class', 'col');
                coursesProperty.append(Property);
                Property.innerText = inKey;
            }
            break;
        }
        for (key of data) {
            let valueRow = document.createElement('div');
            valueRow.id = 'valueRow';
            valueRow.setAttribute('class', 'row');
            coursesCont.append(valueRow);
            for (let value of Object.keys(key)) {
                if (value == 'url') continue;
                if (value == 'cycle') continue;
                if (value == 'course') continue;
                if (value == 'update_date') continue;
                if (value == 'startdate') {
                    let date1 = new Date(key[value]);
                    let cureDate = date1.getDate() + '/' + date1.getMonth() + '/' + date1.getFullYear();
                    let coursdate = document.createElement('div');
                    coursdate.id = 'coursValue';
                    coursdate.setAttribute('class', 'col');
                    valueRow.append(coursdate);
                    coursdate.innerText = cureDate;
                } else if (value == 'endate') {
                    date1 = new Date(key[value]);
                    cureDate = date1.getDate() + '/' + date1.getMonth() + '/' + date1.getFullYear();
                    coursdate = document.createElement('div');
                    coursdate.id = 'coursValue';
                    coursdate.setAttribute('class', 'col');
                    valueRow.append(coursdate);
                    coursdate.innerText = cureDate;
                } else {
                    let coursValue = document.createElement('div');
                    coursValue.id = 'coursValue';
                    coursValue.setAttribute('class', 'col');
                    valueRow.append(coursValue);
                    coursValue.innerText = key[value];
                }

            }
        }

    }).catch((error) => {
        console.log(error);
    })

}




function init() {
    createDoc();
    createLoginDIv();
    createCalenderElements();
    createNavbar();
    seeYou();
    profileDiv.hidden = true;
    coursesDiv.hidden = true;
    calenderDiv.hidden = true;
    profileBtn.hidden = true;
    calenderBtn.hidden = true;
    courseBtn.hidden = true;
    loguotBtn.hidden = true;
    loginBtn.hidden = false;
    seeYouDiv.hidden = true;
    // loginDiv.hidden = false;
}





window.init()