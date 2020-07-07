rotto.onclick = function(){
		var arr = [];
		var result = [];
		for(i=1;i<=45;i++){
			arr.push(i);
			console.log(arr);
		}
		
		while (result.length<6){
			var strike = Math.floor(Math.random()*arr.length+1);
			if (result.indexOf(strike,0)== -1){
				// 중복 체크
				console.log(strike);
				result.push(strike);
			}
			console.log(result);
		}
		here.innerHTML = "<br>"+result;
	};