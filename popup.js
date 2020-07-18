document.addEventListener('DOMContentLoaded', function() {
    let clicked = document.getElementById('bookmarkit');
    clicked.addEventListener('click', function() {
        // Get all the open tabs Object.
        let bookmarks = [];
        let today = new Date().toJSON().slice(0,10);
        chrome.tabs.query({"currentWindow": true}, function (tabs) {
            tabs.forEach((element, index) => {
                bookmarks[index] = element;
            });
        });

        // Create bookmarks.
        chrome.bookmarks.create({'title': today},function(newFolder) {
            bookmarks.forEach(bookmark => {
                chrome.bookmarks.create({'parentId': newFolder.id, 'title': bookmark.title, 'url': bookmark.url}, function (data) {
                });
            });
        });

    },false);
}, false);