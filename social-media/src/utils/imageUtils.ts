// Function to get a random image for users
export const getUserImage = (userId: string) => {
  return `https://picsum.photos/seed/user${userId}/200`;
};

// Function to get a random image for posts
export const getPostImage = (postId: number) => {
  return `https://picsum.photos/seed/post${postId}/400/300`;
}; 