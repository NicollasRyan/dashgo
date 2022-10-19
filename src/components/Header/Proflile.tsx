import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Nicollas Ryan</Text>
          <Text color="gray.300" fontSize="small">
            nbarretoduart@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" />
    </Flex>
  );
}
