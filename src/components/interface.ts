export interface IMovie {
    ageRating: number | null;
    alternativeName: string | null;
    audience?: object[] | null;
    backdrop: {
        previewUrl: string | null;
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
    imagesInfo?: object;
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
    premiere: IPremiere;
    productionCompanies?: IProductionCompany[];
    rating: {
        kp?: number | null;
        imdb?: number | null;
        filmCritics?: any;
        russianFilmCritics?: any;
        await: any;
    };
    ratingMpaa: any;
    seasonsInfo?: any;
    sequelsAndPrequels?: any;
    seriesLength?: any;
    shortDescription: string | null;
    similarMovies?: any;
    slogan?: string | null;
    spokenLanguages?: any;
    status: any;
    technology?: any;
    ticketsOnSale: any;
    top10: any;
    top250: any;
    totalSeriesLength?: any;
    type: string | null;
    typeNumber: number | null;
    updatedAt: any;
    videos?: any;
    votes: any;
    watchability: any;
    year: number | null;
}
interface IProductionCompany {
    name: string;
    previewUrl: string | null;
    url: string | null;
}

export interface IPerson {
    description: string | null;
    enName: string | null;
    enProfession: string | null;
    id: number;
    name: string;
    photo: string;
    profession: string;
}

interface ICountry {
    name: string;
}

interface IPremiere {
    bluray: string | null;
    cinema: string | null;
    digital: string | null;
    dvd: string | null;
    russia: string | null;
    world: string | null;
}

export interface IPopularMovies {
    docs: IMovie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}
