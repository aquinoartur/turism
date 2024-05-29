export interface CityPoint {
 id: string;
 createdAt: string;
 name: string;
 description: string;
 likes: number;
 photos: string[];
 geo: {
  lat: number;
  lng: number;
 };
}

export const CityPointFromJson= (json: string): CityPoint => {
 return JSON.parse(json) as CityPoint;
};