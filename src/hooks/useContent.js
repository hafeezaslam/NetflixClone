import { useEffect, useState } from "react";
import { useFirebase } from "../contexts/firebaseContext";

export function useContent(target) {
  const [content, setContent] = useState([]);

  const firebase = useFirebase();

  useEffect(() => {
    async function fetchData() {
      try {
        let querySnapshot = await firebase.firestore().collection(target).get();
        const allContent = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            docId: doc.id
          };
        });
        setContent(allContent);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();

    // firebase
    //   .firestore()
    //   .collection(target)
    //   .get()
    //   .then((querySnapshot) => {
    //     const allContent = querySnapshot.docs.map((doc) => {
    //       return {
    //         ...doc.data(),
    //         docId: doc.id
    //       };
    //     });
    //     setContent(allContent);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  }, [target]);
  return { [target]: content };
}
