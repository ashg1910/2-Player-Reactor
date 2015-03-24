function question5()
{
	//timer
	q4=0;
	q5=1;
	document.getElementById('question').innerHTML = 'Hit when the alphbetical order is correct!!';
	c = document.getElementById('image');
	b.style.color = 'black';
	i=0;
	w=1;
	setTimeout(q51,2000);
}

function q51()
{
	q=1;
	j = Math.floor((Math.random()*5)+1);

	while(w==j)
	{
		j = Math.floor((Math.random()*10)+1);
	}
	w=j;

	c.style.width = "500px";
	c.style.height = "365px";

	if(i==5)
	{
		setTimeout(q52,3000);
		q=0;
		return;
	}

	if(j==1)
	{
		q=1;
		c.src = "images/a1.png";
		ans=1;
	}
	if(j==2)
	{
		q=1;
		c.src = "images/a2.png";
		ans=0;
	}
	if(j==3)
	{
		q=1;
		c.src = "images/a3.png";
		ans=0;
	}
	if(j==4)
	{
		q=1;
		c.src = "images/a4.png";
		ans=0;
	}
	if(j==5)
	{
		q=1;
		c.src = "images/a5.png";
		ans=0;
	}
	if(j==6)
	{
		q=1;
		c.src = "images/a6.png";
		ans=0;
	}
	if(j==7)
	{
		q=1;
		c.src = "images/a7.png";
		ans=1;
	}
	if(j==8)
	{
		q=1;
		c.src = "images/a8.png";
		ans=0;
	}
	if(j==9)
	{
		q=1;
		c.src = "images/a9.png";
		ans=0;
	}
	if(j==10)
	{
		q=1;
		c.src = "images/a10.png";
		ans=0;
	}
	i++;

	
	setTimeout(q51,3000);
}

function q52()
{
	q=0;
	c.style.width = "0px";
	c.style.height = "0px";
	document.getElementById('question').innerHTML = '';
	
	document.getElementById('names').style.display = 'block';
	document.getElementById('playbutton').style.display = 'block';
	if(score1>score2)
	{
		alert(document.getElementById('firstplayer').value + " wins!!");
	}
	else if(score2>score1)
	{
		alert(document.getElementById('secondplayer').value + " wins!!");
	}
	else
	{
		alert("It was a tight match! It is a tie!!");
	}
	b.innerHTML  = 'THANK YOU!\nHit THE Play button to play again!'


}