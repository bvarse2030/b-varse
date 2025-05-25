
import { formatResponse, IResponse } from '@/app/api/utils/utils';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
  bulkUpdatePosts,
  bulkDeletePosts,
} from './Controller';


// GET all Posts
export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get('id');
  const result: IResponse = id ? await getPostById(req) : await getPosts(req);
  return formatResponse(result.data, result.message, result.status);
}

// CREATE Post
export async function POST(req: Request) { 
  const result = await createPost(req);
  return formatResponse(result.data, result.message, result.status);
}

// UPDATE Post
export async function PUT(req: Request) { 

  const isBulk = new URL(req.url).searchParams.get('bulk') === 'true';
  const result = isBulk ? await bulkUpdatePosts(req) : await updatePost(req);

  return formatResponse(result.data, result.message, result.status);
}

// DELETE Post
export async function DELETE(req: Request) { 
  const isBulk = new URL(req.url).searchParams.get('bulk') === 'true';
  const result = isBulk ? await bulkDeletePosts(req) : await deletePost(req);

  return formatResponse(result.data, result.message, result.status);
}
