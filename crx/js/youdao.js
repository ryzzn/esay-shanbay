/**
 * @author Ryzn
 */
var originAnchor = undefined

function getYoudao() {
    originAnchor = undefined
    var term = getCurrentTerm()
    getOnlineYoudao(term, function (roots) {
        if (getCurrentTerm() == term) {
            addButtons();
            if (undefined != roots && roots.trim() != "" && $('#dictionary.youdao .exist').length==0)
                $('#dictionary.youdao .roots-wrapper .alert').addClass("well exist").removeClass("alert").html(roots.trim())
        }
    });
}
