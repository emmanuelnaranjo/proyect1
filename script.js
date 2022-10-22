
        let generator ={};
        generator.quotesList=["Start each day with positive tought and a grateful heart. Roy Bennet","the way i see if you want to see the rainbow, you gotta put up with rain. Dollin Parton","Only in the darkness you can see stars. Mather Luther King","intellectual growth should comence at birth and cease only at death"];
        generator.quote = function () 
        {
            let randomNum = Math.random();
            let randomNumAnswers = randomNum * this.quotesList.length;
            
            let randomIndex = Math.floor(randomNumAnswers);
            
        
            return this.quotesList[randomIndex];
        }
            
           
        document.getElementById("button").addEventListener("click", function() {
            
            let quote = document.getElementById("quote");
            quote.innerHTML =  generator.quote();    
                    
        });
        
    
