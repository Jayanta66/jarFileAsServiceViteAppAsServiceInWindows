var Service = require('C:\Users\kk\AppData\Roaming\npm\node_modules\node-windows').Service;
var svc = new Service({
  name: 'vit',
  description: 'Runs the Vite production preview server.',
  script: 'C:\Users\kk\Downloads\Spring-boot-react-chat-web-app-main\Spring-boot-react-chat-web-app-main\Front-end\node_modules\vite\bin\vite.js',
  scriptOptions: 'preview --port 5173'
});

svc.on('install', function() {
  svc.start();
});
svc.install();
