import { Video } from "./Video";

export interface VideoRes {
  result: Video[];
  meta_data: {
    page: number;
    size: number;
    total_records: number;
    total_pages: number;
  }
}