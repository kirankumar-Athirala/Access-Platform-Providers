
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


        if(!firstname || !lastname || !mobile || !email || !password || !cpassword || !username  || !provider ){ 
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
            console.log("i am here");
            $.ajax({
                url: "/users/register",
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
                        alert("Sucessfully Registered the user, click ok to go to login page");
                        window.location.href = "/";
                    }
                }
            });
        }
    });


    $("#update").on('click', function(event){
        event.preventDefault();
        var re_email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var re_mobile = /^\+?[0-9]+[0-9\-]+[0-9]$/
        var re_string = /^[A-Za-z]+$/
        var firstname   = $("#firstname").val();
        var lastname   = $("#lastname").val();
        var mobile     = $("#mobile").val();
        var email      = $("#email").val();
        var username    = $("#username").val();
        var provider = $("#provider").val();
        var password   = $("#password").val();
        var cpassword  = $("#cpassword").val();


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

        if(!firstname || !lastname || !mobile || !email || !password || !cpassword || !username ){ 
            $("#msgDiv").show().html("All fields are required.");
        } else if(cpassword != password){
            $("#msgDiv").show().html("Passowrds should match.");
            document.getElementsByName("password")[0].style.borderColor = "red";
            document.getElementsByName("cpassword")[0].style.borderColor = "red";
        } 
        else{ 
            $.ajax({
                url: "/users/edit",
                method: "POST",
                data: { firstname: firstname, lastname: lastname, mobile: mobile, email: email, password: password, cpassword: cpassword, provider:provider, username: username}
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
                        alert("Sucessfully Updated the user, click ok to go to dashboard");
                        window.location.href = "/dashboard";
                    }
                }
            });
        }
    });


    $("#acceptagreements").on('click', function(){


        var offerid = $("#offerid").val();
        var name = $("#name").val();
        var type = $("#type").val();
        var status = $("#status").val();
        var dailyrateindication = $("#dailyrateindication").val();
        var cycle = $("#cycle").val();
        var startTime = $("#startTime").val();
        var endTime = $("#endTime").val();
        var location = $("#location").val();
        var agreementstatus = $("#agreementstatus").val();
        console.log(agreementstatus)
        console.log(offerid,name,type,status,dailyrateindication,cycle,startTime,endTime,location,agreementstatus);
        if( !offerid || !name || !type || !status || !dailyrateindication ||!cycle || !startTime || !endTime || !location || !agreementstatus ){ 
            console.log("didnt get data")
            $("#msgDiv").show().html("All fields are required check.");  
        } 
        else{ 
            $.ajax({
                url: "/users/acceptagreement",
                method: "POST",
                data: {offerid: offerid,name: name,type: type,status:status,dailyrateindication: dailyrateindication,cycle:cycle,startTime:startTime, endTime:endTime,location: location,agreementstatus:"Accepted" }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        alert(data.message);
                    }else{
                        alert("Sucessfully Accepted the agreement, click ok to go to dashboard");
                        window.location.href = "/dashboard";
  
                    }
                }
            });
        }
    });


    $("#rejectagreements").on('click', function(){


        var offerid = $("#offerid").val();
        var name = $("#name").val();
        var type = $("#type").val();
        var status = $("#status").val();
        var dailyrateindication = $("#dailyrateindication").val();
        var cycle = $("#cycle").val();
        var startTime = $("#startTime").val();
        var endTime = $("#endTime").val();
        var location = $("#location").val();
        var agreementstatus = $("#agreementstatus").val();
        console.log(agreementstatus)
        console.log(offerid,name,type,status,dailyrateindication,cycle,startTime,endTime,location,agreementstatus);
        if( !offerid || !name || !type || !status || !dailyrateindication ||!cycle || !startTime || !endTime || !location || !agreementstatus ){ 
            console.log("didnt get data")
            $("#msgDiv").show().html("All fields are required check.");  
        } 
        else{ 
            $.ajax({
                url: "/users/acceptagreement",
                method: "POST",
                data: {offerid: offerid,name: name,type: type,status:status,dailyrateindication: dailyrateindication,cycle:cycle,startTime:startTime, endTime:endTime,location: location,agreementstatus:"Rejected" }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        alert(data.message);
                    }else{
                        alert("Sucessfully Rejected the agreement, click ok to go to dashboard");
                        window.location.href = "/dashboard";
  
                    }
                }
            });
        }
    });

    $("#bid").on('click', function(){


        var positionname = $("#positionname").val();
        var positionid = $("#positionid").val();
        var agreementid = $("#agreementid").val();
        var level = $("#level").val();
        var onsite = $("#onsite").val();
        var remote = $("#remote").val();
        var onsiteper = $("#onsiteper").val();
        var validfrom = $("#validfrom").val();
        var vailduntil = $("#vailduntil").val();
        var biddingstatus = $("#biddingstatus").val();
        if( !positionname || !agreementid || !positionid || !level || !onsite || !remote ||!onsiteper || !validfrom || !vailduntil || !biddingstatus ){ 
            console.log("didnt get data")
            $("#msgDiv").show().html("All fields are required check.");  
        } 
        else{ 
            $.ajax({
                url: "/users/bidagreement",
                method: "POST",
                data: {positionname: positionname,positionid:positionid,agreementid: agreementid,level: level,onsite:onsite,remote: remote,onsiteper:onsiteper,validfrom:validfrom, vailduntil:vailduntil,biddingstatus: "Bidded" }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        alert(data.message);
                    }else{
                        alert("Sucessfully Bidded the agreement, click ok to go to dashboard");
                        window.location.href = "/dashboard";
  
                    }
                }
            });
        }
    });

    $("#addemployee").on('click', function(event){
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
            console.log("i am in before ajax");
            $.ajax({
                url: "/users/addemployee",
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
                        alert("Sucessfully Added the Employee, click ok to go to dashboard");
                        window.location.href = "/dashboard";
                    }
                }
            });
        }
    });


    // final post start
    $("#submitoffer").on('click', function (event) {
        event.preventDefault();
        var employeeid = $("#employeeid").val();
        var positionid = $("#positionid").val();
        var agreementsid = $("#agreementsid").val();
        var employee_name = $("#employee_name").val();
        var provider_name = $("#provider_name").val();
        var contactperson = $("#contactperson").val();
        var externalperson = $("#externalperson").val();
        var rate = $("#rate").val();
        var notes = $("#notes").val();
        var dateuntil = $("#dateuntil").val();
        var document = $('#document').val();
        


        if (!employeeid || !positionid || !agreementsid || !employee_name || !provider_name || !contactperson || !externalperson||!rate || !notes || !dateuntil || !document) {
            $("#msgDiv").show().html("All fields are required check.");
        } else {
            console.log("i am in before ajax");
            $.ajax({
                url: "/users/addoffer",
                method: "POST",
                data: {
                    employeeid: employeeid,
                    positionid: positionid,
                    agreementsid: agreementsid,
                    employee_name: employee_name,
                    provider_name: provider_name,
                    contactperson: contactperson,
                    externalperson: externalperson,
                    rate: rate,
                    notes: notes,
                    dateuntil: dateuntil,
                    document: document,
                }
            }).done(function (data) {

                if (data) {
                    if (data.status == 'error') {

                        var errors = '<ul>';
                        $.each(data.message, function (key, value) {
                            errors = errors + '<li>' + value.msg + '</li>';
                        });

                        errors = errors + '</ul>';
                        $("#msgDiv").html(errors).show();
                    } else {
                        alert("Sucessfully Submitted the offer, click ok to go to dashboard");
                        window.location.href = "/dashboard";
                    }
                }
            });
        }
    });



    // final post end


    $("#addoffer").on('click', function(){

        var radioVal = $('input[type=radio][name=radioaddoffer]:checked').val();
        var emp = document.getElementById("empid" + radioVal);
        var empVal = $(emp).val();

        console.log(empVal);

        // var offerid = $("#addoffer").attr("offerid");
        // var PositionID = $("#addoffer").attr("PositionID");
        // var employee_name = $("#addoffer").attr("employee_name");
        // var provider_name = $("#addoffer").attr("provider_name");
        // var contactperson = $("#addoffer").attr("contactperson");
        // var externalperson = $("#addoffer").attr("externalperson");
        // var rate = $("#addoffer").attr("rate");
        // var notes = $("#addoffer").attr("notes");
        // var dateuntil = $("#addoffer").attr("dateuntil");
        // var document = $("#addoffer").attr("document");
        // if( !offerid || !PositionID || !employee_name || !provider_name || !contactperson ||!externalperson || !rate || !notes || !dateuntil || !document ){ 
        //     console.log("didnt get data")
        //     $("#msgDiv").show().html("All fields are required check.");  
        // } 
        // else{ 
        //     console.log("i am in before ajax");
        //     $.ajax({
        //         url: "/users/addoffer",
        //         method: "POST",
        //         data: {offerid: offerid,PositionID: PositionID,employee_name: employee_name,provider_name:provider_name,contactperson: contactperson,externalperson:externalperson,rate:rate, notes:notes,dateuntil: dateuntil,document:document }
        //     }).done(function( data ) {

        //         if ( data ) {
        //             if(data.status == 'error'){

        //                 var errors = '<ul>';
        //                 $.each( data.message, function( key, value ) {
        //                     errors = errors +'<li>'+value.msg+'</li>';
        //                 });

        //                 errors = errors+ '</ul>';
        //                 $("#msgDiv").html(errors).show();
        //             }else{
        //                 window.location.href = "/dashboard";
        //             }
        //         }
        //     });
        // }
    });
});