# Configuring Cloud9 Local

When you install Cloud9 Local, the `~/.c9` folder is created to manage the way the program connects to Cloud9. There's a _config.json_ file which defines various properties that Cloud9 Local uses to run and handle various dependencies. 

Warning: **You should not change this file**, as it may cause Cloud9 Local to become unusable. If you find that your Cloud9 Local is no longer starting up, simply delete the _config.json_ file. 

Having said that, there are, of course, certain configurations you can make for special use cases. 

## Configuring Cloud9 Local for a VM

Cloud9 Local assumes a certain hostname, port, and IP binding when starting up. For users accessing a Cloud9 Local instance behind a VM, this may not be optimal.

You can configure the following local values in order to change these options:

```json
{
    "localRuntimeHostname"  : "localhost",
    "localRuntimeBindHostname": "0.0.0.0"
}
```

`localRuntimeBindHostname` can be a different hostname or IP to bind to, if you want one that's different than `localRuntimeHostname`.

## Restricting User Access

You can block certain users from using the Cloud9 Local client to connect to their online code repository. At the moment, we only support blocking GitHub usernames.

To place a restriction, add the following property to _config.json_:

```json
"restrict": [
        "github/<username>"
]
```

where `<username`> is the GitHub username to restrict.