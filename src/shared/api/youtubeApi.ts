import axios from "axios";
import { mockVideos, Video } from "./youtubeApiTypes";

// const YT_API_KEY = process.env.YT_API_KEY;

export const fetchVideos = async (
  query: string,
  maxResults: number = 5
): Promise<Video[]> => {
  try {
    // TODO: uncomment to get api data
    // const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    //   params: {
    //     key: YT_API_KEY,
    //     q: query,
    //     part: "snippet",
    //     type: "video",
    //     maxResults,
    //   },
    // });
    // return response.data.items;

    return mockVideos;
  } catch (error) {
    console.error(`Error fetching videos for ${query}:`, error);
    return [];
  }
};
