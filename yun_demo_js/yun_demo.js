var acc_Array=new Array();
var pass_Array=new Array();
var i=0;

var now_shengchanqiye="张三";

var shengchanqiyeArray=new Array();
function shengchanqiye(account,password,qiyetype,name,number)
{
	this.account=account;
	this.password=password;
	this.qiyetype=qiyetype;
	this.name=name;
	this.number=number;
}
function find_relyon_account(account)
{
	for(k=0;k<shengchanqiyeArray.length;k++)
	{
		if(shengchanqiyeArray[k].account==account)
		{
			return k;
		}
	}
	return -1;
}
function shengchan_login()//生产企业注册按钮
{
	var form0=document.getElementById("form0");
	var acc=form0.account;
	var pas1=form0.password1;
	var pas2=form0.password2;
	var ifread=form0.read;
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
				 	if(ifread.checked==false)
				 	{
				 		alert("请确认您阅读并同意智能制造原型演示系统服务条款");
				 	}
				 	else{
					 	// acc_Array[i]=acc.value;
					 	// pass_Array[i]=pas1.value;
					 	// var ashengchanqiye=new shengchanqiye(acc.value,pas1.value);
					 	// shengchanqiyeArray.push(ashengchanqiye);
					 	// i++;//i表示了有多少个注册用户了
					 	setCookie('username',acc.value);
					 	acc.value="";
					 	pas1.value="";
					 	pas2.value="";
					 	//alert("success."+shengchanqiyeArray.length);
					 	window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/shengchanqiye_logon.html";
				 	}
				 }
			}
		}
	}
}

function shengchan_logon()//生产企业登录按钮
{
	// window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/scqiye_funcChoose.html";////
	// var f2=document.getElementById('form0');

	// var acc=f2.account;
	// var pas=f2.password;
	// alert("i:"+shengchanqiyeArray.length);

	// if(acc.value==null||acc.value=="")
	// {
	// 	alert("Account must be filled out");
	// 	acc.focus();
	// }
	// else{
	// 	if(pas.value==null||pas.value=="")
	// 	{
	// 		alert("password must be filled out");
	// 		pas.focus();
	// 	}
	// 	else{//账号密码都填了
	// 		for(j=0;j<i;j++)
	// 		{
	// 			if(acc_Array[j]==acc.value)// 找到了注册过的账号
	// 			{
	// 				if(pass_Array[j]==pas.value)
	// 				{
	// 					//alert("登录成功");myModalLabel2
	// 					now_shengchanqiye=acc.value;
	// 					//alert("success");
	// 					window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/scqiye_funcChoose.html";
	// 					acc.value="";
	// 					pas.value="";
	// 					return;
	// 				}
	// 				else {
	// 					alert("密码不对");
	// 					acc.value="";
	// 					pas.value="";
	// 					return;
	// 				}
	// 			}
	// 		}
	// 		alert("该账号不存在");
	// 		acc.value="";
	// 		pas.value="";
	// 	}

	// }
	var f2=document.getElementById('form0');

	var acc=f2.account;
	if(acc.value!=null && acc.value!="")
	{
		setCookie('username',acc.value);
	}

	window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/scqiye_funcChoose.html";
}
// 在完善公司类型界面点击了确定按钮
function companytype_sure()  
{
	window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/scqiye_location.html";
	var f=document.getElementById('form_type');
	var type_temp=f.type;
	for (var i = 0; i < type_temp.length; i++) {
		if(type_temp[i].checked)
			var type=type_temp[i].value;
	}
	var name=f.qiyename.value;
	var number=f.qiyecode.value;

}
// 确定阶段个数界面点击确定
function jieduan_sure() {
      var f=document.getElementById('form_type');
      var jieduan = f.jieduan;

      if(jieduan.value==""||jieduan.value==null)
      {
        alert("必须填入阶段个数!");
      }else{
        $("#form_type").css("visibility","hidden");
        
        for (var i = 0; i < jieduan.value; i++) {
            var j=i+1;
            var hang="<p style='display:inline;font-size:20px;'>第</p>"+j+"<div class='form-group' style='display:inline'>阶段为<input type='text'  id='' placeholder='阶段名'   style='width: 100px'>，生产设备处于<select name='zhuangtai'><option value='kong'>空闲可用</option><option value='mang'>暂不可用</option></select>状态；若生产设备暂不可用，保证<input type='text'   style='width: 100px'>年<input type='text'  style='width: 100px'>月<input type='text'    style='width: 100px'>日之后可用。</div>"+"<br/>";
            $("#hide").append(hang);
        }
        // var url1 = "../%E4%BA%91%E5%88%B6%E9%80%A0demo/scqiye_liucheng.html";
        var hang2="<div class='form-group'><div class='col-sm-offset-3 col-sm-2'><button type='button' class='btn btn-default'  onclick='fanhui_jieduan()'>返回</button></div><div class='col-sm-offset-2 col-sm-3'><button type='button' class='btn btn-primary'   data-toggle='modal' data-target='#myModal'>确定</button></div></div>";
        $("#hide").append(hang2);
        $("#hide").css("visibility","visible");
      }
}
function fanhui_jieduan() 
{

	window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/scqiye_liucheng.html";
}
function xinxi_sure()
{
	alert("恭喜您！您的制造能力信息已经录入到系统。");
}



