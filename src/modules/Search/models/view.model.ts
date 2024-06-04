

import { useState, useEffect } from 'react';
import { getEvents, getPoints } from '../repository/SearchRepository';
import { SearchEventsViewModel, SearchPointsViewModel } from './models';
import { CityPoint } from '../../../model/CityPoint/CityPoint';
import { CityEvent } from '../../../model/CityEvent/CityEvent';

export function searchEventsViewModel(): SearchEventsViewModel {
 const [events, setEvents] = useState<CityEvent[]>([]);
 const [eventsIsLoading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState(null);

 const fetchEvents = async (): Promise<void> => {
  try {
   setEvents(await getEvents());
  } catch (error) {
   setError('Erro ao buscar posts');
  } finally {
   setLoading(false);
  }
 }

 useEffect(() => {
  fetchEvents();
 }, []);

 const model: SearchEventsViewModel = {
  events,
  eventsIsLoading,
  eventsError: error,
  fetchEvents,
 }
 return model;
}

export function searchPointsViewModel(): SearchPointsViewModel {
 const [points, setPoints] = useState<CityPoint[]>([]);
 const [pointsIsLoading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState(null);

 const fetchPoints = async (): Promise<void> => {
  try {
   setPoints(await getPoints());
  } catch (error) {
   setError('Erro ao buscar posts');
  } finally {
   setLoading(false);
  }
 }

 useEffect(() => {
  fetchPoints();
 }, []);

 const model: SearchPointsViewModel = {
  points,
  pointsIsLoading,
  pointsError: error,
  fetchPoints,
 }
 return model;
}


// src/store/useStore.js
// import create from 'zustand';

// const useStore = create((set) => ({
//   count: 0,
//   increaseCount: () => set((state) => ({ count: state.count + 1 })),
//   resetCount: () => set({ count: 0 }),
// }));

// export default useStore;