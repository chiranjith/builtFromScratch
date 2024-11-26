import { Box, Grid } from "@chakra-ui/react";

const VideoGrid = () => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)" // 2 rows of equal height
      templateColumns="repeat(4, 1fr)" // 4 columns of equal width
      gap={4} // Spacing between grid items
      m={0} // Remove margins on the grid
      px={0} // Remove horizontal padding
    >
      {/* Column 1, Row 1 */}
      <Box bg="blue.200" p={4}>
        1,1
      </Box>

      {/* Column 2, Rows 1 & 2 (merged) */}
      <Box
        bg="green.200"
        p={4}
        gridRow="1 / 3" // Spans rows 1 through 3
        gridColumn="2 / 3" // Stays in the 2nd column
      >
        1-2, 2
      </Box>

      {/* Column 3, Row 1 */}
      <Box bg="red.200" p={4}>
        1,3
      </Box>

      {/* Column 4, Row 1 */}
      <Box bg="yellow.200" p={4}>
        1,4
      </Box>

      {/* Column 1, Row 2 */}
      <Box bg="purple.200" p={4}>
        2,1
      </Box>

      {/* Column 3, Row 2 */}
      <Box bg="orange.200" p={4}>
        2,3
      </Box>

      {/* Column 4, Row 2 */}
      <Box bg="teal.200" p={4}>
        2,4
      </Box>
    </Grid>
  );
};

export default VideoGrid;
