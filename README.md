# Ip-locale v1.0.3
Locate the country with ip without using the network. 

The heaviest task took 0.01 ~ 0.05 seconds

This package contains country ip data. size 22MB

Consequently you want smaller capacity, you should use ip finder which uses network

## Install
Using npm:

```shell
    npm i ip-local --save
```

In Node.js
```
    const ipLocal = require('ip-locale');    
    const ipInfo = ipLocal('123.123.123.123');
```

Result
```
    {
        countryCode: 'PH',
        currencyCode: 'PHP',
        regionName: 'Manila',
        countryName: 'Philippines',
        isoCode: 'PHL',
        phoneCode: '63' 
    }
```
