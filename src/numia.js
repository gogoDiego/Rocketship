import axios from 'axios';

// REST endpoint
const restEndpoint = 'https://cosmos-lcd.numia.xyz/blocks/latest';
const restHeaders = {
  Accept: 'application/json',
  Authorization: 'sk_37e2f950d8fc40aab426ada24e24dba9', // Replace with your actual API key
};

axios
  .get(restEndpoint, { headers: restHeaders })
  .then(response => {
    // Handle the response data here
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors that occur
    console.error(error);
  });

// RPC endpoint
const rpcEndpoint = 'https://cosmos-rpc.numia.xyz/status';
const rpcHeaders = {
  Accept: 'application/json',
  Authorization: 'Bearer YOUR_RPC_AUTH_TOKEN', // Replace with the appropriate RPC authorization token
};

axios
  .get(rpcEndpoint, { headers: rpcHeaders })
  .then(response => {
    // Handle the response data here
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors that occur
    console.error(error);
  });
