export interface Course {
    id: string,
    name: string,
    image: string,
    rating: number,
    description: string,
    categories: string[],
    sections: Section[],
    price: number,
}

export interface Section {
    id: string,
    name: string,
    contents: Content[]
}

export interface Content {
    id: string,
    name: string,
    video_url: string
}