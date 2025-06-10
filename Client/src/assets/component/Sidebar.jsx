import { Box, IconButton, Stack, Tooltip, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';

const Sidebar = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: 80, bgcolor: theme.palette.background.paper, p: 2, borderRight: `1px solid ${theme.palette.divider}` }}>
      <Stack spacing={4} alignItems="center">
        <Tooltip title="Search & Create">
          <IconButton color="primary">
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <IconButton color="primary">
          <AddBoxIcon />
        </IconButton>

        <Tooltip title="My Posts">
          <IconButton color="primary">
            <ArticleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Saved">
          <IconButton color="primary">
            <BookmarkIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Settings">
          <IconButton color="primary">
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Sidebar;
