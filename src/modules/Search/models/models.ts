import React from "react";
import { City } from "../../../model/City/City";
import { CityPoint } from "../../../model/CityPoint/CityPoint";

export interface SearchCitiesViewModel {
 cities: City[];
 citiesIsLoading: boolean;
 setCities: React.Dispatch<React.SetStateAction<City[]>>;
} 

export interface SearchPointsViewModel {
 points: CityPoint[];
 pointsIsLoading: boolean;
 setPoints: React.Dispatch<React.SetStateAction<CityPoint[]>>;
} 