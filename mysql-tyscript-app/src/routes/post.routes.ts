import { Router } from "express";
const router=Router();

import { getPosts,createPost } from "../controllers/post.controller";

router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:postId')
    .get(getPosts)


export default router;