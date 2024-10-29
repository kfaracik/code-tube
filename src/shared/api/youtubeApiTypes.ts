export type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    publishTime?: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  channelName: string;
  popularity: number;
};

const generateRandomId = () => Math.random().toString(36).substring(2, 10);

export const mockVideos: Video[] = [
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-10-01T12:00:00Z",
      publishTime: "2023-10-01T12:00:00Z",
      title: "Learn React Native in 10 Minutes",
      description:
        "A quick introduction to React Native and building mobile apps.",
      thumbnails: {
        default: { url: "https://picsum.photos/200", width: 150, height: 84 },
      },
    },
    channelName: "React Academy",
    popularity: 1500,
  },
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-10-01T12:00:00Z",
      publishTime: "2023-10-01T12:00:00Z",
      title: "JavaScript Basics: Understanding Variables",
      description: "An overview of JavaScript variables and their types.",
      thumbnails: {
        default: { url: "https://picsum.photos/200", width: 150, height: 84 },
      },
    },
    channelName: "JS World",
    popularity: 2000,
  },
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-10-01T12:00:00Z",
      publishTime: "2023-10-01T12:00:00Z",
      title: "JavaScript Basics: Understanding Variables",
      description: "An overview of JavaScript variables and their types.",
      thumbnails: {
        default: { url: "https://picsum.photos/200", width: 150, height: 84 },
      },
    },
    channelName: "JS World",
    popularity: 2000,
  },
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2022-10-01T12:00:00Z",
      publishTime: "2022-10-01T12:00:00Z",
      title: "JavaScript Basics: Understanding Variables",
      description: "An overview of JavaScript variables and their types.",
      thumbnails: {
        default: { url: "https://picsum.photos/200", width: 150, height: 84 },
      },
    },
    channelName: "JS World",
    popularity: 2000,
  },
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-1-01T12:00:00Z",
      publishTime: "2023-1-01T12:00:00Z",
      title: "JavaScript Basics: Understanding Variables",
      description: "An overview of JavaScript variables and their types.",
      thumbnails: {
        default: { url: "https://picsum.photos/200", width: 150, height: 84 },
      },
    },
    channelName: "JS World",
    popularity: 2000,
  },
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-11-01T12:00:00Z",
      publishTime: "2023-11-01T12:00:00Z",
      title: "JavaScript Basics: Understanding Variables",
      description: "An overview of JavaScript variables and their types.",
      thumbnails: {
        default: { url: "https://picsum.photos/200", width: 150, height: 84 },
      },
    },
    channelName: "JS World",
    popularity: 2000,
  },
];
