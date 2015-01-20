# Redis

## Running

Cloud9 workspaces come with redis pre-installed.

Start the server:

```no-highlight
sudo service redis-server start
```

Connect with the client:

```no-highlight
redis-cli
```

You can then connect to the database with following parameters:
<div markdown="1">
<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Option</td>
            <th>Value</td>
            <th>Comment</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`Hostname`</td>
            <td>`$IP`</td>
            <td>The same local IP as the application you run on Cloud9</td>
        </tr>
        <tr>
            <td>`Port`</td>
            <td>`6379`</td>
            <td>The default Redis port number</td>
        </tr>
        <tr>
            <td>`Password`</td>
            <td>``</td>
            <td>No password since you can only access the DB from within the workspace</td>
        </tr>
    </tbody>
</table>
</div>

## Drivers

See http://redis.io/clients for drivers.