

export interface CityEvent {
 id: string;
 date: string;
 name: string;
 description: string;
 likes: number;
 photos: string[];
 geo: {
  lat: number;
  lng: number;
 };
}

export const deserializeCityEvent= (json: string): CityEvent => {
 return JSON.parse(json) as CityEvent;
};