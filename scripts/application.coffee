$ ->
  $(document).on 'click', '.link', ->
    url = $(@).data('target')
    chrome.tabs.create
      'url': url
      (tab) ->
        # Tab opened.

