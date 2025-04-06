// Este archivo es compatible con Node.js y browsers modernos que soporten módulos ES
export function obtenerIPLocal() {
  // Esto no funcionará en navegador directamente, solo en Node.js
  const os = require('os');

  const interfaces = os.networkInterfaces();
  for (const nombre in interfaces) {
      for (const interfaz of interfaces[nombre]) {
          if (interfaz.family === 'IPv4' && !interfaz.internal) {
              return interfaz.address;
          }
      }
  }
  return 'localhost';
}
