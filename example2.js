console.log("inside the js file");

// data ko store karwana hai
document.getElementById('btnn').addEventListener('click', savingdata);

function savingdata(e) {
    var datas = document.getElementById('textarea').value;
    var title = document.getElementById('Title').value;
    let date = new Date().getDate();
    // let date=d1.getDay();
    // date = date.getDate;
    console.log(date);
    // var issid = chance.guide;

    var comb = {
        notes: datas,
        Title: title,
        Date: date
        // id: issid
    };
    if (localStorage.getItem('notes') == null) {
        var dataupdate = [];
        dataupdate.push(comb);
        localStorage.setItem('notes', JSON.stringify(dataupdate));
    }
    else {
        var dataupdate = JSON.parse(localStorage.getItem('notes'));
        dataupdate.push(comb);
        localStorage.setItem('notes', JSON.stringify(dataupdate));
    }
    textarea.value = "";
    Title.value='';
    output();
    e.preventDefault();
}



function output() {
    var storedata = JSON.parse(localStorage.getItem('notes'));      //notes le lia
    var apply = document.getElementById('output');                 //jaha lagana hai waha ka address

    apply.innerHTML = "";            // blank file banaya

    // storedata.forEach(function (elem, index){           // print the localstorage element



    // for (let i = 0; i < storedata.length; i++) {
    storedata.forEach(function (elem, index) {
        let notes = storedata[index].notes;     //notes lia storage se
        let T = storedata[index].Title;
        let date =storedata[index].Date;
        // console.log(id);

        apply.innerHTML += ` 
        <div class="subcont">
        <div class = "top">
        <h2 class="headnote border">Note ${index + 1} </h2>
        <p>${date}</p></div>
        <p class="title border">${T}</p>
        <p class="para border">${notes}</p>
        <button type="submit" class="btn" onclick="Delete(this.id)" id="${index}">Delete</button>
    </div>`;

    });
}


function Delete(id) {                       // delete button ka code
    let prevdta = localStorage.getItem('notes');
    // for (let i = 0; i < prevdta.length; i++) {
    // prevdta.forEach(function(elem,index) {
    if (prevdta == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(prevdta);
    }
    notesobj.splice(id, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    output()
}

// search bar section
let search = document.getElementById("search");
search.addEventListener('input', function () {
    let inpvar = search.value;
    console.log('Input event fired!', inpvar);
    let nodecard = document.getElementsByClassName('subcont');
    Array.from(nodecard).forEach(function (elm) {
        let cardText = elm.getElementsByTagName('p')[0].innerText;
        if (cardText.includes(inpvar)) {
            elm.style.display = "block";
        }
        else {
            elm.style.display = 'none';
        }
    })

})