import { Box, Grid, useTheme } from "@mui/material";
import Sidebar from "./Sidebar";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "../api/blogApi";

const BlogPage = () => {
  const theme = useTheme();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts().then(data => setPosts(data)).catch(console.error);
  }, []);

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: theme.palette.background.default }}>
      <Sidebar />
      <Grid container spacing={2} sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
        {posts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPage;
