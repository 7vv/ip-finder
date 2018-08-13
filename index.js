if(global._ipListMap === undefined) global._ipListMap = require('./ipListMap');
const pattern = 4;
const MAX = 3;

module.exports = info = myIp => {
    const ip = myIp.split('.');
    if (ip.length !== pattern) return null;
    
    const myIpRange = _ipListMap[ip[0]];
    if(!myIpRange) return null;
    
    for (const _ip of myIpRange) {
        const start = _ip.s.split('.');
        const end = _ip.e.split('.');

        for (const i in ip) {
            const startAddon = MAX - +start[i].length;
            const endAddon = MAX - +end[i].length;
            const ipAddon = MAX - +ip[i].length;

            if (startAddon > 0) start[i] = (startAddon === 2 ? '00' : startAddon === 1 ? '0' : '') + start[i];
            if (endAddon > 0) end[i] = (endAddon === 2 ? '00' : endAddon === 1 ? '0' : '') + end[i];
            if (ipAddon > 0) ip[i] = (ipAddon === 2 ? '00' : ipAddon === 1 ? '0' : '') + ip[i];
        }

        let startInt = start[0] + start[1] + start[2];
        let endInt = end[0] + end[1] + end[2];
        let ipInt = ip[0] + ip[1] + ip[2];

        if (+ipInt >= +startInt && +ipInt <= +endInt) {
            return {
                countryCode: _ip.c,
                currencyCode: _ip.cy,
                regionName: _ip.ca,
                countryName: _ip.cu,
                isoCode: _ip.i,
                phoneCode: _ip.p,
            }
        }
    }
}
