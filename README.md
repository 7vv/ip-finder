# Ip-locale v1.0.3
Locate the country with ip without using the network. 

This package Find matches in a total of 180,000 IP bands

The heaviest task took 0.01 ~ 0.05 seconds

contains country ip data. size 22MB

Consequently you want smaller capacity, you should use ip finder which uses network

## Install
Using npm:

```shell
    npm i ip-local --save
```

In Node.js:
```
    const ipLocal = require('ip-locale');    
    const ipInfo1 = ipLocal('14.128.128.2');
    const ipInfo2 = ipLocal('123.123.123.123');
    
```

Result:

`14.128.128.2`

```js
  { 
      countryCode: 'KR',
      currencyCode: 'KRW',
      regionName: 'Seoul',
      countryName: 'South Korea',
      isoCode: 'KOR',
      phoneCode: '82' 
  }
``` 

`123.123.123.123`

```js
    {
        countryCode: 'PH',
        currencyCode: 'PHP',
        regionName: 'Manila',
        countryName: 'Philippines',
        isoCode: 'PHL',
        phoneCode: '63' 
    }
```
