JSON Logger
========

This project has been created using Proxy-tamper by Thomas Sydorowski. 
You can find it here : 

```
https://github.com/tsyd/proxy-tamper
```

The goal of this project is to allow you to capture all JSON during your browsing session. 
Basically, you just have to define a proxy with your Browser and then navigate as usual. 

You'll then have the result in the console where this project has been launched. 

### Installation

To install this project, you just have to clone this project by typing : 

```
git clone git@github.com:PaulSec/JSONLogger.git
```

### Usage

TO use this project, go in the directory :

```
cd JSONLogger
```

And launch the project : 

```
node proxy.js
```

Then, configure your browser like this : 

```
Edit -> Preferences -> Advanced -> Settings
```

Define the proxy with the port 8000 : 

```
HTTP Proxy : port 8000
```

## Example of session 

Here is an example output that you can have : 

```
Proxy server listening on port 8000
[+] http://smart-ip.net/geoip-json/95.128.42.132
{"source":"smart-ip.net","host":"95.128.42.132","lang":"en","countryName":"United Kingdom","countryCode":"GB","city":"","region":"","latitude":"54.0000","longitude":"-2.0000","timezone":""}


[+] http://smart-ip.net/geoip-json/8.8.8.8
{"source":"smart-ip.net","host":"8.8.8.8","lang":"en","countryName":"United States","countryCode":"US","city":"Mountain View","region":"California","latitude":"37.4192","longitude":"-122.0570","timezone":"America\/Los_Angeles"}


[+] http://ip.jsontest.com/
{"ip": "31.34.10.164"}
```


### Conclusion (& License)
Feel free to give feedbacks and ask for new features.  

Project released under MIT license. 
Forked from Thomas Sydorowski's project. 
