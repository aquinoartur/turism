import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";
import { appKeys } from "../../../constants/appKeys";
import { CityEvent } from "../../../model/CityEvent/CityEvent";



export const getCities = async () => {
 try {
  const querySnapshot = await getDocs(collection(db, appKeys.cities));
  const data = [];
  querySnapshot.forEach((doc) => {
   data.push({ ...doc.data(), id: doc.id });
  });
  return data;
 } catch (error) {
  console.error('Erro ao buscar cidades:', error);
  throw error;
 }
};

export const getEvents = async (): Promise<CityEvent[]> => {
 try {
  const querySnapshot = await getDocs(collection(db, appKeys.events));
  const list = querySnapshot.docs.map(doc => ({
   id: doc.id,
   ...doc.data(),
 })) as CityEvent[];
  return list;
 } catch (error) {
  console.error('Erro ao buscar eventos:', error);
  throw error;
 }
};

export const getPoints = async () => {
 try {
  const querySnapshot = await getDocs(collection(db, appKeys.points));
  const data = [];
  querySnapshot.forEach((doc) => {
   data.push({ ...doc.data(), id: doc.id });
  });
  return data;
 } catch (error) {
  console.error('Erro ao buscar pontos:', error);
  throw error;
 }
};