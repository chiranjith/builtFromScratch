import { Box, Text, Flex, List, ListItem } from "@chakra-ui/react";

interface ItemList {
  itemId: number;
  image: string;
  item: string;
  size?: string;
  qty: string;
  store: string;
  sku: string;
}

interface VideoData {
  videoUrl: string;
  title: string;
  description: string;
  itemList?: ItemList[];
}

interface YouTubeCard {
  videoData: VideoData;
}

const YouTubeCardVIP = ({ videoData }: YouTubeCard) => {
  if (!videoData) {
    return <Text>No video data available.</Text>;
  }
  //console.log("YT: " + videoData.itemList);
  // Convert the YouTube URL to an embeddable format
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1]; // Extract video ID
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1]; // Extract video ID
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      //return `https://www.youtube.com/embed/${videoData.videoUrl}`;
      return `https://www.youtube-nocookie.com/embed/${videoData.videoUrl}`;
    }
    //return url; // Return as is if already in embed format
  };

  const embedUrl = getEmbedUrl(videoData.videoUrl);
  return (
    <>
      <Box
        width="90%"
        mx="auto" // Center the box horizontally
        boxShadow="lg"
        borderRadius="md"
        overflow="hidden"
        bg="white"
        p={4}
        maxWidth="160em" // Match your 2xl breakpoint
      >
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          {/* Left Section: YouTube Video */}
          <Box flex="1">
            <Box
              as="iframe"
              src={embedUrl}
              width="100%"
              h={{
                base: "170px",
                md: "170px",
                lg: "220px",
                xl: "280px",
                "2xl": "580px",
              }}
              border="none"
              allowFullScreen
              title={videoData.title}
            />
          </Box>
          {/* Right Section: Text Content */}
          <Box flex="1.5">
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              {videoData.title}
            </Text>
            <Text fontSize="md" color="gray.600">
              {videoData.description}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default YouTubeCardVIP;
