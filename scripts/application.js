function newDoc(type) {
  switch(type) {
  case 'document':
    url = 'https://docs.google.com/document/d/new';
    break;
  case 'presentation':
    url = 'https://docs.google.com/presentation/create';
    break;
  case 'spreadsheet':
    url = 'http://spreadsheets.google.com/ccc?new';
    break;
  case 'form':
    url = 'https://docs.google.com/spreadsheet/newform';
    break;
  case 'drawing':
    url = 'https://docs.google.com/drawings/create';
    break;
  case 'table':
    url = 'https://www.google.com/fusiontables/DataSource?dsrcid=implicit';
    break;
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
