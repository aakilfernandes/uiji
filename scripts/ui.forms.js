function submitForm($element){
    $.post($element.attr('action'),$element.serialize());
    
    $element.find('.input input, textarea').removeClass('error').val('')
    
    $element.find('.expandable').slideUp();
    
    $element
        .find('.button input')
        .css('background-color','white')
        .animate({backgroundColor:'#ccc'},'slow');
}

checkbox=function(name,label,checked){
return uiji('.checkbox',function(){$(this)
        .uiji({tag:'input',type:'checkbox',id:name,name:name},function(){
            if(checked){$(this).attr('checked','checked')}
        })
        .uiji({tag:'label',labelFor:name,html:label})})
}

input=function(name,placeholder){
return uiji('.input',function(){$(this)
        .uiji({tag:'input',type:'text',name:name,placeholder:placeholder})
})}

button=function(value,isDisabled){
return uiji('.button',function(){$(this)
    .uiji({tag:'input',type:'submit',value:value,'class':'emphasis'},function(){
        if(isDisabled){$(this).attr('disabled','disabled')}
    })})
}

form=function(classAttr,action,method){
    return uiji({tag:'form','class':classAttr,action:action,method:method})
}

emailForm = function(){
return uiji('.section',function(){$(this)
    .uiji(sectionHeader('Subscribe To My','Email Updates'))
    .uiji(form('subscribe','handle/subscribe.php','post'),function(){$(this)
        .submit(function(){
            var isValid = $(this).data('isValid');
            if(isValid){
                submitForm($(this));
            }else{
                $(this).find('.email input').addClass('error').focus()
            }
            return false;
        })
        .uiji('.body',function(){$(this)
            .uiji(input('email','your email'),function(){
                var $input = $(this).find('input');
                $input.click(function(){
                    $('form.subscribe .expandable').slideDown();
                })
                $input.bind('keypress click keyup keydown change',function(){
                    var val = $(this).val();
                    var isValid = true;
                    if(val.indexOf('@')<2 || val.indexOf('.')<2){
                        isValid = false;
                    }
                    if(val.indexOf('.')>val.length-2){
                        isValid = false;
                    }
                    if(isValid){
                        $('form.subscribe').data('isValid',true);
                        $(this).removeClass('error')
                        $('form.subscribe input[type=submit]').removeAttr('disabled');
                    }else{
                        $('form.subscribe').data('isValid',false);
                        $('form.subscribe input[type=submit]').attr('disabled','disabled');
                    }
                })
            })
            .uiji('.expandable',function(){$(this)
                .uiji('.fieldLabel.emphasis"I am a:"')
                .uiji(checkbox('isDeveloper','Developer'))
                .uiji(checkbox('isDesigner','Designer'))
                .uiji(checkbox('isHR','Talent Coordinator'))
                .uiji(checkbox('isPM','Project Manager'))
                .uiji(checkbox('isDeveloper','Developer'))
                .uiji('.fieldLabel.emphasis"Email me About:"')
                .uiji(checkbox('wantsCollab','Collaborations',true))
                .uiji(checkbox('wantsBlog','Blog Posts',true))
            })
            .uiji(button('Subscribe',true))
        })
    })
})};

contactForm = function(){
return uiji('.section')
    .uiji(sectionHeader('Get In Touch','Contact Me'))
    .uiji(form('contact','handle/contact.php','post'),function(){$(this)
        .uiji(input('name','your name'))
        .uiji(input('email','your email address'))
        .uiji(input('message','your message'))
        .uiji(button('Send',true))
        .submit(function(){
            var isValid = true;
            $('form.contact input,form.contact textarea').each(function(){
                if($(this).val().length<1){
                    isValid = false;
                    $(this).addClass('error')
                }else{
                    $(this).removeClass('error')
                }
            });
            if(isValid){
                submitForm($(this));
            }
            return false;
        })
        .find('input,textarea').keypress(function(){
            var isValid = true;
            $('form.contact input,form.contact textarea').each(function(){
                if($(this).val().length<1){
                    isValid = false;
                }else{
                    $(this).removeClass('error')
                }
            })
            $('form.contact').data('isValid',isValid);
            if(isValid){
                $('form.contact .button input').removeAttr('disabled')
            }else{
                $('form.contact .button input').attr('disabled','disabled')
            }
        })
     })
}

forms = function(){
return uiji('#forms',function(){$(this)
    .uiji(emailForm())
    .uiji(contactForm())
})
}