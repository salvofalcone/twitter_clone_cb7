import { GET } from "../utils/http.js";
import { qS, qSA, createEl, tweetGenerator } from "../utils/utils.js";

//==========================================================================
const navItems = qSA(".navItem");
const contentEl = qS(".feed");

// contenitori da riempire con le GET
let userData = [];
let postData = [];

//==========================================================================

//ASYNC
/* uso Promise.all per avere entrambe le promise risolte insieme */
const remoteData = Promise.all([GET("/posts"), GET("/users")]);

remoteData
  // immagazzino i dati che mi arrivano sia in userData che in postData
  .then((data) => {
    postData = data[0].posts; //risultato della prima promise
    userData = data[1].users; //risultato della seconda promise
  })
  // integro i dati mancanti
  .then(() =>
    postData
      .map((post) => {
        post.user = userData.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => contentEl.append(tweetGenerator(post)))
  );

//==========================================================================

//EVENTS
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});

// ``
