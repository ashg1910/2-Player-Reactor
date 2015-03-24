function question2()
{
	q=1;
	q1=0;
	q2=1;
	document.getElementById('question').innerHTML = 'Hit when countdown reaches ZERO!';
	i=8;
	setTimeout(q21,1000);
}

function q21()
{
	if(i>0)
	{
		q=1;
	}
	if(i>=0 && i<=4)
	{
		ans=0;
		b.innerHTML = '?';
	}

	if(i>=5 && i<=8)
	{
		ans=0;
		b.innerHTML = i;
	}

	if(i<=0)
	{
		ans=1;
	}

	if(i==-3)
	{
		q=0;
		ans=0;
		b.innerHTML = 'Lets do it again!!';
		setTimeout(q22,2000);
		i=8;
		return;
	}
	i--;
	setTimeout(q21,1000);

}

function q22()
{
	if(i>0)
	{
	q=1;
	}
	if(i>=0 && i<=4)
	{
		ans=0;
		b.innerHTML = '?';
	}

	if(i>=5 && i<=8)
	{
		ans=0;
		b.innerHTML = i;
	}

	if(i<=0)
	{
		ans=1;
	}

	if(i==-3)
	{
		q=0;
		ans=0;
		b.innerHTML = 'One More Time!!';
		setTimeout(q23,2000);
		i=8;
		return;
	}
	i--;
	setTimeout(q22,1000);

}

function q23()
{
	if(i>0)
	{
	q=1;
	}
	if(i>=0 && i<=4)
	{
		ans=0;
		b.innerHTML = '?';
	}

	if(i>=5 && i<=8)
	{
		ans=0;
		b.innerHTML = i;
	}

	if(i<=0)
	{
		ans=1;
	}

	if(i==-3)
	{
		q=0;
		ans=0;
		document.getElementById('question').innerHTML = 'Time for next question!!';
		b.innerHTML = 'Get ready!';
		setTimeout(q24,1000);
		i=8;
		return;
	}
	i--;
	setTimeout(q23,1000);

}

function q24()
{
	q=0;
	b.innerHTML = '';
	setTimeout(question3(),2000);
}