const os = require('os');
console.log(`Sistema operativo: ${os.platform()}`);

const plataform = os.platform();
console.log(plataform);

const nameOs = os.type();
console.log(nameOs);

const uptimeOs = os.uptime();
console.log(uptimeOs);

const totalMemory = os.totalmem();
console.log(totalMemory/1024);

const cpuArchitecture = os.arch();
console.log(cpuArchitecture);

const cpuCorelogic = os.cpus();
console.log(cpuCorelogic);

const networkInterface = os.networkInterfaces();
console.log(networkInterface);

const homeDir = os.homedir();
console.log(homeDir);