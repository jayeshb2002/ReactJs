var obj = {}

obj.addText = function (element, headingText='Guest Travels') {
    const heading = document.getElementById(element)
    heading.textContent = headingText
};

obj.createList = function (listItems) {
    console.log("calling with simple call")
    var ul = document.querySelector('ol')
    for (let it in listItems) {
        var curr = document.createElement('li')
        curr.innerHTML = listItems[it]
        ul.appendChild(curr)
    }
}

obj.createListWithRestParams = function (...params) {
    console.log("calling with Rest Params")
    var ul = document.querySelector('ol')
    params.forEach((item, index) => {
        var curr = document.createElement('li')
        curr.innerHTML = item
        ul.appendChild(curr)
    })
}

obj.createListWithSpread = function (num1,num2,num3,num4) {
    console.log("calling with Spread")
    var ul = document.querySelector('ol')
    var curr = document.createElement('li')
    curr.innerHTML = num1
    ul.appendChild(curr)

    var curr = document.createElement('li')
    curr.innerHTML = num2
    ul.appendChild(curr)

    var curr = document.createElement('li')
    curr.innerHTML = num3
    ul.appendChild(curr)

    var curr = document.createElement('li')
    curr.innerHTML = num4
    ul.appendChild(curr)
}

obj.usingmapFunction = function (markList) {
    let updatedList = markList.map((value,idx) => {
        return value*5
    })
    return updatedList
}

obj.usingMapCreateElement = function (cityList) {
    var newList = cityList.map((value,idx) => {
        return "<li>" + value + "</li>"
    })
    return newList
}

obj.createBulletList = function (list) {
    var ul = document.getElementById("unorderedList")
    list.map((value,idx) => {
        var li = document.createElement("li")
        li.innerHTML = value
        ul.appendChild(li)
    })
}

obj.addText('heading1', 'Jay Travels');

obj.addText('heading2');

let list = ['ek', 'don', 'teen', 'chaar']

obj.createList(list)

obj.createListWithRestParams('ek','don','teen','chaar')

obj.createListWithSpread(...list)

let markList = [1,2,3,4,5,6]

let updatedList = obj.usingmapFunction(markList)

console.log(updatedList)

let cityList = ['Pune', 'Mumbai', 'Thane', 'Nashik']

let newList = obj.usingMapCreateElement(cityList)

console.log(newList)

obj.createBulletList(newList)


