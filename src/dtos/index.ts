export interface VolumeInfoProps {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: string;
  categories: string[];
  averageRating: string;
  ratingsCount: string;
  language: string;
  imageLinks: {
    thumbnail: string;
  };
}

export interface BookInfo {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfoProps;
}
