import axios from "axios";
import { mockVideos, Video } from "./VideoTypes";

const YT_API_KEY = process.env.YT_API_KEY;

export const fetchVideosForCategory = async (
  category: string
): Promise<Video[]> => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: YT_API_KEY,
          q: category,
          part: "snippet",
          type: "video",
          maxResults: 5,
        },
      }
    );
    return response.data.items;
  } catch (error) {
    console.error(`Error fetching videos for category ${category}:`, error);
    return [];
  }
};
