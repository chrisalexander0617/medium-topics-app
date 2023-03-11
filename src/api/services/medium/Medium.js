import TopFeeds from './data/TopFeeds.json'
import LatestPosts from './data/LatestPosts.json'

const getTopFeeds = () => {
  return TopFeeds
}

const getLatestPosts = () => {
  return LatestPosts
}

export const MediumAPI = {
  getTopFeeds,
  getLatestPosts
}