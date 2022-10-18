import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Nicollas Ryan</Text>
        <Text color="gray.300" fontSize="small">
          nbarretoduart@gmail.com
        </Text>
      </Box>

      <Avatar size="md" />
    </Flex>
  );
}
