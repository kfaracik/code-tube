export type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
    publishTime?: string;
  };
};

const generateRandomId = () => Math.random().toString(36).substring(2, 10);

export const mockVideos: Video[] = [
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-10-01T12:00:00Z",
      title: "Learn React Native in 10 Minutes",
      description:
        "A quick introduction to React Native and building mobile apps.",
      thumbnails: {
        default: {
          url: "https://picsum.photos/200",
          width: 150,
          height: 84,
        },
      },
      publishTime: "2023-10-01T12:00:00Z",
    },
  },
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-09-15T09:30:00Z",
      title: "JavaScript Basics: Understanding Variables",
      description: "An overview of JavaScript variables and their types.",
      thumbnails: {
        default: {
          url: "https://picsum.photos/200",
          width: 150,
          height: 84,
        },
      },
      publishTime: "2023-09-15T09:30:00Z",
    },
  },
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-11-01T15:45:00Z",
      title: "TypeScript for Beginners",
      description: "An introductory video on TypeScript and its benefits.",
      thumbnails: {
        default: {
          url: "https://picsum.photos/200",
          width: 150,
          height: 84,
        },
      },
      publishTime: "2023-11-01T15:45:00Z",
    },
  },
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-11-01T15:45:00Z",
      title: "TypeScript for Beginners",
      description: "An introductory video on TypeScript and its benefits.",
      thumbnails: {
        default: {
          url: "https://picsum.photos/200",
          width: 150,
          height: 84,
        },
      },
      publishTime: "2023-11-01T15:45:00Z",
    },
  },
  {
    id: { videoId: generateRandomId() },
    snippet: {
      publishedAt: "2023-11-01T15:45:00Z",
      title: "TypeScript for Beginners",
      description: "An introductory video on TypeScript and its benefits.",
      thumbnails: {
        default: {
          url: "https://picsum.photos/200",
          width: 150,
          height: 84,
        },
      },
      publishTime: "2023-11-01T15:45:00Z",
    },
  },
];
