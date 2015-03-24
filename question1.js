//var a= window.a;
//window.a = document.getElementById('questions');

function start(){

	score1 = 0;
	score2 = 0;
	q=0;
	b.innerHTML = '';
	b.style.color = 'black';

	document.getElementById('playbutton').style.display = 'none';
	document.getElementById('names').style.display = 'none' ;

	p1 = document.getElementById('score1');
	p1.innerHTML = score1;
	p2 = document.getElementById('score2');
	p2.innerHTML = score2;
	var frstpl = document.getElementById('firstplayer').value;
	var scndpl = document.getElementById('secondplayer').value;
	document.getElementById('plr1').innerHTML = frstpl;
	document.getElementById('plr2').innerHTML = scndpl;

	setTimeout(question1,2000);
}



function question1()
{
	//timer
	document.getElementById('question').innerHTML = 'Hit When White';
	//timer
	q=1;
	q1=1;
	ans=0;

	//a = document.getElementById('questions');
	setTimeout(q11,3200);

	/*for(i=0; i<3; i++)
	{
		//timer
		a.style.background = "green";
		q=1;
		ans=1;
		//timer
		a.style.background = "#FFA500";
		ans=0;
		q=0;
		//score1 = score1 + 1;
	}
	a.style.background = "black";
	question2();*/	
}

function q11()
{
	a.style.background = "white";
	q=1;
	ans=1;
	setTimeout(q12,1000);
}

function q12()
{
	q=1;
	a.style.background = "#FFA500";
	ans=0;
	setTimeout(q13,3000);
}

function q13()
{
	q=1;
	a.style.background = "white";
	q=1;
	ans=1;
	setTimeout(q14,1000);
}

function q14()
{
	q=1;
	a.style.background = "#FFA500";
	ans=0;
	setTimeout(q15,3000);
}

function q15()
{
	q=1;
    a.style.background = "white";
	q=1;
	ans=1;
	setTimeout(q16,1000);
}

function q16()
{
	q=1;
	a.style.background = "#FFA500";
	ans=0;
	setTimeout(q17,1000);
}

function q17()
{
	q=0;
	q1=0;
	document.getElementById('question').innerHTML = 'Get ready for the next question!!';
	setTimeout(question2,2000);
}