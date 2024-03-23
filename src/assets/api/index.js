import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

const getPlayListItem = async (playListId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playListId}&pageToken=${pageToken}`;
  const { data } = await axios.get(URL);
  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlayListItem(playListId, data.nextPageToken, result);
  }
  return result;
};

const getPlayList = async (playListId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playListId}&key=${key}`;
  const { data } = await axios.get(URL);
  let playlistItems;

  playlistItems = await getPlayListItem(playListId);
  const {
    channelId,
    title: playlistTitle,
    description: playlistDescription,
    channelTitle,
    thumbnails,
  } = data?.items[0].snippet;

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnails: medium,
      contentDetails: item.contentDetails,
    };
  });

  return {
    playListId,
    playlistItems,
    channelId,
    channelTitle,
    playlistTitle,
    playlistDescription,
    playlistThumbnails: thumbnails.medium,
  };
};

export default getPlayList;
