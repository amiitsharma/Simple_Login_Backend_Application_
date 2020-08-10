console.log("Hello");
function ajax(val)
{
	if(val.length<6)
	{	
	document.getElementById("id1").innerHTML="The username is shorter than required";
	document.getElementById("id1").style.color="red";
	}	
	else
	{
	let req=new XMLHttpRequest();
	req.open("get","Ajaxpage.php?name="+val,true);
	req.send();
	req.onreadystatechange=function(){
	  if(req.readyState==4&&req.status==200)
	  {
		  if(req.responseText=="User name already taken")
		  {
		  document.getElementById("id1").innerHTML=req.responseText;
		  document.getElementById("id1").style.color="red";
		  }
		  else if(req.responseText=="You can take this username")
		  {
		   document.getElementById("id1").innerHTML=req.responseText;
		  document.getElementById("id1").style.color="green";
		  }
	  }
	};
	}
}
