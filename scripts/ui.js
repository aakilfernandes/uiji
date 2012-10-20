$(document).ready(function(){
$('body')
    .uiji(githubRibbon())
    .uiji(colorBar())
    .uiji(header())
    .uiji(main())
    .uiji(colorBar())
})

main = function(){
return uiji('#main',function(){$(this)
    .uiji('.inner',function(){$(this)
        .uiji('#forms',function(){$(this)
            .uiji(emailForm())
            .uiji(contactForm())})
        .uiji('#content',function(){$(this)
             .uiji('.section',function(){$(this)
                 .uiji('p"uiji.js (<i>pronounced wee-gee</i>) is jQuery in reverse. We know that we can use jQuery to select elements like such:"')
                 .uiji(snippet("$('#main')  ",'javascript'))
                 .uiji('.divider')
                 .uiji('p"But now you can use the same syntax to <b>create</b> jQuery elements."')
                 .uiji(holder('helloWorld',demos.helloWorld))
                 .uiji('p"Or you can pass in an object. Note that I used \'_class\' for the element\'s class attribute. This is because \'class\' is a reserved word, and using it as a key will cause a crash in older browsers. uiji.js automatically removes any leading underscore."')
                 .uiji(holder('objectWorld',demos.objectWorld))
                 .uiji('p"When you\'ve got a lot of html to create, you can use some baked in shortcuts."')
                 .uiji(holder('slimShady',demos.slimShady))
                 .uiji('p"You can use callbacks to create heirarchy."')
                 .uiji(holder('heirarchy',demos.heirarchy))
                 .uiji('p"Use templates for ease. This demo uses a uiji.js template \'timeButton\'.  Create some timeButtons and click to check when they were created"')
                 .uiji(holder('timeButton',demos.timeButton))
                 .uiji('p"How far can you take uiji.js? If you view the source of this page you\'ll see that the entire body was created with jQuery."')
                 .uiji('p.viewSource',function(){
                    var $this=$(this);
                    $.get('',function(data){
                        window.x=data;
                        $this.uiji(snippet(data,'html'))
                    })
                })
                .uiji('p"Thats definitely overkill. I did it just so I\'d have to confront as many kinks as possible. But the great thing about uiji.js is that you can switch between jQuery and plain ol\l HTML when it suits you. Check the source code for more examples."')
                .uiji('p"uiji.js has been tested in (Mobile) Safari, Chrome, Firefox, and IE7+."')
                .uiji(linkButton('View Comments on Hacker News','http://www.google.com'))
                .uiji(linkButton('Fork Me on GitHub','http://www.google.com/https://github.com/aakilfernandes/uiji/'))
             })
        })
    })
})
}

linkButton=function(html,href){
return uiji({tag:'a',_class:'link button emphasis',html:html,href:href})
}

colorBar=function(){
return uiji('.colorBar',function(){
    $(this).uiji('*13')
})}


logo=function(){
return uiji('a{href=/}',function(){$(this)
    .uiji({
    _class:'logo',
    html:
        '<svg version="1.1" class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1655.494px" height="725.373px" viewBox="0 0 1655.494 725.373" enable-background="new 0 0 1655.494 725.373" xml:space="preserve"> \
            <g><g><g><path fill="#007F7B" d="M931.67,391.935c-0.606-62.775,49.806-114.166,112.574-114.775 c62.789-0.589,198.467,111.798,198.467,111.798s-133.496,114.977-196.279,115.561 \
            C983.646,505.126,932.264,454.719,931.67,391.935z"></path> <path fill="#6CB33F" d="M1148.635,531.136c0.182,62.778-50.578,113.834-113.34,114.018 c-62.798,0.175-197.721-113.118-197.721-113.118s134.268-114.084,197.043-114.249C1097.41,417.604,1148.457,468.344,1148.635,531.136z"></path><path fill="#00853F" d="M1125.223,225.046c0.178,62.782-50.572,113.834-113.338,114.02 c-62.794,0.174-197.721-113.118-197.721-113.118s134.271-114.084,197.047-114.249 \
             C1074,111.514,1125.041,162.257,1125.223,225.046z"></path> \
             <path fill="#005581" d="M1096.521,385.639c0,87.083-70.592,157.676-157.673,157.676c-87.081,0-273.769-157.676-273.769-157.676 s186.688-157.673,273.769-157.673C1025.93,227.965,1096.521,298.554,1096.521,385.639z"></path> <path fill="#0076C0" d="M911.855,360.145c50.511,70.937,33.954,169.396-36.982,219.898 c-70.934,50.503-314.465,30.345-314.465,30.345s60.613-236.723,131.551-287.232C762.894,272.651,861.345,289.198,911.855,360.145 z"></path> <path fill="#002D56" d="M903.788,419.417c-55.248,67.317-154.604,77.103-221.914,21.859 c-67.312-55.252-111.579-295.574-111.579-295.574s244.334-3.444,311.647,51.807C949.254,252.76,959.036,352.102,903.788,419.417z"></path> <path fill="#EF5091" d="M808.839,77.818c44.122,75.079,19.023,171.713-56.053,215.83c-75.083,44.111-315.917,2.747-315.917,2.747 S517.939,65.872,593.018,21.76C668.098-22.359,764.724,2.735,808.839,77.818z"></path> \
             <path fill="#6C217F" d="M744.869,650.671c-21.543,58.963-86.826,89.311-145.789,67.772 c-58.971-21.556-146.381-174.525-146.381-174.525s165.432-60.597,224.4-39.044C736.077,526.424,766.412,591.693,744.869,650.671z "></path> \
             <path fill="#EE3524" d="M660.179,342.736c-22.241,84.192-108.528,134.416-192.715,112.177 c-84.192-22.241-224.419-222.366-224.419-222.366s220.771-104.773,304.958-82.526 \
             C632.195,172.261,682.422,258.535,660.179,342.736z"></path> <path fill="#FFD200" d="M652.553,419.75c22.91,84.009-26.625,170.693-110.629,193.612 c-84.015,22.901-305.614-80.097-305.614-80.097s138.624-201.247,222.635-224.153C542.958,286.196,629.638,335.727,652.553,419.75 z"></path> <path fill="#F8971D" d="M434.057,384.28c0,87.082-70.595,157.676-157.67,157.676c-87.082,0-273.768-157.676-273.768-157.676 s186.686-157.674,273.768-157.674C363.462,226.606,434.057,297.195,434.057,384.28z"></path> <path fill="#FBB034" d="M1619.609,526.543c-15.512,60.223-76.906,96.468-137.131,80.957 \
             c-60.217-15.516-161.232-157.817-161.232-157.817s157.186-75.784,217.41-60.275 C1598.883,404.918,1635.125,466.321,1619.609,526.543z"></path> <path fill="#EE3524" d="M1654.941,289.549c6.109,61.89-39.105,117.033-100.986,123.142 c-61.885,6.112-205.637-92.84-205.637-92.84s121.602-125.172,183.488-131.286C1593.701,182.452,1648.82,227.667,1654.941,289.549 z"></path> <path fill="#FFD200" d="M1596.686,388.958c0,71.445-57.914,129.364-129.363,129.364c-71.441,0-224.611-129.364-224.611-129.364 s153.17-129.365,224.611-129.365C1538.771,259.593,1596.686,317.508,1596.686,388.958z"></path> </g> </g> </g> \
        </svg>'
    })
})}

