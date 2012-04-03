(function() {

  $(function() {
    return $(document).on('click', '.link', function() {
      var url;
      url = $(this).data('target');
      return chrome.tabs.create({
        'url': url
      }, function(tab) {});
    });
  });

}).call(this);
