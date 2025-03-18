// var myObj = {};
// myObj.show = function(){
//     console.log("myObj show function called")
// }
// myObj.addHeader = function () {
//     var headerElement = document.createElement('h1')
//     headerElement.textContent = "Javascript Ninja"

//     var headerRef = document.getElementById('header');
//     headerRef.appendChild(headerElement)
// }
// // myObj.trial = function () {
// //     console.log("Click event fired")
// // }
// // myObj.trial = function (arg) {
// //     return function () {
// //         console.log("Click event fired")
// //         document.body.innerHTML = arg;
// //     }
// // }
// myObj.trial = function (arg) {
//     return function () {
//         console.log("Click event fired")
//         var imgElement = document.createElement('img')
//         var imageRef = './images/' + arg + '.jpg'
//         imgElement.setAttribute('src', imageRef)
//         var headerRef = document.getElementById('header')
//         headerRef.appendChild(imgElement)
//     }
// }
// myObj.addImage = function () {
//     var btnElement = document.querySelector('button')
//     // This will call the reference of the trial method and
//     // called whenever we click on the button and
//     // we can call it anytime by clicking it
//     // btnElement.addEventListener('click', myObj.trial)
    
//     // This will return the output of trial function and
//     // it will be called 1 time only when the html page is loaded and
//     // we wont be able to call it again
//     // not suggested
//     // btnElement.addEventListener('click', myObj.trial())
    
//     // if we want to pass arguments in function
//     // we should return the nested function inside that main function and call it like above
//     // btnElement.addEventListener('click', myObj.trial('Chennai'))
    
//     btnElement.addEventListener('click', myObj.trial('car'))


// }
// myObj.show();
// myObj.addHeader();
// myObj.addImage();

var myObj = {};
myObj.show = function(){
    console.log("myObj show function called");
}

myObj.addHeader = function () {
    var headerElement = document.createElement('h1');
    headerElement.textContent = "Javascript Ninja";

    var headerRef = document.getElementById('header');
    headerRef.appendChild(headerElement);
}

myObj.trial = function (arg) {
    console.log("Click event fired");
    var imgElement = document.createElement('img');
    var imageRef = './images/' + arg + '.jpg';
    imgElement.setAttribute('src', imageRef);
    imgElement.setAttribute('id', 'dynamicImage'); // Add an id to the image for easy reference

    var headerRef = document.getElementById('header');
    headerRef.appendChild(imgElement);
}

myObj.toggleImage = function () {
    var imgElement = document.getElementById('dynamicImage');
    var btnElement = document.querySelector('button');

    if (imgElement) {
        // If the image exists, toggle its visibility
        if (imgElement.style.display === "none") {
            imgElement.style.display = "block"; // Show the image
        } else {
            imgElement.style.display = "none"; // Hide the image
        }
    } else {
        // If image doesn't exist, create it
        console.log("Adding image...");
        myObj.trial('car');  // Add the image dynamically
    }
}

myObj.addButton = function () {
    var btnElement = document.querySelector('button');
    
    // Add event listener to toggle image visibility or add it when button is clicked
    btnElement.addEventListener('click', myObj.toggleImage);
}

myObj.show();
myObj.addHeader();
myObj.addButton(); // Add the toggle button to show/hide the image

