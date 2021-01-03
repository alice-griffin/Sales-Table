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
        return 8;
    } else if (month === "September") {
        return 9;
    } else if (month === "October") {
        return 10;
    } else if (month === "November") {
        return 11;
    } else if (month === "December") {
        return 12;
    }
}

//When a checkbox is checked, filter the table to only show the corresponding rows. Q1 is January-March, Q2 is April-June, Q3 is July-September, and Q4 is October-December 

const filterByQuarter = (e) => {
    let checkbox = e.target;
    let toggleClass = '.' + checkbox.value;
    let toShow = document.querySelectorAll(`${toggleClass}`);
    for (let i = 0; i < toShow.length; i++) {
        toShow[i].style.display = checkbox.checked ? 'table-row' : 'none';
    }
}

const inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
    inputs[i].addEventListener('change', filterByQuarter);
}

//If the table heading "Top Salesperson" is clicked, the order of the rows should toggle between alphabetical and chronological. 

const sortByPerson = () => {
    let switchCount = 0;
    let table = document.getElementById("sales-table");
    let switching = true;
    let dir = "alph"
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            let x = rows[i].getElementsByTagName("td")[2];
            let y = rows[i + 1].getElementsByTagName("td")[2];
            let a = getMonthNum(rows[i].getElementsByTagName("td")[0].innerHTML);
            let b = getMonthNum(rows[i + 1].getElementsByTagName("td")[0].innerHTML);
            if (dir == "alph") {
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
            if (switchCount == 0 && dir == "alph") {
                dir = "chron";
                switching = true;
            }
        }
    }
}

//If the table heading "Sales" is clicked, the order of the rows should sort from lowest to highest. 
//If clicked again, the order should sort from highest to lowest. If clicked again, the order should return to chronological. 

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
            let x = rows[i].getElementsByTagName("td")[1].innerHTML.replace(/\$/g, '');
            let y = rows[i + 1].getElementsByTagName("td")[1].innerHTML.replace(/\$/g, '');
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
                //never hits this else if
            } else if (switchCount == 0 && dir == "highest") {
                dir = "chron";
                switching = true;
            }
        }
    }
}




