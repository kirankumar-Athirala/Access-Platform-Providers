
$(function(){

    $("#register").on('click', function(event){
        event.preventDefault();
        var fullname   = $("#fullname").val();
        var email      = $("#email").val();
        var password   = $("#password").val();
        var cpassword  = $("#cpassword").val();
        var dob        = $("#dob").val();
        var country    = $("#country").val();
        var gender     = $('input[name="gender"]:checked').val(); 
        var terms      = $('input[name="terms"]:checked').val();

        if(!fullname || !email || !password || !cpassword || !dob || !country || !gender){ 
            $("#msgDiv").show().html("All fields are required.");
        } else if(cpassword != password){
            $("#msgDiv").show().html("Passowrds should match.");
        } else if (!terms){
            $("#msgDiv").show().html("Please agree to terms and conditions.");
        }
        else{ 
            $.ajax({
                url: "http://localhost:4001/register",
                method: "POST",
                data: { full_name: fullname, email: email, password: password, cpassword: cpassword, dob: dob, country: country, gender: gender,terms: terms }
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
                        $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show(); 
                    }
                }
            });
        }
    });

    $("#addemployee").on('click', function(event){
        debugger;
        event.preventDefault();
        var employeename   = $("#employeename").val();
        var providername   = $("#providername").val();
        var contactperson  = $("#CPerson").val();
        var externalperson   = $("#Eperson").val();
        var rate  = $("#rate").val();
        var dateuntil = $("#dateuntil").val();
        var notes    = $("#notes").val();
        var document     = $('#document').val(); 
       

        if(!employeename|| !providername || !contactperson || !externalperson || !rate || !dateuntil || !notes){ 
            $("#msgDiv").show().html("All fields are required check.");
        } 
        else{ 
            $.ajax({
                url: "http://localhost:4001/addemployee",
                method: "POST",
                data: {employee_name: employeename,provider_name: providername, contactperson: contactperson, externalperson: externalperson, rate: rate, notes: notes,dateuntil:dateuntil,document:document}
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
                        $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show(); 
                    }
                }
            });
        }
    });




});