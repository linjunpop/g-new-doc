function newDoc(type) {
  if (type == 'document') {
    url = 'https://docs.google.com/document/d/new';
  }
  else if (type == 'spreadsheet') {
    url = 'http://spreadsheets.google.com/ccc?new';
  }
  else if (type == 'presentation') {
    url = 'https://docs.google.com/presentation/create';
  }
  else if (type == 'drawing') {
    url = 'https://docs.google.com/drawings/create';
  }
  else if (type == 'table') {
    url = 'https://www.google.com/fusiontables/DataSource?dsrcid=implicit';
  }

  loadURL(url);
}

function loadURL(url) {
  chrome.tabs.create(
    {'url': url},
    function(tab) {
      // Tab opened.
    }
  );
}
