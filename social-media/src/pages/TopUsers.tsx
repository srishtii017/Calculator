import React from 'react';
import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Avatar,
  Box,
} from '@mui/material';
import { getUsers, getPosts, getComments, User } from '../services/api';
import { getUserImage } from '../utils/imageUtils';

interface UserWithComments extends User {
  totalComments: number;
}

export const TopUsers: React.FC = () => {
  const [users, setUsers] = useState<UserWithComments[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const allUsers = await getUsers();
        const usersWithComments = await Promise.all(
          allUsers.map(async (user) => {
            const userPosts = await getPosts(user.id);
            const commentsPromises = userPosts.map((post) => getComments(post.id));
            const comments = await Promise.all(commentsPromises);
            const totalComments = comments.reduce(
              (sum, postComments) => sum + postComments.length,
              0
            );
            return { ...user, totalComments };
          })
        );

        // Sort users by total comments and get top 5
        const topUsers = usersWithComments
          .sort((a, b) => b.totalComments - a.totalComments)
          .slice(0, 5);

        setUsers(topUsers);
      } catch (error) {
        console.error('Error fetching top users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopUsers();
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
        Top Users by Comments
      </Typography>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card>
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Avatar
                    src={getUserImage(user.id)}
                    alt={user.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      border: '4px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                  <Typography variant="h6" gutterBottom align="center">
                    {user.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    {user.totalComments} Comments
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

export default TopUsers; 