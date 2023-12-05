import { Course } from "@/models/Courses.model";

export function getCourses() {
    const courses: Course[] = [
        {
          id: '1',
          name: 'Introducción a la Programación',
          description: 'Aprende los conceptos básicos de la programación.',
          image: 'https://i.ytimg.com/vi/RqQ1d1qEWlE/maxresdefault.jpg',
          rating: 4,
          price: 1000,
          categories: ['Informática', 'Programación'],
          sections: [
            {
              id: '1',
              name: 'Fundamentos',
              contents: [{
                id: '1',
                name: 'Primer paso',
                video_url: 'url'
              }],
            },
            {
              id: '2',
              name: 'Estructuras de Control',
              contents: [{
                id: '1',
                name: 'Primer paso',
                video_url: 'url'
              }],
            },
          ],
        },
        {
          id: '2',
          name: 'Diseño Web',
          description: 'Explora el mundo del diseño web moderno.',
          categories: ['Diseño', 'Desarrollo Web'],
          image: 'https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2021/08/freeCodeCamp-Course-Thumbnails-1.png',
          rating: 4,
          price: 1000,
          sections: [
            {
              id: '1',
              name: 'HTML y CSS',
              contents: [{
                id: '1',
                name: 'Primer paso',
                video_url: 'url'
              }],
            },
            {
              id: '2',
              name: 'Frameworks Frontend',
              contents: [{
                id: '1',
                name: 'Primer paso',
                video_url: 'url'
              }],
            },
          ],
        },
        {
          id: '3',
          name: 'Introducción a la Programación',
          description: 'Aprende los conceptos básicos de la programación.',
          categories: ['Informática', 'Programación'],
          image: 'https://i.ytimg.com/vi/koiPxFFiqJ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAMTfOWKz33nrBjKczdNq8ix_5QFQ',
          rating: 4,
          price: 1000,
          sections: [
            {
              id: '1',
              name: 'Fundamentos',
              contents: [{
                id: '1',
                name: 'Primer paso',
                video_url: 'url'
              }],
            },
            {
              id: '2',
              name: 'Estructuras de Control',
              contents: [{
                id: '1',
                name: 'Primer paso',
                video_url: 'url'
              }],
            },
          ],
        },
      ];
    return courses
}