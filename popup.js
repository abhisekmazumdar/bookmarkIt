document.addEventListener(
  "DOMContentLoaded",
  function () {
    let clicked = document.getElementById("bookmarkit");
    clicked.addEventListener(
      "click",
      function () {
        let bookmarks = [];
        let today = new Date();
        let folderName =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();

        // Get all the open tabs Object.
        chrome.tabs.query({ currentWindow: true }, function (tabs) {
          tabs.forEach((element, index) => {
            bookmarks[index] = element;
          });
        });

        // Create bookmarks and save them on the folder.
        chrome.bookmarks.create({ title: folderName }, function (newFolder) {
          bookmarks.forEach((bookmark) => {
            chrome.bookmarks.create(
              {
                parentId: newFolder.id,
                title: bookmark.title,
                url: bookmark.url,
              },
              function (data) {}
            );
          });
        });
      },
      false
    );
  },
  false
);
