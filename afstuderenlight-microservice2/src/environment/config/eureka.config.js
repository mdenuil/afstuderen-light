const ip = require('ip');
const Eureka = require('eureka-js-client').Eureka;

const ipAddr = process.env.IP_ADDRESS || ip.address();
const hostName = process.env.HOST_NAME || ip.address();
const port = process.env.PORT || 7007;

const uniquenumber = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 36);

const eurekaClient = new Eureka({
  // application instance information
  instance: {
    app: 'microservicetwo',
    instanceId: `${uniquenumber}:microservicetwo:${port}`,
    hostName: hostName,
    ipAddr: ipAddr,
    statusPageUrl: `http://${ipAddr}:${port}`,
    port: {
      $: port,
      '@enabled': 'true',
    },
    vipAddress: 'microservicetwo',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
    leaseInfo: {
      renewalIntervalInSecs: 5,
      durationInSecs: 10
    },
    registerWithEureka: true,
    fetchRegistry: true,
    
  },
  eureka: {
    heartbeatInterval: 3,
    preferIpAddress: true,
    maxRetries: 30,
    host: 'eurekaserver-1',
    port: '8761',
    servicePath: '/eureka/apps/'
  },
});

module.exports = { eurekaClient };
