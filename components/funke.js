const d = document;

const observer = new MutationObserver(function (mutations, me) {
    if (d.getElementsByClassName('article__header__headline ispayedcontent')) {
        [...d.getElementsByTagName("script")].map(n => 
          console.log(n) + n.remove());
        [...d.getElementsByClassName("paging__wrapper")].map(n => n.remove());
        [...d.getElementsByClassName("pager pager__bottom")].map(n => n.remove());
    }
});

observer.observe(document, {
  childList: true,
  subtree: true
});