$(document).ready(function () {
    let index = 0;
    let cloneImgCatalog = $('.main-catalog-img').clone();

    let showAndHideTabs = (e) =>{
        let index = $('.main-tabs-title').index(e.target)
        let element = $('.main-content-under-box-list')[index]

        $('.main-content-under-box-list-block').removeClass('main-content-under-box-list-block')
        $('.main-tabs-title-active').removeClass('main-tabs-title-active')
        $(element).addClass('main-content-under-box-list-block')
        $(e.target).addClass('main-tabs-title-active')
    };

    $('.main-tabs-box').click(showAndHideTabs);


    let validCatalogImg = (elem) =>{
        let id = $(elem).attr('data-name');
        let newContent = $(`.main-catalog-img-hide[data-amazing="${id}"]`)
        $('.main-catalog-img-hide').fadeOut(0)
        newContent.fadeIn(300)
        if (id === 'all'){
            $('.main-catalog-img-all img').fadeIn(300)
        }
    }

    let showAndHideMoreImg = (event) => {
        let id = $(event.target).attr('data-name');
        let content = $(`.main-catalog-img[data-amazing="${id}"]`);
        
        $('.main-catalog-tabs').removeClass('main-catalog-tabs-active');
        $(event.target).addClass('main-catalog-tabs-active');
        
        $('.main-catalog-img').fadeOut(0)
        content.fadeIn(300)
        if ($('.main-catalog-img-all img').length === 36) {
            validCatalogImg(event.target)
        }else if(id === 'all'){
            $('.main-catalog-img').fadeIn(300) 
        }
    };

    $('.main-catalog-tabs').click(showAndHideMoreImg);


    let addMoreImg = () =>{
        let element = $('.main-catalog-img-hide')[index]
        index++
        if (index === 13) {
            $('.loader').fadeOut(1000)
            $('body').removeClass('stop-scrolling')
            $('.main-btn-more-img-amazing').fadeOut(500)
            index = 0
            return
        }
        $('body').addClass('stop-scrolling');
        $('.loader').fadeIn(1000);
        $(element).fadeIn(500, function () {
            addMoreImg()
        })
    };

    let addMoreImgCatalog = () => {
        let element = cloneImgCatalog[index]
        if (index === 12) {
            $('.loader').fadeOut(1000)
            $('body').removeClass('stop-scrolling')
            index = 0
            return
        }else if ($('.main-catalog-img').length === 24){
            $('main-catalog-img-hide').fadeOut(0)
            addMoreImg()
        }else{
        index++
        $('body').addClass('stop-scrolling')
        $('.loader').fadeIn(1000)
        $(element).fadeOut(0)
        $('.main-catalog-img-hide')[0].before(element)
        $(element).fadeIn(500, function () {
            addMoreImgCatalog()
        })
    }
    };

    $('.main-btn-more-img-amazing').click(addMoreImgCatalog);

    let scrollUp = () =>{
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    };

    $('.btn-sroll-up').click(scrollUp);

    let showscrollBtn = () => {
        let distanceFromTop = $(window).scrollTop()
        if (distanceFromTop > 300) {
            $('.btn-sroll-up').addClass('btn-sroll-up-active')
        } else if (distanceFromTop < 300) {
            $('.btn-sroll-up').removeClass('btn-sroll-up-active')
        }
    };

    $(window).scroll(showscrollBtn);
    
    let searchBar = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        $('.search-line').addClass('search-line-active');
        $('.search-btn:last-child').addClass('search-btn-active');
        $('.search-btn-first').addClass('search-btn-first-show');
    };

    $('.header-search').click(searchBar);

    let hideSearchBar = () =>{
        $('.search-line').removeClass('search-line-active');
        $('.search-btn:last-child').removeClass('search-btn-active');
        $('.search-btn-first').removeClass('search-btn-first-show');
    };

    $('body').click(hideSearchBar);

    $('.main-gallery-grid').masonry({
        itemSelector: '.main-gallery-grid-item',
        columnWidth: '.main-gallery-grid-item-whidth',
        gutter: 20,
    });

    $('.main-gallery-grid-item-small').masonry({
        itemSelector: '.main-gallery-grid-item-little',
        columnWidth: '.main-gallery-grid-item-little',
        gutter: 3,
    });

    $('.main-slider-track').slick({
        dots:true,
    })

})





