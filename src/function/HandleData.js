import * as firebase from "firebase";

export const HandleDeleteItem = (id, url) => {
  const connectData = firebase.database().ref(url);
  connectData.child(id).remove();
};

export const HandlePush = (url, object) => {
  const connectData = firebase.database().ref(url);
  connectData.push(object);
};

export const HandleConnectFirebase = (url, object, setState) => {
  const connectData = firebase.database().ref(url);
  connectData.on("value", (data) => {
    const arr = [];
    data.forEach((e) => {
      arr.push(object(e));
    });
    setState(arr);
  });
  return setState;
};

export const HandleSet = (url, object, id) => {
  const connectDataSkill = firebase.database().ref(url);
  connectDataSkill.child(id).set(object);
};
