import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";
import { appKeys } from "../../../constants/appKeys";
import { City } from "../../../model/City/City";
import { CityPoint, CityPointFromJson } from "../../../model/CityPoint/CityPoint";
import { CityEvent } from "../../../model/CityEvent/CityEvent";



export const getCities = async (): Promise<City[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, appKeys.cities));
    const list = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as City[];
    return list;
  } catch (error) {
    console.error('Erro ao buscar cidades:', error);
    throw error;
  }
};

export const getEvents = async (): Promise<CityEvent[]> => {
  try {
    const q = query(collection(db, appKeys.events), orderBy('date'), limit(2));
    const querySnapshot = await getDocs(q);
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

export const getPoints = async (): Promise<CityPoint[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, appKeys.points));
    const list = querySnapshot.docs.map(doc =>
      CityPointFromJson(JSON.stringify({
        id: doc.id,
        ...doc.data(),
      }))
    );
    return list;
  } catch (error) {
    console.error('Erro ao buscar pontos turístricos', error);
    throw error;
  }
};