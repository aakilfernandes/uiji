jQuery.Color.hook('fill stroke');		
var colors = ['#007F7B','#6CB33F','#00853F','#005581','#0076C0','#002D56','#EF5091','#6C217F','#EE3524','#FFD200','#F8971D','#FBB034','#EE3524','#FFD200']
function colorfyLogo(){
    var colorsN = colors.length;
    $('.logo path').each(function(index){
        var colorn = $(this).data('colorn');
        if(!colorn){
	        var colorn = index;	
        }
        var colorn1 = colorn+1;
        if(colorn1>colorsN){
        	colorn1 = colorn1-colorsN;
        }
        $(this).data('colorn',colorn1);
        
        var color = colors[colorn1];
        /*var duration = 3000+Math.floor(Math.random()*2000)    
        $(this).animate({fill:color},duration,'linear',function(){
        	setTimeout(colorfyLogo,1000)
        })
        */
       	$(this).animate({fill:color},10000,'linear')
    })
}


function colorfyColorBar(){
	var colorsN = colors.length;
	$('.colorBar div').each(function(index){
        var colorn = $(this).data('colorn');
        if(!colorn){
	        var colorn = index;	
        }
        var colorn1 = colorn+1;
        if(colorn1>colorsN){
        	colorn1 = colorn1-colorsN;
        }
        $(this).data('colorn',colorn1);
        
        var color = colors[colorn1];
        /*var duration = 3000+Math.floor(Math.random()*2000)    
        $(this).animate({fill:color},duration,'linear',function(){
        	setTimeout(colorfyLogo,1000)
        })
        */
       	$(this).animate({backgroundColor:color},10000,'linear')
    })
}

function colorfyForms(){
	var colorsN = colors.length;
	$('#forms .name').each(function(index){
        var colorn = $(this).data('colorn');
        if(!colorn){
	        var colorn = 9;	
        }
        var colorn1 = colorn+1;
        if(colorn1>colorsN){
        	colorn1 = colorn1-colorsN;
        }
        $(this).data('colorn',colorn1);
        
        var color = colors[colorn1];
        /*var duration = 3000+Math.floor(Math.random()*2000)    
        $(this).animate({fill:color},duration,'linear',function(){
        	setTimeout(colorfyLogo,1000)
        })
        */
       	$(this).animate({color:color},10000,'linear')
    })
}

function colorfyContent(){
	var colorsN = colors.length;
	$('#content .name').each(function(index){
        var colorn = $(this).data('colorn');
        if(!colorn){
	        var colorn = 4;	
        }
        var colorn1 = colorn+1;
        if(colorn1>colorsN){
        	colorn1 = colorn1-colorsN;
        }
        $(this).data('colorn',colorn1);
        
        var color = colors[colorn1];
        /*var duration = 3000+Math.floor(Math.random()*2000)    
        $(this).animate({fill:color},duration,'linear',function(){
        	setTimeout(colorfyLogo,1000)
        })
        */
       	$(this).animate({color:color},10000,'linear')
    })
}

setInterval(function(){
	colorfyLogo()
	colorfyColorBar()
	colorfyForms()
	colorfyContent	()	
},10000)
