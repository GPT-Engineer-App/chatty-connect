import React, { useState } from "react";
import { Box, VStack, HStack, Text, Avatar, Input, Button, Divider, Heading, Spacer } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const ChatMessage = ({ message, sender }) => (
  <Box bg={sender === "me" ? "blue.500" : "gray.100"} color={sender === "me" ? "white" : "black"} borderRadius="lg" p={2} alignSelf={sender === "me" ? "flex-end" : "flex-start"} maxW="70%">
    <Text>{message}</Text>
  </Box>
);

const ChatHeader = ({ name, avatar }) => (
  <HStack bg="gray.100" p={4}>
    <Avatar name={name} src={avatar} />
    <Heading size="md">{name}</Heading>
    <Spacer />
  </HStack>
);

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <HStack p={4}>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
      <Button onClick={handleSend} colorScheme="blue">
        <FaPaperPlane />
      </Button>
    </HStack>
  );
};

const Index = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { text: message, sender: "me" }]);
  };

  return (
    <Box h="100vh" display="flex" flexDirection="column">
      <ChatHeader name="John Doe" avatar="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzE1NDk2MHww&ixlib=rb-4.0.3&q=80&w=1080" />
      <VStack spacing={4} p={4} overflowY="auto" flexGrow={1}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} sender={message.sender} />
        ))}
      </VStack>
      <Divider />
      <ChatInput onSend={handleSend} />
    </Box>
  );
};

export default Index;
