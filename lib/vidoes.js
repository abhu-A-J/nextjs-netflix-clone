import sampleVidoes from '../data/sample-vidoes.json';

export const getVidoes = () => {
  return sampleVidoes.items.map((video) => {
    return {
      id: video?.id?.videoId || '',
      description: video?.snippet?.description,
      title: video?.snippet?.title,
      imgUrl: video?.snippet?.thumbnails?.high?.url,
    };
  });
};
