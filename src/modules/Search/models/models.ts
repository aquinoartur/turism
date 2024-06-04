import React from "react";
import { City } from "../../../model/City/City";
import { CityPoint } from "../../../model/CityPoint/CityPoint";
import { CityEvent } from "../../../model/CityEvent/CityEvent";

export interface SearchEventsViewModel {
 events: CityEvent[];
 eventsIsLoading: boolean;
 eventsError: string | null;
 fetchEvents: () => Promise<void>;
} 

export interface SearchPointsViewModel {
 points: CityPoint[];
 pointsIsLoading: boolean;
 pointsError: string | null;
 fetchPoints: () => Promise<void>;
} 