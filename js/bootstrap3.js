var acc_Array=new Array("1","2","3");
var pass_Array=new Array("1","2","3");
var i=3;
function btn1_click()
{

	
}
function reg_success()
{
	
	//document.getElementById("register_tip").style.visibility = "visible";
	var f1=document.getElementById('form1');
	var acc=f1.Account;
	var pas1=f1.password1;
	var pas2=f1.password2;
	if(acc.value==null||acc.value=="")
	{
		alert("Account must be filled out");
		acc.focus();
	}
	else {
		if(pas1.value==null||pas1.value=="")
		{
			alert(pas1+"password1 must be filled out");
			pas1.focus();
		}
		else {
			if(pas2.value==null||pas2.value=="")
			{

				alert(pas2+"password2 must be filled out");
				pas2.focus();
			}
			else {
				 if(pas1.value!=pas2.value)
				 {
				 	alert("两个密码必须一致");
				 	pas1.focus();
				 }
				 else{//信息全部写完，并且密码一致，提示注册成功
				 	acc_Array[i]=acc.value;
				 	pass_Array[i]=pas1.value;
				 	i++;//i表示了有多少个注册用户了
				 	acc.value="";
				 	pas1.value="";
				 	pas2.value="";
				 	document.getElementById("register_tip").style.visibility = "visible";
				 }
			}
		}
	}

}
function logon()
{
	var f2=document.getElementById('form2');
	var acc=f2.Account;
	var pas=f2.password;
	if(acc.value==null||acc.value=="")
	{
		alert("Account must be filled out");
		acc.focus();
	}
	else{
		if(pas.value==null||pas.value=="")
		{
			alert("password must be filled out");
			pas.focus();
		}
		else{//账号密码都填了
			for(j=0;j<i;j++)
			{
				if(acc_Array[j]==acc.value)// 找到了注册过的账号
				{
					if(pass_Array[j]==pas.value)
					{
						//alert("登录成功");myModalLabel2
						$('#myModal').modal('hide');
						$('#myModal2').modal('show');
						document.getElementById("myModalLabel2").innerHTML="企业用户:"+acc.value;
						acc.value="";
						pas.value="";
						return;
					}
					else {
						alert("密码不对");
						acc.value="";
						pas.value="";
						return;
					}
				}
			}
			alert("该账号不存在");
			acc.value="";
			pas.value="";
		}

	}
	
	
}

function btnTip_click()
{
	document.getElementById("register_tip").style.visibility = "hidden";
	$('#myModal').modal('show');
	// $('#myModal').on('hidden.bs.modal', function (e) {
 //  // do something...
 //  		$('#myModal').modal('show');
	// })

}
function add_info(){//点击企业信息完善按钮
	alert("1");
	window.location.href='../%E4%BB%A3%E7%A0%81/add_infor.html';
}
