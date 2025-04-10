export interface IMedia {
    title: string;
    author: string;
    src: string;
}
  
export interface IImage {
    src: string;
    alt: string;
}
  
export interface IProfile {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    images: IImage[];
    audios: IMedia[];
    videos: IMedia[];
    youtubeLinks: IMedia[];
}