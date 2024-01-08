export interface Video {
  show_id: string;
  type: string;
  cast?: string[];
  title: string;
  director: string;
  country: string;
  date_added: Date;
  release_year: number;
  rating: string;
  duration: string;
  listed_in: string;
  description: string;
}