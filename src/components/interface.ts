export interface IMovie {
    ageRating: number | null;
    alternativeName: string | null;
    audience?: object[] | null;
    backdrop: {
        previeUrl: string | null;
        url: string;
    };
    budget?: object | null;
    countries: ICountry[] | null;
    deletedAt?: any;
    createdAt?: any;
    description: string | null;
    distributors?: any;
    enName?: string | null;
    externalId?: any;
    facts?: object[];
    fees?: any;
    genres: object[] | null;
    id: number;
    images?: object;
    imgesInfo?: object;
    isSeries?: boolean | null;
    lists: string[];
    logo?: {
        url?: string;
    };
    movieLength?: number | null;
    name: string;
    names: any;
    networks?: any;
    persons?: IPerson[] | null;
    poster: any;
    premiere: IPremiere | null;
    productionCompanies?: [];
    rating: {
        kp?: number;
        imdb?: number;
    };
    ratingMpaa: any;
    seriesLength?: any;
    shortDescription: string | null;
    slogan?: string | null;
    status: any;
    ticketsOnSale: any;
    top10: any;
    top250: any;
    totalSeriesLength?: any;
    type: string;
    typeNumber: number | null;
    updatedAt: any;
    votes: any;
    watchability: any;
    year: number | null;
}

interface IPerson {
    description: string;
    enName: string | null;
    enProfession: string;
    id: number;
    name: string;
    photo: string | null;
    profession: string;
}

interface ICountry {
    name: string;
}

interface IPremiere {
    bluray: string;
    cinema: string;
    digital: string;
    dvd: string;
    russia: string;
    world: string;
}

export interface IPopularMovies {
    docs: IMovie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}
