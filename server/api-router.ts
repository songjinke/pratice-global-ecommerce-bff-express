import { Router } from "express";
import { getAllPosts, getPostAndMorePosts } from "../lib/api";

export const createApiRouter = () => {
  const apiRouter = Router();

  apiRouter.get("/posts/:slug", async (req: { params: { slug: string }; query: { isDraftMode: string; skipCache: string } }, res) => {
    const { slug } = req.params;
    const { isDraftMode, skipCache } = req.query;
    const postAndMorePosts = await getPostAndMorePosts(slug, Boolean(isDraftMode), Boolean(skipCache));
    res.json(postAndMorePosts);
  });

  apiRouter.get("/posts", async (req: { query: { isDraftMode: string } }, res) => {
    const { isDraftMode } = req.query;
    const allPosts = await getAllPosts(Boolean(isDraftMode));
    res.json(allPosts);
  });

  return apiRouter;
};
