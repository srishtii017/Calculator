import axios from 'axios';

// Using JSONPlaceholder API for demonstration
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface User {
  id: string;
  name: string;
}

export interface Post {
  id: number;
  userId: string;
  content: string;
  commentCount?: number;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

export const getUsers = async (): Promise<User[]> => {
  try {
    console.log('📞 Fetching users...');
    const response = await api.get('/users');
    return response.data.map((user: any) => ({
      id: user.id.toString(),
      name: user.name
    }));
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    return [];
  }
};

export const getPosts = async (userId?: string): Promise<Post[]> => {
  try {
    console.log('📞 Fetching posts...', userId ? `for user ${userId}` : 'for all users');
    const url = userId ? `/posts?userId=${userId}` : '/posts';
    const response = await api.get(url);
    return response.data.slice(0, 10).map((post: any) => ({
      id: post.id,
      userId: post.userId.toString(),
      content: `${post.title}\n\n${post.body}`
    }));
  } catch (error) {
    console.error('❌ Error fetching posts:', error);
    return [];
  }
};

export const getComments = async (postId: number): Promise<Comment[]> => {
  try {
    console.log('📞 Fetching comments for post:', postId);
    const response = await api.get(`/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching comments:', error);
    return [];
  }
};

export const getAllPostsWithComments = async (): Promise<Post[]> => {
  try {
    console.log('📞 Fetching all posts with comments...');
    const posts = await getPosts();
    
    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        try {
          const comments = await getComments(post.id);
          return {
            ...post,
            commentCount: comments.length
          };
        } catch (error) {
          console.error(`❌ Error fetching comments for post ${post.id}:`, error);
          return {
            ...post,
            commentCount: 0
          };
        }
      })
    );

    return postsWithComments;
  } catch (error) {
    console.error('❌ Error in getAllPostsWithComments:', error);
    return [];
  }
}; 