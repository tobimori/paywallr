const d = document;

const observer = new MutationObserver(function (mutations, me) {
    if (d.getElementsByClassName('article__header__headline ispayedcontent')) {
        removeElements(
          d.getElementsByTagName("script"), 
          d.getElementsByClassName("paging__wrapper"), 
          d.getElementsByClassName("pager pager__bottom")
        );
    }
});

observer.observe(document, {
  childList: true,
  subtree: true
});