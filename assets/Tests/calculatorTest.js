var Test = {
	Name : function(Num){
		var n,n1;
		try{	
			var n1 = typeof Num;
			if(Num>0) throw "Success";
			if(Num<0) throw "It is a Negative Number";		
			if(Num=="")throw "Empty Value";
			if(n1=="string") throw "It is a String";
		}
		catch(err){
				n = err;
			}
		return n;
	}

}