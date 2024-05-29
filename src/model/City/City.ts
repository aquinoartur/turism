export interface City {
 id: string;
 name: string;
 description: string;
 photos: string[];
 geo: {
  lat: number;
  lng: number;
 };
}

export const deserializeCityEvent = (json: string): City => {
 return JSON.parse(json) as City;
};