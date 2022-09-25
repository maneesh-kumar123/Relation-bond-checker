function flame() {
  var imge = document.getElementById("imge");
  var flameRes = document.getElementById("flameRes");
  var frndRes = document.getElementById("frndRes");
  var f = "flames";
  var result;
  var p = document.getElementById("n");
  var n1 = document
    .getElementById("n1")
    .value.toLowerCase()
    .split(/\s/)
    .join("");
  var n2 = document
    .getElementById("n2")
    .value.toLowerCase()
    .split(/\s/)
    .join("");
  var letters = /^[A-Za-z]+$/;

  if (
    n1.match(letters) &&
    n1.length > 2 &&
    n2.match(letters) &&
    n2.length > 2
  ) {
    const yourname = n1;
    const crush_name = n2;

    for (let i = 0; i < n1.length; i++) {
      for (let j = 0; j < n2.length; j++) {
        if (n1[i] == n2[j]) {
          n1 = n1.slice(0, i) + n1.slice(i + 1, n1.length);
          n2 = n2.slice(0, j) + n2.slice(j + 1, n2.length);
        }
      }
    }

    var z = n1.concat(n2);
    var len = z.length - 1;

    var t = 6;
    for (let k = 0; k < 5; k++) {
      var a = len % t;

      f = f.slice(0, a) + f.slice(a + 1, 6);
      t = t - 1;
    }

    var s = f;

    switch (s) {
      case "f":
        result = {
          flameResult: "friend",
          comment: "dosti pyar hai!",
          images: "gif/frnd.gif",
        };
        break;
      case "l":
        result = {
          flameResult: "love",
          comment: "kya baat h tum to bare havy driver nikale!",
          images: "gif/marrage.gif",
        };
        break;
      case "a":
        result = {
          flameResult: "Affectinate",
          comment: "koi baat nahi lage raho mil jayegi!",
          images: "gif/affection.gif",
        };
        break;
      case "m":
        result = {
          flameResult: "Marriage",
          comment: " jayeda khush hone ki jarurat nahi h. ye sab kuch nahi hoga, just a game!",
          images: "gif/marrage.gif",
        };
        break;
      case "e":
        result = {
          flameResult: "Enemy",
          comment: "tu rahne de mere naam se try kar hahaha!",
          images: "gif/enemy.gif",
        };
        break;
      case "s":
        result = {
          flameResult: "Sister",
          comment: "No words thats your feeling!",
          images: "gif/sister.gif",
        };
        break;
    }
    // p.innerHTML = result.flameResult + " " + result.comment;
    flameRes.innerHTML = result.flameResult;
    frndRes.innerHTML = result.comment;
    imge.src = result.images;
    

    //used to grap onto firebase ->connection
    var firebaseConfig = {
      apiKey: "AIzaSyA3z3lc0XmVgSokNr541q26KuIwVc_t40k",
      authDomain: "flames-3f94b.firebaseapp.com",
      projectId: "flames-3f94b",
      storageBucket: "flames-3f94b.appspot.com",
      messagingSenderId: "147063258847",
      appId: "1:147063258847:web:6649a393e097f620ee736a",
    };

    // Init Firebase

    firebase.initializeApp(firebaseConfig);
    var firestore = firebase.firestore();

    //start grabbing our DOM Element

    const db = firestore.collection("flames");

    let nameInput = yourname;
    let love_nameInput = crush_name;
    let res = result.flameResult;

    //Access the database collection
    db.doc()
      .set({
        name: nameInput,
        love_name: love_nameInput,
        result: res,
      })
      .then(() => {
        console.log("data save");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("please enter your name and love name");
  }
}