header=function(){
return uiji('#header.emphasis',function(){$(this)
    .uiji(logo())
    .uiji('#title',function(){$(this)
        .uiji('a{href=/}"uiji&bull;js"')})
    .uiji('.divider')
    .uiji('.tagline"uiji.js is jquery in reverse"')})
}

sectionHeader=function(nameLead,name){
return uiji('.header.emphasis',function(){$(this)
        .uiji({_class:'nameLead',html:nameLead})
        .uiji({_class:'name',html:name})})
}

snippet=function(code,language){
if(!language){language='javascript'};
if (navigator.userAgent.indexOf("Firefox")!=-1 && language=='javascript'){//firefox converts ' to ", and " to \"
    var codeParts = code.split('\\"');
    $.each(codeParts,function(index,value){
        codeParts[index]=value.split('"');
        codeParts[index]=codeParts[index].join("'")
    })
    code = codeParts.join('"')
    code = js_beautify(code);
}

return uiji({tag:'pre',html:uiji.htmlEncode($.trim(code))},function(){
   var $this = $(this);
   //doesn't work : $this.snippet('html',{style:'golden',transparent:true})
   setTimeout(function(){
     $this.snippet(language,{style:'golden'}) //works, but no idea why  
   },0)
})    
}

holder=function(id,func){
var funcString = func.toString();
return uiji({id:id,_class:'holder'},function(){$(this)
    .uiji(snippet(funcString.substring(funcString.indexOf('{')+1,funcString.length-1),'javascript'))
    .uiji(button('Run'),function(){
        $(this).click(func)
    })
    .uiji('.outputTitle',function(){$(this)
        .uiji({html:'#'+id+' .output:',_class:'emphasis'})  
    })
    .uiji('.output')
    .uiji('.divider')
    })
}

githubRibbon=function(){
    return uiji('a.githubRibbon{href=https://github.com/aakilfernandes/uiji',function(){$(this)
        .uiji({
            tag:'img',
            src:'https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png',
            alt:'Fork Me On Github'
        })
    })
}

demos = {
helloWorld:function(){$('#helloWorld .output').uiji('p.greeting"Hello World!"')},
objectWorld:function(){$('#objectWorld .output').uiji({tag:'p',_class:'greeting',html:'Hello Object World!'})},
slimShady:function(){$('#slimShady .output')
    .uiji('p{style=font-style:italic;}"May I have your attention please"*2')
    .uiji('a{href=http://en.wikipedia.org/wiki/Eminem|target=blank"}"Will the real Slim Shady please stand up."')
},
heirarchy:function(){$('#heirarchy .output')
    .uiji('.white.block',function(){$(this)
        .uiji('.gray.block*2',function(){$(this)
            .uiji('.black.block*2')
        })
    })
},
timeButton:function(){
var timeButton = function(time){
return uiji('.time.button',function(){$(this)
    .uiji({tag:'input',type:'submit',value:'When was I born?',_class:'emphasis'},function(){$(this)
        .click(function(){alert(time)});
    })})
}

var time = new Date().getTime();
$('#timeButton .output').uiji(timeButton(time))

}
}
