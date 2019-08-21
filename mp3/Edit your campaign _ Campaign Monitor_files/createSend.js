var pages = function () {
    // Loads dynamic vars into this page
    function loadPage() {
        // Load title
        document.title = this.title;
        // Load H1
        $('#load-h1').html('<h1>' + this.h1 + '</h1>');
        // Add pageview to Google Analytics
        CS.GoogleAnalytics.trackPageview('/app/createSend/' + this.name + '.aspx');
    }
    return {
        // When calling addPage, the title argument should be encoded with CampMon.Util.SafeString.GetSafeJavascriptString and not AntiXss.HtmlEncode
        addPage: function(name, title, h1) {
            this[name] = {
                name: name,
                title: title,
                h1: h1,
                load: loadPage
            };
        }
    };
} ();