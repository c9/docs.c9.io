# Redis

## Installation

Open the terminal and install redis using `nada-nix` (the new Cloud9 Package Manager):

```no-highlight
nada-nix install redis
```

Start the server:

```no-highlight
redis-server --port 16379 --bind $IP
```

Connect with the client:

```no-highlight
./redis-cli -h $IP -p 16379
```

## Persistent configuration

If you want to have the configuration persistent, you just need to create the file and pass it as an argument to redis-server. Follow the instructions below.

Retrieve your local IP address:

```no-highlight
echo $IP 
```

Change your redis.conf (it's best to set a port > 16000 because those are free to use, such as 16379):

```no-highlight
bind [YOUR $IP] 
port 16379
```

## Drivers

See http://redis.io/clients for drivers.