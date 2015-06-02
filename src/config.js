export default {
    'localhost': {
        clientId: '6f55a2b19e0ed9a348f1',
        gatekeeperUrl: 'https://selfcontained-labelr-localhost.herokuapp.com/authenticate'
    },

    'labelr.selfcontained.surge.sh': {
        clientId: '0b19c9bf2a8ae57426ab',
        gatekeeperUrl: 'https://selfcontained-labelr-prod.herokuapp.com/authenticate'
    }
}[window.location.hostname];
