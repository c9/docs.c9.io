# FAQ: Google Web Fonts

### Why won't Google Web Fonts work with my site?
Cloud9 hosts its data via the <code>HTTPS</code>-protocol. In most 
cases, people load their Google Web Font script via the <code>HTTP</code>
protocol. Simply change the protocol referencing the Google Web Font script from
<code>HTTP</code> to <code>HTTPS</code>. Most browsers dont't allow serving
unsafe HTTP-content mixed with safe HTTPS-content and simply block it.