# ALUS

ALUS is a web challenge in the Christmas spirit designed to learn the basic of programmation exploit or/and of bad code design. The challenge is friendly and don't need large knowledge to finish it (however he is not easy >\_< ).

## How to self-host ?

You need to clone the project (or fork it):

```bash
git clone https://gitlab.tech.orange/lucas.denis/alus.git
```

Then you need to install modules :

```bash
npm i
```

Finally you can run the project :

```bash
npm start
```

A GUI is available at localhost:3000

if you need to change the default port of the project for some reason you can edit the line 15 of [this file](./bin/www) by replacing the port 3000 by the port you want.

You can also create the variable "PORT" with your port number inside of the a .env file.

In both case don't forget to change the BASE_URL variable inside of the [env.js file](./env.js)

### Configure Burp suite to work on localhost (optionnal)

As I said, it's a web challenge so you probably want to use burp to do it.

Here is the following step to do if you want burp to work in localhost :

You need to edit the hosts file :

On linux :

```bash
    sudo nano /etc/hosts
```

    And add this line in the file :

```bash
    127.0.0.1 localhost.com
```

On Windows :

    The path of the file "hosts" is :

```bash
    C:\Windows\system32\drivers\etc
```

    And add this line in the file :

```bash
    127.0.0.1 localhost.com
```

The .com here is an example. You can put another extension for example.

If you didn't change the default port, the GUI is available at localhost.com:3000

Here again, don't forget to change the BASE_URL variable inside of the [env.js file](./env.js)

If you are behind a proxy that block the page (it was my case) you need to disable the upstream proxy server (on Burp) in Settings>Network>Connections and go in Upstream proxy servers section

## Hosted CTF

Since its an express project you can host it on vercel for free. You can fork the project or clone it and go to vercel and use the project with your own account.

If you do this you will need to change the BASE_URL variable by your own website URL.
