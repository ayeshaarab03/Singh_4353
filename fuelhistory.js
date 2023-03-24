addHistory("01/01/2022", "500", "123 Main St, Anytown, USA", "01/15/2022", "$2.00", "$1000.00");
    
addHistory("02/01/2022", "750", "456 Elm St, Anytown, USA", "02/15/2022", "$2.10", "$1575.00");

addHistory("03/01/2022", "1000", "789 Oak St, Anytown, USA", "03/15/2022", "$2.20", "$2200.00");

function addHistory(date, GR, DA, DD, SPG, T) {
	let row = document.getElementById("History").insertRow(-1);
	
	row.insertCell(0).innerText = date;
	row.insertCell(1).innerText = GR;
	row.insertCell(2).innerText = DA;
	row.insertCell(3).innerText = DD;
	row.insertCell(4).innerText = SPG;
	row.insertCell(5).innerText = T;
}
