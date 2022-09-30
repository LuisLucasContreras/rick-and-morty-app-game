export interface Personaje {
    created?:  Date;
    episode?:  string[];
    gender?:   string;
    id:       number;
    image?:    string;
    location?: Location;
    name?:     string;
    origin?:   Location;
    species?:  string;
    status?:   string;
    type?:     string;
    url?:      string;
}
export interface PersonajeId {
   
    id:       number;
    
}
   
export interface Location {
    name: string;
    url:  string;
}

export interface Origin {
    id: string;
    name: string;
}

export interface Location {
    id: string;
    name: string;
}

export interface CharactersById {
    id: string;
    name: string;
    status: string;
    origin: Origin;
    image: string;
    location: Location;
}

export interface Data {
    charactersByIds: CharactersById[];
}

export interface ResponseDataCharactersById {
    data: Data;
}
   