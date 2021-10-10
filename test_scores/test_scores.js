var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("name").focus();
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

const displayResults = () => {
	let largest = 0;
	let total = 0;
	
	for(let i = 0; i < scores.length; i++) {
		total += scores[i];
		}
	let avg = total / scores.length;

	for(i=0; i<=largest;i++){
		if (scores[i]>largest) {
			largest=scores[i];
		}
	}

	$("results").innerHTML = `<h2>Results</h2><p>Average Score = `+avg+`</p><p>High Score = Mike with a score of `+largest+`</p>`;
};

const addScore = () => {
	let name = $('name').value;
	let score = parseInt($('score').value);

	if(name ==""){
		alert("Name entry must not be empty.");
	}
	if(Number.isNaN(score)){
		alert(" You must enter a name and a valid score");
	}
	else if(score<0){
		alert(" Score entry must be a positive number from 0 through 100");
	} else{
		names.push(name);
		scores.push(score);
		$("name").focus();
	}

};

const displayScores = () => {
	let table_header = `
	<h2>Scores</h2>
	<tr>
	<th>Name</th>
	<th>Score</th>
	</tr>`;

	let a="";

	let table_data =(function table_data(){
		for(let i in names){
			a += `<tr><td> ${names[i]}</td>`;
			a += `<td>${scores[i]}</td></tr>`;
		}
		return a;
	})();

	$("scores_table").innerHTML = `${table_header} ${table_data}`;


	// for (var i = 0, tr, td; i < names.length; i++) {
	// 	tr = document.createElement('tr');
	// 	td = document.createElement('td');
	// 	td.appendChild(document.createTextNode(names[i]));
	// 	tr.appendChild(td);
	// 	scores_table.appendChild(tr);
	// }

	// $(scores_table).appendChild(scores_table);

};

