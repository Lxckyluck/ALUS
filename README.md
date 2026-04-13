# ALUS

ALUS is a web challenge in the Christmas spirit designed to learn the basics of programming exploits and/or bad code design. The challenge is beginner-friendly and doesn't require extensive knowledge to complete (however, it's not easy >\_<).

---

## 📋 Table of Contents

- [How to self-host ?](#how-to-self-host-)
- [Configure Burp Suite](#configure-burp-suite-to-work-on-localhost-optional)
- [Hosted CTF](#hosted-ctf)

---

## 🚀 How to self-host ?

Clone the project (or fork it) :

```bash
git clone https://gitlab.tech.orange/lucas.denis/alus.git
```

Install the dependencies :

```bash
npm i
```

Run the project :

```bash
npm start
```

The GUI is available at `localhost:3000`

---

### ⚙️ Change the default port

If you need to change the default port, you have two options :

**Option 1** — Edit line 15 of [this file](./bin/www) and replace `3000` with your desired port.

**Option 2** — Create a `.env` file and add the following line :

```env
PORT=your_port_number
```

> ⚠️ In both cases, don't forget to update the `BASE_URL` variable in the [env.js file](./env.js) !

---

## 🔍 Configure Burp Suite to work on localhost (optional)

Since this is a web challenge, you'll probably want to use Burp Suite. Here are the steps to make it work on localhost :

### Edit the hosts file

**On Linux :**

```bash
sudo nano /etc/hosts
```

**On Windows**, open the following file as administrator :

```
C:\Windows\System32\drivers\etc\hosts
```

Then add this line :

```
127.0.0.1 localhost.com
```

> 💡 The `.com` extension is just an example, you can use any other extension.

If you didn't change the default port, the GUI will be available at `localhost.com:3000`.

> ⚠️ Don't forget to update the `BASE_URL` variable in the [env.js file](./env.js) !

---

### 🔒 Behind a proxy ?

If a proxy is blocking the page, you need to disable the upstream proxy server in Burp Suite :

> **Settings** > **Network** > **Connections** > **Upstream Proxy Servers** — and disable it.

---

## 🌐 Hosted CTF

Since this is an Express project, you can host it for free on **Vercel**. Simply fork or clone the project, then import it into Vercel using your own account.

> ⚠️ Don't forget to update the `BASE_URL` variable with your own website URL !
