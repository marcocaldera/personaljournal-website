import { Post } from "contentlayer/generated"

export type BlogPost = Post & {
  _id: string
  _raw: {
    flattenedPath: string
  }
  body: {
    code: string
  }
  type: "Post"
  url: string
} 