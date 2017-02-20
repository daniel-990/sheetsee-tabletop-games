
    //https://docs.google.com/spreadsheets/d/1HjoArIjfNxkFKo-8EywQ2PF0MIQJ8zbEWz18zm1QIqg/edit#gid=0
    var URL = "1HjoArIjfNxkFKo-8EywQ2PF0MIQJ8zbEWz18zm1QIqg";
    var dataGlobal = null;
    var primeraVezLoadData = true;             
    
    document.addEventListener('DOMContentLoaded',function() {
        
        Tabletop.init({
            key: URL,
            callback: showInfo,
            simpleSheet: true
        })
        
    })
    
    
    function showInfo(data, tabletop) {
        
        var tableOptions = {
            "data": data,
            "pagination": 700,
            "tableDiv": "#fullTable"
        }
                
        Sheetsee.makeTable(tableOptions)
        

        for (var i = 0; i < data.length; i++) {
        	data[i];
        	console.log(data[i]);
        }
     
        var marcas = data.map( function(registro) {
            return registro.marca;  
              
        });
        
           /*
        for (var i = 0; i < marcas.length; i++) {
            var capturacampo = marca[i];
            
            // menu
            $( "#fitro-tablas #sub-menu1 li" ).on("click", function(){ 
                var str = ""; 
                str += $( this ).attr('data-filter'); 
                                        
                    
                if (capturacampo == str) {
                        console.log(marca[i]);
                    }
                    
               })
        }
        */
        
    }// cierra showInfo
    