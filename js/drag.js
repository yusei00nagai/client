jQuery.prototype.mousedragscrollable = function () {
    let target; // 動かす対象
    $(this).each(function (i, e) {
        $(e).mousedown(function (event) {
            event.preventDefault();
            target = $(e); // 動かす対象
            $(e).data({
                "down": true,
                "move": false,
                "x": event.clientX,
                "y": event.clientY,
                "scrollleft": $(e).scrollLeft(),
                "scrolltop": $(e).scrollTop(),
            });
            return false
        });
        // move後のlink無効
        $(e).click(function (event) {
            if ($(e).data("move")) {
                return false
            }
        });
    });
    // list要素内/外でのevent
    $(document).mousemove(function (event) {
        if ($(target).data("down")) {
            event.preventDefault();
            let move_x = $(target).data("x") - event.clientX;
            let move_y = $(target).data("y") - event.clientY;
            if (move_x !== 0 || move_y !== 0) {
                $(target).data("move", true);
            } else { return; };
            $(target).scrollLeft($(target).data("scrollleft") + move_x);
            $(target).scrollTop($(target).data("scrolltop") + move_y);
            return false
        }
    }).mouseup(function (event) {
        $(target).data("down", false);
        return false;
    });
    }
    
    $(".section-3").mousedragscrollable();