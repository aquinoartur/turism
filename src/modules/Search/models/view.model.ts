

import { useState, useEffect } from 'react';
import { getEvents } from '../repository/SearchRepository';
import { CityEvent } from '../../../model/CityEvent/CityEvent';

export function searchEventsViewModel() {
 const [events, setEvents] = useState<CityEvent[]>([]);
 const [eventsIsLoading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState(null);

 const fetchEvents = async (): Promise<void> => {
  try {
   setLoading(true);
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

 return {
  events,
  eventsIsLoading,
  error,
  fetchEvents,
 }
}
export function searchPointsViewModel() {

}
