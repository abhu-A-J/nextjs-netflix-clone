// import sampleVidoes from '../data/sample-vidoes.json';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}`;

export async function getVidoes(searchQuery) {
  try {
    const response = await fetch(
      `${BASE_URL}&part=snippet&q=${searchQuery}&maxResults=25`
    );

    const data = await response.json();

    if (data?.error) {
      console.error('Youtube API Error');
      return [];
    }

    return data?.items?.map((video) => {
      // fallback to id if video id is not avaiable
      const id = video.id?.videoId || video.id;
      return {
        id,
        description: video?.snippet?.description || '',
        title: video?.snippet?.title || '',
        imgUrl: video?.snippet?.thumbnails?.high?.url || '',
      };
    });
  } catch (err) {
    console.error('Something wrng', err);
    return [];
  }
}
