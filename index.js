function calculate(){
	var w = parseFloat(document.getElementById("width").value);
	var h = parseFloat(document.getElementById("height").value);
	var c = "";
	var s = "";
	if(w<=0||h<=0){
		alert("数值必须大于0！")
		}
		if(isNaN(w)||isNaN(h)){
			alert("数据不能为空且必须填写合法数据");
			}
			else{
				c=2*(w+h);
				s=w*h;
				}
				document.getElementById("perimeter").value = c;
				document.getElementById("area").value = s;
				}
