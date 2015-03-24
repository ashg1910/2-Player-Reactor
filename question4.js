function question4()
{
	//timer
	q3=0;
	q4=1;
	document.getElementById('question').innerHTML = 'Hit when color matches the word';
	i=0;j = Math.floor((Math.random()*5)+1);
	w=1;
	setTimeout(q41,2000);
}

function q41()
{
	q=1;
	j = Math.floor((Math.random()*8)+0);

	while(w==j)
	{
		j = Math.floor((Math.random()*5)+1);
	}
	w=j;

	if(i==8)
	{
		q=0;
		setTimeout(q42,2000);
		return;
	}

	if(j==0)
		{
			b.innerHTML = "BLUE";
			b.style.color = "red";
			ans=0;
		}
		if(j==1)
		{
			b.innerHTML = "RED";
			b.style.color = "blue";
			ans=0;
		}
		if(j==2)
		{
			b.innerHTML = "PURPLE";
			b.style.color = "purple";
			ans=1;
		}
		if(j==3)
		{
			b.innerHTML = "GREEN";
			b.style.color = "white";
			ans=0;
		}
		if(j==4)
		{
			b.innerHTML = "YELLOW";
			b.style.color = "yellow";
			ans=1;
		}
		if(j==5)
		{
			b.innerHTML = "WHITE";
			b.style.color = "green";
			ans=0;
		}
		if(j==6)
		{
			b.innerHTML = "BROWN";
			b.style.color = "brown";
			ans=1;
		}
		if(j==7)
		{
			b.innerHTML = "GREEN";
			b.style.color = "yellow";
			ans=0;
		}
		i++;
		
		setTimeout(q41,2000);
}

function q42()
{
	q=0;
	b.innerHTML = '';
	document.getElementById('question').innerHTML = 'Kya ap paanchvi paas se tez hai??!!';
	setTimeout(question5,3000);
}