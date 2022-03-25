export default function toast(toast, message, messageStatus) {
  return toast({
    title: message,
    status: messageStatus,
    duration: 2000,
    isClosable: true,
  });
}