////////////////////////////////////////////////////以下为消费者/////////////////////////////////////
function customer_login()
{
	var form0=document.getElementById("form0");
	var acc=form0.account;
	var pas1=form0.password1;
	var pas2=form0.password2;
	var ifread=form0.read;
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
				 	if(ifread.checked==false)
				 	{
				 		alert("请确认您阅读并同意智能制造原型演示系统服务条款");
				 	}
				 	else{
					 	// acc_Array[i]=acc.value;
					 	// pass_Array[i]=pas1.value;
					 	// var ashengchanqiye=new shengchanqiye(acc.value,pas1.value);
					 	// shengchanqiyeArray.push(ashengchanqiye);
					 	// i++;//i表示了有多少个注册用户了
					 	//alert(acc.value);
					 	setCookie('username',acc.value);

					 	acc.value="";
					 	pas1.value="";
					 	pas2.value="";
					 	//alert("success."+shengchanqiyeArray.length);
					 	window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/customer_logon.html";
				 	}
				 }
			}
		}
	}
}

function customer_logon()
{
	var f2=document.getElementById('form0');

	var acc=f2.account;
	if(acc.value!=null && acc.value!="")
	{
		setCookie('username',acc.value);
	}

	window.location.href="customer_funcChoose.html";
}

function xngc1_login()
{
	var form0=document.getElementById("form0");
	var acc=form0.account;
	var pas1=form0.password1;
	var pas2=form0.password2;
	var ifread=form0.read;
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
				 	if(ifread.checked==false)
				 	{
				 		alert("请确认您阅读并同意智能制造原型演示系统服务条款");
				 	}
				 	else{
					 	// acc_Array[i]=acc.value;
					 	// pass_Array[i]=pas1.value;
					 	// var ashengchanqiye=new shengchanqiye(acc.value,pas1.value);
					 	// shengchanqiyeArray.push(ashengchanqiye);
					 	// i++;//i表示了有多少个注册用户了
					 	//alert(acc.value);
					 	setCookie('username',acc.value);

					 	acc.value="";
					 	pas1.value="";
					 	pas2.value="";
					 	//alert("success."+shengchanqiyeArray.length);
					 	window.location.href="xngc1_logon.html";
				 	}
				 }
			}
		}
	}
}

function gly1_login()
{
	var form0=document.getElementById("form0");
	var acc=form0.account;
	var pas1=form0.password1;
	var pas2=form0.password2;
	var ifread=form0.read;
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
				 	if(ifread.checked==false)
				 	{
				 		alert("请确认您阅读并同意智能制造原型演示系统服务条款");
				 	}
				 	else{
					 	// acc_Array[i]=acc.value;
					 	// pass_Array[i]=pas1.value;
					 	// var ashengchanqiye=new shengchanqiye(acc.value,pas1.value);
					 	// shengchanqiyeArray.push(ashengchanqiye);
					 	// i++;//i表示了有多少个注册用户了
					 	//alert(acc.value);
					 	setCookie('username',acc.value);

					 	acc.value="";
					 	pas1.value="";
					 	pas2.value="";
					 	//alert("success."+shengchanqiyeArray.length);
					 	window.location.href="gly1_logon.html";
				 	}
				 }
			}
		}
	}
}




//消费者在名称类型界面确认，进入数量和性能界面
function nametype_sure()
{
	window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/customer_numxing.html";
}
//消费者在数量和性能界面确认，进入收货界面
function numxing_sure()
{
	window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/customer_shouhuo.html";
}
//消费者在收货界面点击确认，进入确认生成订单界面
function  shouhuo_sure()
{
	window.location.href="../%E4%BA%91%E5%88%B6%E9%80%A0demo/customer_xuqiusure.html";
}




//cookie
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}

function setCookie(c_name,value)
{
// var exdate=new Date()
// exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)
// ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function checkCookie()
{
username=getCookie('username');
if (username!=null && username!="")
  {alert('Welcome again '+username+'!');}
else 
  {
  username=prompt('Please enter your name:',"")
  if (username!=null && username!="")
    {

    setCookie('username',username);
    
    }
  }
}
function initname()
{
	// username=getCookie('username');
	// if (username!=null && username!="")
	// {	
	// 	document.getElementById("user_name").innerHTML=username;
	// 	//alert('Welcome again '+username+'!');
	// }
	// else 
	// {
	//   	alert("no cookie");
	// }
}

		function unfin_order()
		{
			document.getElementById('cont_0').style.visibility="visible";
			document.getElementById('cont_2').style.visibility="hidden";
			document.getElementById('cont_1').style.visibility="hidden";
			document.getElementById('unfinish_order').style.color="#0099ff";
			document.getElementById('finished_order').style.color="black";
			document.getElementById('undesign_order').style.color="black";
		}

		function fini_order()
		{
			document.getElementById('cont_2').style.visibility="visible";
			document.getElementById('cont_0').style.visibility="hidden";
			document.getElementById('cont_1').style.visibility="hidden";
			document.getElementById('finished_order').style.color="#0099ff";
			document.getElementById('unfinish_order').style.color="black";
			document.getElementById('undesign_order').style.color="black";
		}
		function unfin_order0()
		{
			document.getElementById('cont_1').style.visibility="visible";
			document.getElementById('cont_2').style.visibility="hidden";
			document.getElementById('unfinish_order').style.color="#0099ff";
			document.getElementById('finished_order').style.color="black";
		}

		function fini_order0()
		{
			document.getElementById('cont_2').style.visibility="visible";
			document.getElementById('cont_1').style.visibility="hidden";
			document.getElementById('finished_order').style.color="#0099ff";
			document.getElementById('unfinish_order').style.color="black";
		}
		function undesign_order()
		{
			document.getElementById('cont_1').style.visibility="visible";
			document.getElementById('cont_2').style.visibility="hidden";
			document.getElementById('cont_0').style.visibility="hidden";
			document.getElementById('undesign_order').style.color="#0099ff";
			document.getElementById('unfinish_order').style.color="black";
			document.getElementById('finished_order').style.color="black";

		}