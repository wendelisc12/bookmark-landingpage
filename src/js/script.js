$("document").ready(()=>{
    $(".menu_hamburguer").click(()=>{
        $("header").css("display", "none")
        $("header").addClass("header--responsive")
        $("header").slideDown()
    })

    $(".menu_close").click(()=>{
        $("header").slideUp(()=>{
            $("header").removeClass("header--responsive")
            $("header").css("display", "block")
        })

    })
})