function question3()
{

	q2=0;
	q3=1;
	document.getElementById('question').innerHTML = 'Does the mouse reach the cheese?!';
	i=0;
	w=1;
	
	setTimeout(q31,2000);
}

function q31()
{
	q=1;
	j = Math.floor((Math.random()*11)+1);
	while(w==j)
	{
		j = Math.floor((Math.random()*5)+1);
	}

	c.style.width = "500px";
	c.style.height = "365px";
	w=j;

	if(i==5)
	{
		setTimeout(q32,3000);
		q=0;
		return;
	}

	if(j==1)
	{
		q=1;
		c.src = "images/mou1.png";
		ans=1;
	}
	if(j==2)
	{
		q=1;
		c.src = "images/mou2.png";
		ans=0;
	}
	if(j==3)
	{
		q=1;
		c.src = "images/mou3.png";
		ans=1;
	}
	if(j==4)
	{
		q=1;
		c.src = "images/mou4.png";
		ans=1;
	}
	if(j==5)
	{
		q=1;
		c.src = "images/mou5.png";
		ans=0;
	}
	if(j==6)
	{
		q=1;
		c.src = "images/mou6.png";
		ans=0;
	}
	if(j==7)
	{
		q=1;
		c.src = "images/mou7.png";
		ans=1;
	}
	if(j==8)
	{
		q=1;
		c.src = "images/mou8.png";
		ans=1;
	}
	if(j==9)
	{
		q=1;
		c.src = "images/mou9.png";
		ans=0;
	}
	if(j==10)
	{
		q=1;
		c.src = "images/mou10.png";
		ans=0;
	}
	if(j==11)
	{
		q=1;
		c.src = "images/mou11.png";
		ans=1;
	}
	
	i++;
	setTimeout(q31,3000);

}

function q32()
{
	q=0;
	c.style.width = "0px";
	c.style.height = "0px";
	document.getElementById('question').innerHTML = 'Pay attention to the next question!!';
	setTimeout(question4,2000);
}