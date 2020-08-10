
	    function pass_check(str)
        {
		if(str.length<8)
		{
		  document.getElementById("id2").innerHTML="Password is shorter than required";
		document.getElementById("id2").style.color="red";
		}
		else
		{
	    let sc=0,d=0,uc=0,lc=0;	
	    let i;
	    for(i=0;i<str.length;i++)
	    {
		if(str[i]>='A'&&str[i]<='Z')
			uc++;
		else if(str[i]>='a'&&str[i]<='z')
			lc++;
		else if(str[i]>='0'&&str[i]<='9')
			d++;
		else
			sc++;
	    }
	    if(sc==0)
	    {
		document.getElementById("id2").innerHTML="Password lacks special character";
		document.getElementById("id2").style.color="red";
	    }
	    else if(d==0)
	    {
		document.getElementById("id2").innerHTML="Password lacks digit";
		document.getElementById("id2").style.color="red";
	    }
	    else if(uc==0)
	    {
		document.getElementById("id2").innerHTML="Password lacks uppercase character";
		document.getElementById("id2").style.color="red";
	    }
	    else if(lc==0)
	    {
		document.getElementById("id2").innerHTML="Password lacks lowercase character";
		document.getElementById("id2").style.color="red";
	    }
	    else
	    {
		document.getElementById("id2").innerHTML="Password can be used";
		document.getElementById("id2").style.color="green";
	    }
		}
    }
