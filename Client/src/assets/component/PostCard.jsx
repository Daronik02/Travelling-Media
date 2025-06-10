import { Card, CardHeader, CardMedia, CardContent, IconButton, Typography, useTheme } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CommentIcon from '@mui/icons-material/Comment';

const PostCard = ({ post }) => {
  const theme = useTheme();

  return (
    <Card sx={{ bgcolor: theme.palette.background.paper }}>
      <CardHeader title={post.author} subheader={new Date(post.createdAt).toLocaleDateString()} />
      <CardMedia
        component="img"
        height="200"
        image={post.imageUrl}
        alt="Post image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">{post.caption}</Typography>
        <IconButton><FavoriteBorderIcon /></IconButton>
        <IconButton><CommentIcon /></IconButton>
        <IconButton><BookmarkBorderIcon /></IconButton>
      </CardContent>
    </Card>
  );
};

export default PostCard;
