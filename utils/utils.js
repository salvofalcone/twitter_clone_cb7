export const qS = (elem) => document.querySelector(elem);
export const qSA = (elems) => document.querySelectorAll(elems);

export const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

/***************** *****************/

export const tweetGenerator = (tweetData) => {
  const wrapperEl = createEl("div", "", { name: "class", value: "tweet" });

  const userImg = createEl(
    "img",
    "",
    {
      name: "src",
      value:
        tweetData.user?.image ||
        "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    },
    { name: "alt", value: tweetData.user?.username }
  );

  const tweetContent = createEl("div", "", {
    name: "class",
    value: "tweet__content",
  });

  const userName = createEl(
    "span",
    (tweetData.user?.firstName && tweetData.user?.lastName) || "Twitter User", //non mi stampa il lastname
    {
      name: "class",
      value: "tweet__name",
    }
  );

  const userUsername = createEl(
    "span",
    "@" + (tweetData.user?.username || "not-available"),
    {
      name: "class",
      value: "tweet__user",
    }
  );

  const tweetText = createEl("p", tweetData.body, {
    name: "class",
    value: "tweet_text",
  });

  const tweetReactionsMain = createEl("div", "", {
    name: "class",
    value: "tweet__reactions__main",
  });
  const tweetIconHeart = createEl("div", "", {
    name: "class",
    value: "tweet__reactions__heart",
  });

  const tweetReactionsHeart = createEl("p", tweetData.reactions, {
    name: "class",
    value: "tweet__reactions",
  });

  tweetReactionsMain.append(tweetIconHeart, tweetReactionsHeart);
  tweetContent.append(userName, userUsername, tweetText, tweetReactionsMain);
  wrapperEl.append(userImg, tweetContent);

  return wrapperEl;
};
