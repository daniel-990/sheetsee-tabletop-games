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
        //Sheetsee.makeTable(tableOptions)
      
        for (var i = 0; i < data.length; i++) {
        	var datos_consolas = data[i];

        			var template = $('#template').html();

					var rendered = Mustache.render(template, {
						marca: data[i].marca,
						marca_id: data[i].marcaid,
						categoria: data[i].categoria,
						ano: data[i].ano,
						descripcion: data[i].descripcion,
						imagen: data[i].imagen,
						logo: data[i].logo,
						nombre: data[i].nombre,
						id: data[i].id
					});
					var marcaId = data[i].marcaid;
					$('#target').append(rendered);

					$("."+marcaId).hide();
        }

        $("#categrias div button").on('click', function(){
        	var marcaId_2 = $(this).attr('data-categoria');

        	console.log(marcaId_2);

        	if (marcaId_2 === marcaId_2){
        		$("."+marcaId_2).show();
        	}else{
        		
        	}

        })
  
   /* 
        var marcas = data.map( function(registro) {
            return registro.marca;   
        });
        

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
    