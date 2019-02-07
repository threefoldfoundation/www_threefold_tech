"use strict";
$(function () {
    var render = function (dataset) {
        var rjteam = $("<div></div>").addClass('rj-team');
        var details = dataset;
        var added = [];

        if (details) {
            while (true) {
                if (added.length === details.length) {
                    break;
                }
                var index = Math.floor(Math.random() * details.length);
                if (added.includes(index)) {
                    continue;
                }
                added.push(index);
                var random_details = details[index];
                if (random_details.core == false || random_details.core == null) {
                    if (random_details.rank >= 0) {
                        var parent = $("<div>").addClass("rj-team-member");
                        var a = $("<div>").addClass('member-photo');
                        var img = $("<img/>").addClass('rj-team-member-photo-rollover');
                        img.prop('src', '/avatars/' + encodeURIComponent(random_details.avatar));
                        if (random_details.avatar == "") {
                            var img = $("<img/>").width('93px').height('93px').prop('src', '/img/Jobs-CTA-inline.png');
                        }
                        a.append(img);
                        parent.append(a);
                        var div = $("<div>").addClass("rj-team-member-info-text").css('display', 'none');
                        var row = $("<div>").addClass("row");
                        var imgCol = $("<div>").addClass('col-sm-5');
                        var dataCol = $("<div>").addClass('col-sm-7');
                        var close = $('<div>').addClass('close-bio').text('x');
                        div.append(row);
                        row.append(imgCol);
                        if (random_details.avatar == "") {
                            imgCol.append($("<img/>").width('93px').height('93px').prop('src', '/img/Jobs-CTA-inline.png'));
                        } else {
                            imgCol.append($("<img/>").prop("src", "/avatars/" + encodeURIComponent(random_details.avatar)));
                        }
                        row.append(dataCol);
                        dataCol.append($("<div>").addClass('member-name').text(random_details.name));
                        dataCol.append($("<div>").addClass('bio-excerpt').text(random_details.description));
                        row.append(close);
                        parent.append(div);
                        rjteam.append(parent);
                    }
                }
            }
        }
        for (var i = 0; i < 8; i++) {
            if (details.length == 0) {
                var parent = $("<div>").addClass("rj-team-member");
                var a = $("<div>");
                var img = $("<img/>").width('90px').prop('src', '/img/Jobs-CTA-inline.png');
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
    $("#tech-team").append(render(team));
    toggleBio();
    unselectDiv();
    activateTeamFilter();
});