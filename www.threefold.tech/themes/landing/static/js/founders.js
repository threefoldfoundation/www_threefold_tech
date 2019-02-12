"use strict";
$(function () {
    var render = function (dataset) {
        var rjteam = $("<div></div>").addClass('rj-team');

        function sortRank(a, b) {
            return a.rank - b.rank;
        }
        var details = dataset.sort(sortRank);
        var added = [];

        if (details) {
            for (var i = 0; i < details.length; ++i) {
                if (added.length === details.length) {
                    break;
                }
                added.push(details);
                var parent = $("<div>").addClass("rj-team-member");
                var a = $("<div>").addClass('member-photo');
                var img = $("<img/>").addClass('rj-team-member-photo-rollover');
                img.prop('src', '/avatars/' + encodeURIComponent(details[i].avatar));
                if (details[i].avatar == "") {
                    var img = $("<img/>").width('93px').height('94px').prop('src', '/img/Jobs-CTA-inline.png');
                }
                a.append(img);
                parent.append(a)

                var div = $("<div>").addClass("rj-team-member-info-text").css('display', 'none');
                var row = $("<div>").addClass("row");
                var imgCol = $("<div>").addClass('col-sm-5');
                var dataCol = $("<div>").addClass('col-sm-7');
                var close = $('<div>').addClass('close-bio').text('x');

                if (details[i].core && details[i].rank > 0) {
                    div.append(row);
                    row.append(imgCol);
                    if (details[i].avatar == "") {
                        imgCol.append($("<img/>").width('93px').height('94px').prop('src', '/img/Jobs-CTA-inline.png'));
                    } else {
                        imgCol.append($("<img/>").prop("src", "/avatars/" + encodeURIComponent(details[i].avatar)));
                    }
                    row.append();
                    row.append(dataCol);
                    dataCol.append($("<div>").addClass('member-name').text(details[i].name));
                    dataCol.append($("<div>").addClass('bio-excerpt').text(details[i].description));
                    row.append(close);
                    parent.append(div);
                    rjteam.append(parent);
                }
            }
        }

        for (var i = 0; i < 8; i++) {
            if (details.length == 0) {
                var parent = $("<div>").addClass("rj-team-member");
                var a = $("<div>");
                var img = $("<img/>").width('90px').height('94px').prop('src', '/img/Jobs-CTA-inline.png');
                a.append(img);
                parent.append(a);
                amp.append(parent);
            }
        }
        return rjteam;
    };

    function toggleBio() {
        $(".rj-team-member .member-photo").click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().children(".member-photo").removeClass("selected"), $(this).toggleClass("selected"), $(this).parent().siblings().children(".rj-team-member-info-text").hide(), $(this).siblings(".rj-team-member-info-text").toggle();
            var a = $(this).siblings(".rj-team-member-info-text").offset();
            $("body").animate({
                scrollTop: a
            }), $(".close-bio").click(function () {
                $(this).parent().siblings(".member-photo").removeClass("selected"), $(this).parent(".rj-team-member-info-text").hide()
            })
        })
        return false;
    }

    function activateTeamFilter() {
        $("#teamFilterText").prop("disabled", !1), $("#teamFilterText").on("input", function () {
            var a = $("#teamFilterText").val();
            "" == a ? $(".rj-team-member").show() : ($(".rj-team-member").hide(), $(".rj-team-member:Contains('" + a + "')").show())
        })
    }

    function unselectDiv() {
        $(document).click(function (a) {
            $(a.target).closest(".rj-team-member .member-photo").length || $(".rj-team-member .member-photo").is(":visible") && ($(".rj-team-member-info-text").hide(), $(".member-photo").removeClass("selected"))
        })
    }

    $("#threefold").append(render(founders));
});