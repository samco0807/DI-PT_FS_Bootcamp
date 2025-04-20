// app/src/types.ts
export interface Book {
  id: string;
  infoLink?: string;
  title: string;
  authors: string[];
  publishedYear: string;
  thumbnail?: string;
}

export interface GoogleBookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
      smallThumbnail?: string;
    };
    infoLink?: string;
  };
}
