# wdio-safaridriver
POC for wdio with Safari driver

## Setup
### Safari driver
Make sure you have Safari driver by running the following command
```bash
/usr/bin/safaridriver --version
```

The output should be something like
```
Included with Safari 13.0 (15608.1.31.1.2)
```

If you've never used Safari driver on your mac before, you need to enable it by using 
```bash
safaridriver --enable
```

### Packages
Run `npm install` from your project's root dir to install the required packages

## Test
Run `npm run test` from your terminal on a computer running macOS to execute the sample test

