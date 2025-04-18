import React, { useState, useEffect } from 'react';
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
  Alert,
  Button,
  Divider,
} from '@mui/material';
import { getPosts, Post } from '../services/api';
import { getPostImage, getUserImage } from '../utils/imageUtils';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      console.error('❌ Error in feed:', err);
      setError('Failed to load posts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress size={40} />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading posts...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert 
          severity="error" 
          action={
            <Button color="inherit" size="small" onClick={fetchPosts}>
              Retry
            </Button>
          }
        >
          {error}
        </Alert>
      </Container>
    );
  }

  if (!posts.length) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="info">
          No posts available at the moment.
        </Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Latest Posts
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
                    User {post.userId}
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  height="300"
                  image={getPostImage(post.id)}
                  alt={`Post ${post.id}`}
                  sx={{ borderRadius: 1, mb: 2 }}
                />
                <Typography variant="body1" component="pre" sx={{ 
                  whiteSpace: 'pre-wrap',
                  fontFamily: 'inherit',
                  mb: 2 
                }}>
                  {post.content}
                </Typography>
                <Divider />
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <Typography variant="body2" color="text.secondary">
                    Comments: {post.commentCount || 0}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Feed; 