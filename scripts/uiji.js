jQuery.fn.uiji = function(input,func){
    if(input instanceof jQuery){
       var $input = input;
       if(typeof func == 'function'){
            $input.each(func);   
       }
       $(this).append($input);
    }else{
        $(this).append(uiji(input,func));   
    }
    return $(this);
}


var uiji=function(input,func){
	var $=jQuery, elA=[],$elA, infoA =[];
	
	switch(typeof input){
		case 'string':
			//var queryA 	= input.split(',');
			var queryA = [input];
			$.each(queryA,function(index,query){
				var infoC		= {tag:''},
					isAttrKey	= false,
					prop		= 'tag',
					attrKey		= '';
				$.each(query,function(index,letter){
				    if(letter==undefined){
				        letter=query.charAt(index);
				    }
					if(prop=='html'){
					    if(letter=='"'){
                            prop='tag';
                        }else{
                            infoC.html+=letter;
                        }
					}else if(prop=='attrC'){
					    switch(letter){
					        case '=':
					            if(isAttrKey){
					                infoC.attrC[attrKey]='';
                                    isAttrKey=false;   
					            }else{
					                infoC.attrC[attrKey]+=letter;
					            }
                                break;
                            case '}':
                                prop='tag';
                                isAttrKey=false;
                                break;
                            case '|':
                                isAttrKey=true;
                                attrKey='';
                                break;
                            default:
                                if(isAttrKey){
                                    attrKey+=letter;
                                }else{
                                    infoC.attrC[attrKey]+=letter;
                                }
                                break;
					    }
					}else{
    					switch(letter){
    						case '#':
    							prop='id';
    							infoC.id='';
    							break;
    						case '*':
    							prop='length';
    							infoC.length='';
    							break;
    						case '.':
    							prop='classA';
    							if(typeof infoC.classA=='object'){
    								infoC.classA.push('');
    							}else{
    								infoC.classA=[''];
    							}
    							break;
    						case '{':
    							prop='attrC';
    							infoC.attrC={};
    							isAttrKey=true;
    							break;
    						case '"':
    							if(prop=='html'){
    								prop='tag'
    							}else{
    								infoC.html='';
    								prop='html'
    							}
    							break;
    						default:
    							switch(prop){
    								case 'classA':
    									infoC.classA[infoC.classA.length-1]+=letter;
    									break;
    								default:
    									infoC[prop]+=letter;
    									break;
    							}
    							break;
    					}
    				}
				})
				infoA.push(infoC);
			})
			break;
		case 'object':
			if(input instanceof $){
			    if(typeof func == 'function'){
			         $.each(input,func)   
			    }
				return input;	
			}else{
				infoA = [input];
			}
			break;
		case 'undefined': case 'null':
			infoA = [{}];
			break;
	}
	
	$.each(infoA,function(index,info){
		var $el,html;
		if(info.tag==undefined || info.tag==""){info.tag='div'}
		if(info.length==undefined || info.length==""){info.length=1}else{info.length=parseInt(info.length)}
		switch(info.tag){
			case 'img':
				html='<'+info.tag+'/>';
				break;
			default:
				html='<'+info.tag+'></'+info.tag+'>';
				break;
		}
		$el = $(html);
		
		for(prop in info){
			var val = info[prop];
			switch(prop){
				case 'text':
					$el.text(val);
					break;
				case 'html':
					$el.html(val);
					break;
				case 'tag':
					break;
				case 'classA':
					$.each(val,function(index,value){
						$el.addClass(value)
					})
					break;
				case 'attrC':
					for(value in val){
						$el.attr(value,val[value]);
					}
					break;
				default:
					$el.attr(prop,val);
					break;
			}
		}
		for(var eq=0;eq<info.length;eq++){
			elA.push($el.clone(true,true).addClass('eq'+eq)[0]);	
		}
	})
	
	
	$elA = $(elA);
	
	if(typeof func == 'function'){
		$.each($elA,func);
	}
	return $elA;
}

uiji.htmlEncode = function(value){
  return $('<div/>').text(value).html();
}

uiji.htmlDecode = function(value){
  return $('<div/>').html(value).text();
}


