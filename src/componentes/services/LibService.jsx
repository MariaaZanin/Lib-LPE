import { db } from '../../firebaseConfig';
import { doc, addDoc, collection, query, onSnapshot, updateDoc, deleteDoc, where } from "firebase/firestore";

export const getLibsFirebase = async (setListaObjetos) => {
    try {
        const q = query(collection(db, 'libs'))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                titulo: doc.data().titulo,
                resumo: doc.data().resumo,
                tipo: doc.data().tipo,
                url: doc.data().url,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const getLibsUIDFirebase = async (uid, setListaObjetos) => {
    try {
        const colRef = collection(db, "libs");
        const q = query(colRef, where("uid", "==", uid))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                titulo: doc.data().titulo,
                resumo: doc.data().resumo,
                tipo: doc.data().tipo,
                url: doc.data().url,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const deleteLibFirebase = async objeto => {
    try {
        const libDocRef = doc(db, 'libs', objeto.id)
        await deleteDoc(libDocRef);
    } catch (err) {
        throw err;
    }
}

export const addLibFirebase = async objeto => {
    try {
        let ret = await addDoc(collection(db, 'libs'),
            {
                titulo: objeto.titulo,
                resumo: objeto.resumo,
                tipo: objeto.tipo,
                url: objeto.url,
                uid: objeto.uid,
                usuario: objeto.usuario,
                email: objeto.email
            }).then(function (docRef) {
                objeto = { ...objeto, id: docRef.id };
                return objeto;
            });
        return ret;
    } catch (err) {
        throw err;
    }
}

export const updateLibFirebase = async objeto => {
    try {
        const libDocRef = doc(db, 'libs', objeto.id)
        await updateDoc(libDocRef, {
            titulo: objeto.titulo,
            resumo: objeto.resumo,
            tipo: objeto.tipo,
            url: objeto.url,
            uid: objeto.uid,
            usuario: objeto.usuario,
            email: objeto.email
        })
    } catch (err) {
        throw err;
    }
}