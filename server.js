const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/peerjs',
  allow_discovery: true
});

console.log('✅ PeerJS server running on port', process.env.PORT || 9000);