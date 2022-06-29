// // -------------------( 1 )------------------------------
// var x = "x" ;
// var y = "y" ;

// [ x , y ] = [ y , x] ;

// console.log(x);
// console.log(y);

// // -------------------( 2 )------------------------------

// numbers = [14,15,16,17,18,19,20,21,52,23,24,25,26,27,28,29,30,] ;


//     console.log(numbers.reduce((prev , curr)=> prev > curr ? prev : curr ))
//     console.log(numbers.reduce((prev , curr)=> prev < curr ? prev : curr ))



// // -------------------( 3 )------------------------------

// fruits = ["apple", "banana", "strawberry", "orange","mango" , 15 ]

// function CheckString(Arr){
//     var x = Arr.filter((element)=>{
//         return typeof(element) != "string" 
//     }).join()

// console.log(x)
// }

// CheckString(fruits)

// // --------  b ----- 

// function startW(Arr){
//     var x = Arr.filter((element)=>{
//         return `${element}`.startsWith('a')
//     }).join()
    
//     console.log(x)
// }

// startW(fruits)

// // --------  c ----- 
// function startWbors(Arr){
//     var x = Arr.filter((element)=>{
//         return `${element}`.startsWith('b')|| `${element}`.startsWith('s')
//     })
    
//     console.log(x)
// }

// startWbors(fruits)

// // --------  d -----

// function Ilove(arr){
//     arr.forEach(element => {
//         console.log(`i love ${element}`)
//     });
// }
// Ilove(fruits)


// ###############################( day02  )#################################

// -------------------( 1 )------------------------------

async function getData(){
    try{
        var promise = await fetch("https://jsonplaceholder.typicode.com/users");
        var response = await promise.json() 
        loopUsers(response) ;
        clickOnUser()
    }
    catch(err){
        console.log("ehab");
        console.log(err);
    }
}
getData();

async function getUserData(id){
    try{
        var promise = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        var response = await promise.json() 
        showUserData(response);
    }
    catch(err){
        console.log("ehab");
        console.log(err);
    }
}


function loopUsers(data){
    names = [];
    for ( user of data) {
        names.push(user.name);
        $(".data>p ").append(
            `<a class="btn btn-primary m-1" data-id="${user.id}"  data-bs-toggle="collapse" href="#multiCollapseExample${user.id}" role="button" aria-expanded="false" aria-controls="multiCollapseExample${user.id}">${user.name}</a>`
        )
    }
    console.log(names)
}
    
function showUserData(data){
    $(".data>.row").append(
        `<div class="col">
            <div class="collapse multi-collapse show" id="multiCollapseExample${data.id}">
                <div class="card card-body">
                    <ul>
                    <li>name :> ${data.name}</li>
                    <li>username :> ${data.username}</li>
                    <li>email :> ${data.email}</li>
                    </ul>
                </div>
            </div>
        </div>`
    )
}

function clickOnUser(){
    var arr =[...$(".btn")] 
    arr.forEach( (btn) => {
        $(btn).on("click", () => {
            $(".row").html("");
            getUserData($(btn).data("id"))
        })
    })
}


// -------------------( 2 )------------------------------
names = ['Ervin Howell', 'Ervin Howell',  'Ervin Howell', 'Patricia Lebsack', 'Chelsey Dietrich', 'Mrs. Dennis Schulist', 'Kurtis Weissnat', 'Nicholas Runolfsdottir V', 'Glenna Reichert', 'Clementina DuBuque']

var set = new Set(names)

for (var name of [...set]){
    console.log(name)
}


// -------------------( 3 )------------------------------

mapTable = new Map()
mapTable.set("ehab", [
    {Coursename:'JavaScript', Grade:'Excellent'},
    {Coursename:'Jquery', Grade:'Good'},
    {Coursename:'CSS', Grade:'V.Good'}])
mapTable.set("eslam", [
    {Coursename:'JavaScript', Grade:'Good'},
    {Coursename:'Jquery', Grade:'Good'},
    {Coursename:'CSS', Grade:'V.Good'}])
mapTable.set("hesham", [
    {Coursename:'JavaScript', Grade:'Good'},
    {Coursename:'Jquery', Grade:'Good'},
    {Coursename:'CSS', Grade:'V.Good'}])




for ( [student , value] of mapTable) {
    console.log(student)
    for ( st of value) {
        console.log(`Coursename ${st.Coursename} => Grade ${st.Grade}`)
    }
}
