function calculateLove() {
    var name1 = document.getElementById("name1").value.trim().toLowerCase();
    var name2 = document.getElementById("name2").value.trim().toLowerCase();
    if (name1 === "" || name2 === "") {
      alert("Please enter both names.");
      return;
  }
    var loveScore = Math.floor(Math.random() * 101); // Generate a random number from 0 to 100
    
    if ( loveScore > 50 ){
      document.getElementById("result").innerHTML = name1+" and "+name2+" you are "+loveScore+"% in love with each other" +" What are a lucky and lovely couple the two of you would make ";
      
   }
    else{
      document.getElementById("result").innerHTML = name1+" and "+name2+" you are "+loveScore+"% in love with each other" + " Sorry it seems there nothing but hope for you, it was never meant to be";
     
    }
     

      
      
}


  
