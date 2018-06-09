export const messageList = messageList => ({
  type: 'MESSAGE_LIST',
  payload: [
    { message: 'Hello', isSender: false, time: '11.10' },
    { message: 'Hello, there', isSender: true, time: '11.12' },
  ],
});

export const supportName = supportName => ({
  type: 'SUPPORT_NAME',
  payload: [
    { name: 'Ferruccio Balestreri', status: 0 },
  ],
});
