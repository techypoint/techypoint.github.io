---
title: "Docker Runtime Explained"
author: "Varun Bisht"
description: "we basically discuss about the components involved in docker at runtime. This will help you in getting docker working better. Docker client sends request to the server.Docker client can be command line, interface or any other tool. But these tools communicate with docker daemon with REST API and that's why the client can communicate with more than one daemon."
blogDesc: "we basically discuss about the components involved in docker at runtime. This will help you in getting docker working better. Docker client sends request to the server.Docker client can be command line, interface or any other tool. But these tools communicate with docker daemon with REST API and that's why the client can communicate with more than one daemon."
keywords: "docker runtime architecture,what is docker runtime,what is container runtime,docker container runtime,docker runtime explained,docker runtime"
category: "docker"
permalink: "/docker/runtime-explained"
image: "/assets/img/docker/runtime-explained/docker-runtime-explained.png"
featureImage: "/assets/img/docker/runtime-explained/docker-runtime-explained.png"
---
In this, we basically discuss about the components involved in docker at runtime. This will help you in getting docker working better.
<div class="imgCont">
  <img class="object-fit" alt="Docker Runtime Components" title="Docker Runtime Components" src="/assets/img/docker/runtime-explained/docker-runtime-component.png" />
</div>

In the above diagram, you will see various components and also flow of request. We will explain each component and what role it plays in the flow.

### 1. DOCKER CLI
 Docker client sends request to the server i.e docker daemon. Docker client can be command line, interface or any other tool. But these tools communicate with docker daemon with REST API and that's why the client can communicate with more than one daemon.
Eg- sudo docker images

### 2. Docker Daemon(Dockerd)
Dockerd is a process running in background and listens for request from Docker Client. It is responsible for all the docker commands(docker images, docker pull, docker run, docker stats).

   Under the hood, it manages container life cycle using **containerd**. Dockerd also solves the problem of container orchestration though **docker swarm**.

   You can check this daemon process-
   {% highlight html %}{% raw %}
    varun@varun-ThinkPad-L490:~$ ps aux|grep dockerd
    root     19341  0.0  0.5 1528748 85116 ?       Ssl  16:17   0:04 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
   {% endraw %}{% endhighlight %}

### 3. containerd
It also runs in the background as a daemon process and is the main component which manages the containers lifecyle. Apart from this, it manages -
- manage image transfer and storage
- manage container execution and supervision
- manage low-level storage and network
- support **Open container intiative(OCI) Image spec**
- support **OCI runtime spec**

It is also industry standard for implementing OCI and also it is designed to be used in large systems rather than being used by develeopers directly.
Docker Daemon uses containerd to manage lifecyle of containers.

You can check this daemon process-
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ ps aux|grep containerd
root       908  0.1  0.2 1414880 48196 ?       Ssl  12:34   0:41 /usr/bin/containerd
{% endraw %}{% endhighlight %}
### 4. runc
Containerd uses runc to spawn and run container according to the OCI specification. **runc** is a command-line tool which takes OCI bundle(Root Filesystem + config.json) and runs a container from it. When you run container from images, it basically converts container image to Root filesystem + config.json and pass it to runc to run container.
### 5. containerd-shim
It is the piece of code that resides between **Containerd** and **runc**. Basically, runc creates containers process and exits and make containerd-shim process as the parent for the container process.
There are many reason for it -
- It allows **runc** to exit after container is started, eliminates the long running runtime processes for containers.
- If containerd or docker dies, it keeps STDIO open for containers.
- makes container totally separated from the container manager i.e contained
- containerd-shim reports termination status of the container to the docker.

### Lets see all this together-
1. We have checked both docker and containerd are running after docker installation.
2. Now start nginx container - sudo docker run -d nginx sleep 6000
3. Now check processes and search for sleep process- ps auxf
{% highlight html %}{% raw %}
root       908  0.1  0.3 1415136 49188 ?       Ssl  12:34   0:43 /usr/bin/containerd
root       561  0.0  0.0 108812  5568 ?        Sl   20:56   0:00  \_ containerd-shim -namespace moby -workdir /var/lib/containerd/io.containerd.runtime
root       582  0.3  0.0   2292   680 ?        Ss   20:56   0:00      \_ sleep 6000
{% endraw %}{% endhighlight %}

You can clearly see the process hierarchy for container. There is no **runc** process as it exits after creating container.

You can clearly see what components are involved in docker runtime.

That's all from this tutorial, this underlying technology also gets used by **kubernetes**.

**In the next tutorial**, we will talk about the docker storage.
