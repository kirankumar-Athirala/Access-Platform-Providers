
$(function(){

    $("#register").on('click', function(event){
        event.preventDefault();
        var re_email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var re_mobile = /^\+?[0-9]+[0-9\-]+[0-9]$/
        var re_string = /^[A-Za-z]+$/
        var firstname   = $("#firstname").val();
        var lastname   = $("#lastname").val();
        var mobile     = $("#mobile").val();
        var email      = $("#email").val();
        var username    = $("#username").val();
        var password   = $("#password").val();
        var cpassword  = $("#cpassword").val();
        var provider     = $("#provider").val(); 
        var terms      = $('input[name="terms"]:checked').val();

        if (firstname == 0 || ! re_string.test(firstname))
        {
            document.getElementsByName("firstname")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("firstname")[0].style.borderColor = "white";
        }

        if (lastname == 0 || ! re_string.test(lastname))
        {
            document.getElementsByName("lastname")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("lastname")[0].style.borderColor = "white";
        }

        if (mobile == 0 || ! re_mobile.test(mobile))
        {
            document.getElementsByName("mobile")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("mobile")[0].style.borderColor = "white";
        }
        if (email == 0 || ! re_email.test(email))
        {
            document.getElementsByName("email")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("email")[0].style.borderColor = "white";
        }
        if (username == 0 )
        {
            document.getElementsByName("username")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("username")[0].style.borderColor = "white";
        }
        if (password == 0 )
        {
            document.getElementsByName("password")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("password")[0].style.borderColor = "white";
        }

        if (cpassword == 0 )
        {
            document.getElementsByName("cpassword")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("cpassword")[0].style.borderColor = "white";
        }

        if (provider == 0 )
        {
            document.getElementsByName("provider")[0].style.borderColor = "red";
        }
        else{
            document.getElementsByName("provider")[0].style.borderColor = "white";
        }


        if(!firstname || !lastname || !mobile || !email || !password || !cpassword || !username || !provider){ 
            $("#msgDiv").show().html("All fields are required.");
        } else if(cpassword != password){
            $("#msgDiv").show().html("Passowrds should match.");
            document.getElementsByName("password")[0].style.borderColor = "red";
            document.getElementsByName("cpassword")[0].style.borderColor = "red";
        } else if (!terms){
            $("#msgDiv").show().html("Please agree to terms and conditions.");
            document.getElementsByName("terms")[0].style.outline = "1px solid red"
        }
        else{ 
            $.ajax({
                url: "http://localhost:4001/register",
                method: "POST",
                data: { firstname: firstname, lastname: lastname, mobile: mobile, email: email, password: password, cpassword: cpassword, username: username, provider: provider,terms: terms }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        var errors = '<ul>';
                        $.each( data.message, function( key, value ) {
                            errors = errors +'<li>'+value.msg+'</li>';
                        });

                        errors = errors+ '</ul>';
                        $("#msgDiv").html(errors).show();
                    }else{
                        // To do Add code to redirect
                        $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show(); 
                    }
                }
            });
        }
    });
});