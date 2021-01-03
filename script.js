let quarterOne = document.querySelectorAll("#q1");
let quarterTwo = document.querySelectorAll("#q2");
let quarterThree = document.querySelectorAll("#q3");
let quarterFour = document.querySelectorAll("#q4");


const getMonthNum = (month) => {
    if (month === "January") {
        return 1;
    } else if (month === "February") {
        return 2;
    } else if (month === "March") {
        return 3;
    } else if (month === "April") {
        return 4;
    } else if (month === "May") {
        return 5;
    } else if (month === "June") {
        return 6;
    } else if (month === "July") {
        return 7;
    } else if (month === "August") {
        return 8
    } else if (month === "September") {
        return 9
    } else if (month === "October") {
        return 10
    } else if (month === "November") {
        return 11
    } else if (month === "December") {
        return 12
    }
}

const toggleDirection = () => {
    let states = ["lowest", "highest", "chron"];

}

const filterTable = () => {
    let checkbox = document.getElementById("q1-checkbox");
    checkbox.addEventListener("change", function (e) {
        e.preventDefault();
        if (checkbox.checked) {
            for (let i = 0; i < table.rows.length; i++) {
                if (table.rows = !document.getElementById("q1")) {

                } else {

                }
            }
        }
    })
}

function sortByPerson() {
    let switchCount = 0;
    let table = document.getElementById("sales-table");
    let switching = true;
    let dir = "asc"
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            let x = rows[i].getElementsByTagName("td")[2];
            let y = rows[i + 1].getElementsByTagName("td")[2];
            let a = getMonthNum(rows[i].getElementsByTagName("td")[0].innerHTML);
            let b = getMonthNum(rows[i + 1].getElementsByTagName("td")[0].innerHTML);
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "chron") {
                if (a > b) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount == 0 && dir == "asc") {
                dir = "chron";
                switching = true;
            }
        }
    }
}

function sortBySales(dir) {
    let switchCount = 0;
    let table = document.getElementById("sales-table");
    let switching = true;
    let shouldSwitch; 
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            let x = rows[i].getElementsByTagName("td")[1].innerHTML;
            let y = rows[i + 1].getElementsByTagName("td")[1].innerHTML;
            let a = getMonthNum(rows[i].getElementsByTagName("td")[0].innerHTML);
            let b = getMonthNum(rows[i + 1].getElementsByTagName("td")[0].innerHTML);
            if (dir == "lowest") {
                if (parseInt(x) > parseInt(y)) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "highest") {
                if (parseInt(x) < parseInt(y)) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "chron") {
                if (a > b) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount == 0 && dir == "lowest") {
                dir = "highest";
                switching = true;
            } else if (switchCount == 0 && dir == "highest") {
                dir = "chron";
                switching = true;
            }
        } 
    }
}




