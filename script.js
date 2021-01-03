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

const filterByQuarter = (e) => {
    let checkbox = e.target;
    let toggleClass = '.' + checkbox.value;
    let toShow = document.querySelectorAll(`${toggleClass}`);
    console.log(toShow);
    for (let i = 0; i < toShow.length; i++) {
        toShow[i].style.display = checkbox.checked ? 'table-row' : 'none';
    }
}

const inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
    inputs[i].addEventListener('change', filterByQuarter);
}


const sortByPerson = () => {
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

const sortBySales = () => {
    let switchCount = 0;
    let table = document.getElementById("sales-table");
    let switching = true;
    let shouldSwitch;
    let dir = "lowest";
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




