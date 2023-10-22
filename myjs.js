$(document).ready(()=>{
    $("#emailSub").click((e)=>{
        e.preventDefault();
        let mail=$("#subEmail").val();
        if(!mail){
            $("#subAlert").text("Enter a mail Address");
        } 
        else{
            $("#subAlert").text("Welcome.Our team will reach you soon");
        }
    })
})



$(document).ready(()=>{
    $("#messageBtn").click((e)=>{
        e.preventDefault();
        let email = $("#emails").val();
        let message = $("#messages").val();
        if(!email || !message){
            $("#messageAlert").text("Enter a Mail and Message to submit");
        } 
        else{
            $("#messageAlert").text("Your query is send.Our team will reach you soon");
        }
    })
})