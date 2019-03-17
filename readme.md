
# MCVE to demonstrate that a Karma runs specs twice

This MCVE shall demonstrates the minimal config to demonstrate how running
Karma via the API loads and executes tests twice.

## Symptom

The tests run twice. Even the .spec file is loaded twice.

```
...
HeadlessChrome 72.0.3626 (Linux 0.0.0) INFO: '### SCRIPT LOADED'
HeadlessChrome 72.0.3626 (Linux 0.0.0) INFO: '### SCRIPT LOADED'
17 03 2019 22:13:46.477:DEBUG [HeadlessChrome 72.0.3626 (Linux 0.0.0)]: CONNECTED -> EXECUTING
..17 03 2019 22:13:46.505:DEBUG [HeadlessChrome 72.0.3626 (Linux 0.0.0)]: EXECUTING -> CONNECTED

HeadlessChrome 72.0.3626 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.029 secs / 0.004 secs)

HeadlessChrome 72.0.3626 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.029 secs / 0.004 secs)
```

When running Karma via its CLI ...

```
$ node_modules/bin/karma start
```

... the issue does not occure:

```
...
HeadlessChrome 72.0.3626 (Linux 0.0.0) INFO: '### SCRIPT LOADED'
17 03 2019 22:20:37.400:DEBUG [HeadlessChrome 72.0.3626 (Linux 0.0.0)]: CONNECTED -> EXECUTING
.17 03 2019 22:20:37.406:DEBUG [HeadlessChrome 72.0.3626 (Linux 0.0.0)]: EXECUTING -> CONNECTED

HeadlessChrome 72.0.3626 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.006 secs / 0.004 secs)
```


## Install depencencies (once)

```
$ npm install
```

## Run the demo

```
$ node mcve.js
```
