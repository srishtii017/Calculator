import React from 'react';
import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CircularProgress,
  Avatar,
  Box,
  Chip,
} from '@mui/material';
import { getAllPostsWithComments, Post } from '../services/api';
import { getPostImage, getUserImage } from '../utils/imageUtils';

export const TrendingPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const allPosts = await getAllPostsWithComments();
        const trendingPosts = allPosts
          .sort((a, b) => (b.commentCount || 0) - (a.commentCount || 0))
          .filter((post, index, array) => {
            // Get all posts with the maximum number of comments
            return (
              post.commentCount === array[0].commentCount ||
              index < 5 // Include top 5 posts if they have different comment counts
            );
          });

        setPosts(trendingPosts);
      } catch (error) {
        console.error('Error fetching trending posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingPosts();

    // Refresh trending posts every minute
    const interval = setInterval(fetchTrendingPosts, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Trending Posts
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={getUserImage(post.userId)}
                    alt={`User ${post.userId}`}
                    sx={{ width: 48, height: 48, mr: 2 }}
                  />
                  <Typography variant="h6">
                    User ID: {post.userId}
                  </Typography>
                  <Box flexGrow={1} />
                  <Chip
                    label={`${post.commentCount || 0} Comments`}
                    color="primary"
                    sx={{ ml: 2 }}
                  />
                </Box>
                <CardMedia
                  component="img"
                  height="300"
                  image={getPostImage(post.id)}
                  alt={`Post ${post.id}`}
                  sx={{ borderRadius: 1, mb: 2 }}
                />
                <Typography variant="body1" gutterBottom>
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Make this the default export
export default TrendingPosts; 