import { Box, Heading, Text, Image } from "@chakra-ui/react";
interface ChildVideo {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
}

interface VideoData {
  id: number;
  title: string;
  description: string;
  image: string;
  children: ChildVideo[];
}

interface VideoCardProps {
  videoData: VideoData;
}

const VideoCard = ({ videoData }: VideoCardProps) => {
  console.log("Test");
  if (!videoData) {
    return <Text>No data available.</Text>;
  }

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        {videoData.title}
      </Heading>
      <Image src={videoData.image} alt={videoData.title} mb={4} />
      <Text mb={4}>{videoData.description}</Text>
      <Box>
        <Heading as="h3" size="lg" mb={2}>
          Child Videos
        </Heading>
        {videoData.children.map((child) => (
          <Box key={child.id} mb={4}>
            <Heading as="h4" size="md">
              {child.title}
            </Heading>
            <Text>{child.description}</Text>
            <Text>Duration: {child.duration}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VideoCard;
