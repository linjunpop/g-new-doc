$(function() {
  $(document).on( 'click', '.link', function() {
    url = $(this).data('target');
    chrome.tabs.create(
      { 'url': url },
      function(tab) {
        // Tab opened.
      }
    );
  });
});
