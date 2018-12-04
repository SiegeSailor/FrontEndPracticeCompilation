$(document).ready(function() {
    // 通用樣式
    $('.list-group .p-2 .fixed').hide();
    $('#button-fixed-toggle').click(function(event) {
        $('.list-group .p-2 .fixed').toggle();
    });
    $('#alert-slide-slidedown').hide();
    $('#alert-fade-fadein').hide();
    $('#alert-delay-delayfirst').hide();
    $('#alert-delay-delaysecond').hide();
    $('#alert-delay-delaythird').hide();
    $('.btn-top').click(function(event) {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
    // 側邊選單
    $('#btn-menu').click(function(event) {
        $('body').toggleClass('menu-slide-offcanvas-active');
    });
    $('.menu-slide-offcanvas a').click(function(event) {
        // 側邊選單的出現行為
        $('body').toggleClass('menu-slide-offcanvas-active');

        // 點擊選單項目後，到該項目位置的平滑化
        // 取消原本藉a href id的直接跳躍，避免動畫不順
        event.preventDefault();
        // 先取得該目標，再取得該目標y軸位置，最後利用animate滑去
        var target = $(this).attr('href');
        var targetposition = $(target).offset().top;
        $('html,body').animate({ scrollTop: targetposition }, 500);
    });
    // 側邊選單：滑動效果
    $(window).scroll(function(event) {
        // 定義現在視窗的滑動位置
        var scrollposition = $(window).scrollTop();

        // 取得目標、目標y軸位置、目標高度後，利用if限定一範圍內加上active選擇器
        $('.menu-slide-offcanvas a').each(function() {
            var target = $(this).attr('href');
            var targetposition = $(target).offset().top;
            var targetheight = $(target).outerHeight();
            // 目標y軸位置比視窗目前位置小或一樣，代表視窗目前位置在目標下方
            // 目標y軸位置加上高度比視窗目前位置大，代表視窗目前位置仍未超越目標
            if (targetposition <= scrollposition && (targetposition + targetheight) > scrollposition) {
                // 在範圍內時，對該目標的選單項目增加active，並移除其他所有項目的active
                // 因想同時顯示父層項目，故取消此項
                // $('.menu-slide-offcanvas a').removeClass('menu-slide-offcanvas-scrollactive');
                $(this).addClass('menu-slide-offcanvas-scrollactive');
            } else {
                // 不在任一目標範圍內時，移除留著的active
                $(this).removeClass('menu-slide-offcanvas-scrollactive');
            }
        });
    });
    // 進度條
    // 進度條的顯示與否設定
    var showskillsection = true;
    $(window).scroll(function(event) {
        // 定義現在視窗的滑動位置
        var scrollposition = $(window).scrollTop();
        // 取得現在視窗的高度
        var windowheight = $(window).height();
        // 取得目標y軸高度
        var skillsectiontop = $('#skillsection').offset().top;

        // 目標y軸比視窗目前位置小或一樣，代表視窗目前位置在目標下方
        // 因為預期是滾到就會有效果，因此把一半的視窗高度加在視窗目前位置，
        // 以提早半個視窗
        if (skillsectiontop <= (scrollposition + windowheight / 2) && showskillsection) {
            // 對每個進度條的data數值定義
            $('#skillsection .progress-bar').each(function() {
                var thisvalue = $(this).data('progress');
                // 進度條數值動作
                $(this).css('width', thisvalue + '%');
                // 進度條的顯示與否設定，開關，避免重複設定寬度
                showskillsection = false;
            });
        }
    });
    // 滾動套用CSS效果
    var showscrollcsssection = true;
    $(window).scroll(function(event) {
        var scrollposition = $(window).scrollTop();
        var windowheight = $(window).height();

        $('.fade-origin').each(function() {
            var targetposition = $(this).offset().top;
            if (targetposition <= (scrollposition + windowheight ) && showscrollcsssection) {
                $(this).addClass('fadein');
                console.log('yes');
                showscrollcsssection = false;
            }
        });
    });
    // 滾動中持續改變物件位置
    $(window).scroll(function(event) {
        var scrollposition = $(window).scrollTop();
        $('#background-css-associated').css('background-position-x',scrollposition + 'px');
        $('#background-2-css-associated').css('transform','translateY(' + (scrollposition-18500)/2 + 'px)');
    });
    // 實作樣式
    $('#button-essential-hide').click(function(event) {
        $('#button-essential-hide').hide();
    });
    $('#button-toggle-toggle').click(function(event) {
        $('#alert-toggle-toggle').toggle();
    });
    $('#button-toggle-slidetoggle').click(function(event) {
        $('#alert-toggle-slidetoggle').slideToggle();
    });
    $('#button-slide-slideup').click(function(event) {
        $('#alert-slide-slideup').slideUp();
    });
    $('#button-slide-slidedown').click(function(event) {
        $('#alert-slide-slidedown').slideDown();
    });
    $('#button-fade-fadeout').click(function(event) {
        $('#alert-fade-fadeout').fadeOut();
    });
    $('#button-fade-fadein').click(function(event) {
        $('#alert-fade-fadein').fadeIn();
    });
    $('#button-toggle-fadetoggle').click(function(event) {
        $('#alert-toggle-fadetoggle').fadeToggle();
    });
    $('#button-toggle-toggleclass').click(function(event) {
        $('#alert-toggle-toggleclass').toggleClass('toggleclass-display-none');;
    });
    $('#button-class-addclass').click(function(event) {
        $('#alert-class-addclass').addClass('opacity-1');
    });
    $('#button-class-removeclass').click(function(event) {
        $('#alert-class-removeclass').removeClass('opacity-1');
    });
    $('#button-theory-chain').click(function(event) {
        $('#alert-theory-chain').slideUp(1000).slideDown(1000).fadeOut(1000).fadeIn(1000).hide(1000);
    });
    $('#hyperlink-preventdefault-preventdefault').click(function(event) {
        event.preventDefault();
        $('#alert-preventdefault-preventdefault').slideUp();
    });
    $('#button-css-css').click(function(event) {
        $('#alert-css-css').css('background', '#ffe4ca').css('height', '60px');
    });
    $('#li-associatedcases-dropdownlist').click(function(event) {
        event.preventDefault();
        $('#ul-associatedcases-dropdownlist').slideToggle(500);
        $('#li-associatedcases-dropdownlist').toggleClass('dropdownlist-active');
    });
    $('#button-delay-delay').click(function(event) {
        $('#alert-delay-delayfirst').delay(0).slideDown(500);
        $('#alert-delay-delaysecond').delay(500).slideDown(500).slideUp(500).slideDown(500);
        $('#alert-delay-delaythird').delay(2000).slideDown(500).slideUp(500).slideDown(500).slideUp(500).slideDown(500);
    });
    $('#button-css-fontsize-large').click(function(event) {
        $('#text-css-fontsize').css('font-size', 'large');
        $('#text-css-fontsize h2').css('font-size', '36px').css('margin-bottom', '8px');
    });
    $('#button-css-fontsize-medium').click(function(event) {
        $('#text-css-fontsize').css('font-size', 'medium');
        $('#text-css-fontsize h2').css('font-size', '30px').css('margin-bottom', '8px');
    });
    $('#button-css-fontsize-small').click(function(event) {
        $('#text-css-fontsize').css('font-size', 'small');
        $('#text-css-fontsize h2').css('font-size', '26px').css('margin-bottom', '8px');
    });
    $('#button-stop-stop').click(function(event) {
        $('#alert-stop-stop').stop().slideToggle(2000);
    });
    $('#button-associatedcases-offcanvas').click(function(event) {
        $('body').toggleClass('offcanvas-active');
    });
    $('#button-associatedcases-animatecss').click(function(event) {
        $('#alert-associatedcases-animatecss').addClass('rotateOut animated');
    });
    $('.list-group-item .this ul li a').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('this-active');
    });
    $('.list-group-item .parent ul li a').click(function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('parent-active');
    });
    $('.list-group-item .siblings ul li').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('siblings-active').siblings().removeClass('siblings-active');
    });
    $('.list-group-item .find ul li').click(function(event) {
        event.preventDefault();
        $(this).find('a').toggleClass('find-active');
    });
    $('.list-group-item .qanda ul li a').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('qanda-active');
        $(this).parent().find('p').slideToggle();
        $(this).parent().siblings().find('a').removeClass('qanda-active');
        $(this).parent().siblings().find('p').slideUp();
    });
    $('.list-group-item .doublelayers ul > li > a').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('doublelayers-active');
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('a').removeClass('doublelayers-active');
        $(this).parent().siblings().find('ul').slideUp();
    });
    $('#button-essential-html').click(function(event) {
        $('#alert-essential-html').html('<h2>H2</h2>');
    });
    $('#button-essential-text').click(function(event) {
        $('#alert-essential-text p').text('Text');
    });
    $('#button-essential-onandalert').on('click', 'p', function(event) {
        alert('成功對順序在後的程式碼監聽。');
    });
    $('#button-essential-onandalert').html('<p class="p-0 m-0">以jQuery產生的Html。</p>');
    $()
    $('#button-attr-attr').click(function(event) {
        $('#alert-attr-attr').attr('title', '提示文字');
    });
    $('.table-remove-remove td input').click(function(event) {
        $(this).parent().parent().remove();
    });
    $('#button-animate-scrolltop').click(function(event) {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });
    $("a[href$='.doc']").addClass('fas fa-file-word');
    $("a[href$='.jpg']").addClass('fas fa-file-image');
    $("a[href$='.zip']").addClass('fas fa-file-archive');
    $('.rwd-showmenu-showmenu').on('click', function(event) {
        event.preventDefault();
        $('body').toggleClass('rwd-showmenu-top-active');
    });
    $('#button-rwd-showmenu').click(function(event) {
        $('#showmenu-rwd-showmenu').slideToggle();
    });
    $('.rwd-asidemenu-showmenu').click(function(event) {
        event.preventDefault();
        $('.rwd-asidemenu-wrap').toggleClass('rwd-asidemenu-active');
    });
    // 插件樣式：LightBox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "%1 張圖片的第 %2 張",
    })
    // 插件樣式：NivoSlider
    // 為相容jQuery3以上，將$(window).load(function() {置換為：
    $(window).on('load', function() {
        $('#nivoslider-nivoslider-nivoslider').nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown' 
            slices: 15, // For slice animations 
            boxCols: 8, // For box animations 
            boxRows: 4, // For box animations 
            animSpeed: 500, // Slide transition speed 
            pauseTime: 3000, // How long each slide will show 
            startSlide: 0, // Set starting Slide (0 index) 
            directionNav: true, // Next & Prev navigation 
            controlNav: true, // 1,2,3... navigation 
            controlNavThumbs: true, // Use thumbnails for Control Nav 
            pauseOnHover: true, // Stop animation while hovering 
            manualAdvance: false, // Force manual transitions 
            prevText: 'Prev', // Prev directionNav text 
            nextText: 'Next', // Next directionNav text 
            randomStart: false, // Start on a random slide 
            beforeChange: function() {}, // Triggers before a slide transition 
            afterChange: function() {}, // Triggers after a slide transition 
            slideshowEnd: function() {}, // Triggers after all slides have been shown 
            lastSlide: function() {}, // Triggers when last slide is shown 
            afterLoad: function() {} // Triggers when slider has loaded 
        });
    });
    $(window).on('load', function() {
        $('#nivoslider-associatedcases-nivosliderandlightbox').nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown' 
            slices: 15, // For slice animations 
            boxCols: 8, // For box animations 
            boxRows: 4, // For box animations 
            animSpeed: 500, // Slide transition speed 
            pauseTime: 3000, // How long each slide will show 
            startSlide: 0, // Set starting Slide (0 index) 
            directionNav: true, // Next & Prev navigation 
            controlNav: true, // 1,2,3... navigation 
            controlNavThumbs: false, // Use thumbnails for Control Nav 
            pauseOnHover: true, // Stop animation while hovering 
            manualAdvance: false, // Force manual transitions 
            prevText: 'Prev', // Prev directionNav text 
            nextText: 'Next', // Next directionNav text 
            randomStart: false, // Start on a random slide 
            beforeChange: function() {}, // Triggers before a slide transition 
            afterChange: function() {}, // Triggers after a slide transition 
            slideshowEnd: function() {}, // Triggers after all slides have been shown 
            lastSlide: function() {}, // Triggers when last slide is shown 
            afterLoad: function() {} // Triggers when slider has loaded 
        });
    });
    // 插件樣式：Peity
    $('.pie-plugin-peity').peity('pie');
    $('.donut-plugin-peity').peity('donut');
    $('.line-plugin-peity').peity('line');
    $('.bar-plugin-peity').peity('bar');
    $('.piecircle-plugin-peity').peity('bar', {
        fill: ["red", "green", "blue"]
    })
    var updatingChart = $(".lineupdating-plugin-peity").peity("line", { width: 64 })
    setInterval(function() {
        var random = Math.round(Math.random() * 10)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 1000)
    $('select').change(function() {
        var text = $(this).val() + '/' + 5
        $(this)
            .siblings('span.selectorgraph-plugin-peity')
            .text(text)
            .change()
    }).change()
    $('span.selectorgraph-plugin-peity').peity('pie')
});