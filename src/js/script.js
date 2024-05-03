$("document").ready(() => {
    $(".menu_hamburguer").click(() => {
        $("header").css("display", "none")
        $("header").addClass("header--responsive")
        $("header").slideDown()
    })

    $(".menu_close").click(() => {
        $("header").slideUp(() => {
            $("header").removeClass("header--responsive")
            $("header").css("display", "block")
        })
    })

    var linkTabs = $(".features_link")
    linkTabs.click(e => {
        linkTabs.toArray().forEach(
            (tab) => {
                if ($(tab).hasClass('features_link--active')) {
                    $(tab).removeClass("features_link--active")
                }
            }
        )
        $(e.target).addClass("features_link--active")

        if ($(e.target).hasClass("speedy")) {
            $(".features_selected").html($(
                `<div class="features_selected--active">
                    <div>
                        <img src="images/illustration-features-tab-2.svg" alt="">
                    </div>
                    <div class="features_selected_texts">
                        <h1 class="features_selected_title">intelligent search</h1>
                        <p class="features_selected_descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis vulputate eros. Nam pellentesque dui id egestas commodo. Nam pellentesque dui id.</p>
                        <button class="features_selected_button">More info</button>
                    </div>
                </div>`
            ).css("display", "none").fadeIn())
        }else if($(e.target).hasClass("easy")){
            $(".features_selected").html($(
                `
                <div class="features_selected--active">
                    <div>
                        <img src="images/illustration-features-tab-3.svg" alt="">
                    </div>
                    <div class="features_selected_texts">
                        <h1 class="features_selected_title">share your bookmarks    </h1>
                        <p class="features_selected_descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis vulputate eros. Nam pellentesque dui id egestas commodo. Nam pellentesque dui id.</p>
                        <button class="features_selected_button">More info</button>
                    </div>
                </div>
                `
            ).css("display", "none").fadeIn())
        }else if($(e.target).hasClass("simple")){
            $(".features_selected").html($(
                `
                <div class="features_selected--active">
                    <div>
                        <img src="images/illustration-features-tab-1.svg" alt="">
                    </div>
                    <div class="features_selected_texts">
                        <h1 class="features_selected_title">bookmark in one click</h1>
                        <p class="features_selected_descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis vulputate eros. Nam pellentesque dui id egestas commodo. Nam pellentesque dui id.</p>
                        <button class="features_selected_button">More info</button>
                    </div>
                </div>
                `
            ).css("display", "none").fadeIn())
        }
    })
})