$(document).ready(function(){
    $('#signup').validate({
       rules:{
        fname:{
            required:true,
            minlength:4
        },
        passwd:{
            required:true,
            minlength:5
        },
        mail:{
            required:true,
            email:true
        },
        nickname:{
           required:true,
           maxlength:6
        },
        day:{
            required:true,
        }

       },
       messages:{
        fname:{
        required:"Enter Firstname correct",
        minlength:"Enter at least 4 characters"
        }


        
       }
    })

})

