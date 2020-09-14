---
title: "Docker Container"
author: "Varun Bisht"
description: "Website basics terms and concepts-hosting, domain name, Git and SEO"
keywords: "web hosting,hosting meaning,domain name meaning,Git,SEO"
category: "docker"
permalink: "/docker/container"
date: 2020-08-14 11:00:00 am
image: "/assets/img/docker/docker-container.png"
featureImage: "/assets/img/docker/docker-container.png"
---
Container is a runtime instance of Docker image. You can perform operations on container like run, stop, delete etc.
By Default, any changes done in container will not persist and also container is isolated. You can provide storage and network confgiuration at the start of container.

They are lightweight, fast and designed to use resources effectively.

So lets start-

First download the ubuntu image to run its container-
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker pull ubuntu
[sudo] password for varun:
Using default tag: latest
latest: Pulling from library/ubuntu
3ff22d22a855: Pull complete
e7cb79d19722: Pull complete
323d0d660b6a: Pull complete
b7f616834fd0: Pull complete
Digest: sha256:5d1d5407f353843ecf8b16524bc5565aa332e9e6a1297c73a92d3e754b8a636d
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
{% endraw %}{% endhighlight %}

## 1. To run container
This command creates the container and run it.

**command-** sudo docker run -it ubuntu

here,
i- for interactive and t- to allocate a pseudo terminal
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker run -it ubuntu
root@b30e94715e59:/# ls
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@b30e94715e59:/#
{% endraw %}{% endhighlight %}
Here you will enter in the bash terminal of docker ubuntu image.
That's it, it is very simple and fast to start a container.

## 2. To list docker container

**command -** sudo docker container ls or sudo docker ps

For Eg-
1. to list running container- sudo docker ps or sudo docker container ls
2. to list all containers - sudo docker ps -a or sudo docker container ls -a
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b30e94715e59        ubuntu              "/bin/bash"         6 minutes ago       Up 6 minutes                            funny_matsumoto
varun@varun-ThinkPad-L490:~$ sudo docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
b30e94715e59        ubuntu              "/bin/bash"         6 minutes ago       Up 6 minutes                                   funny_matsumoto
222aef1314e8        ubuntu              "/bin/bash"         7 minutes ago       Exited (0) 6 minutes ago                       epic_tesla
varun@varun-ThinkPad-L490:~$ sudo docker container ls
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b30e94715e59        ubuntu              "/bin/bash"         6 minutes ago       Up 6 minutes                            funny_matsumoto
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
b30e94715e59        ubuntu              "/bin/bash"         6 minutes ago       Up 6 minutes                                   funny_matsumoto
222aef1314e8        ubuntu              "/bin/bash"         7 minutes ago       Exited (0) 7 minutes ago                       epic_tesla
varun@varun-ThinkPad-L490:~$
{% endraw %}{% endhighlight %}

## 3. To remove docker container

- To remove container- sudo docker container rm container-id
- To remove container by force- sudo docker container rm -f container-id

{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                    PORTS               NAMES
90ea93b1dcb6        ubuntu              "/bin/bash"         24 hours ago        Exited (0) 24 hours ago                       confident_dhawan
bb005879c5b5        ubuntu              "/bin/bash"         24 hours ago        Exited (0) 24 hours ago                       dazzling_kilby
varun@varun-ThinkPad-L490:~$ sudo docker container rm bb005879c5b5
bb005879c5b5
{% endraw %}{% endhighlight %}

# Docker LifeCycle

<div class="imgCont">
  <img class="object-fit" alt="Disqus Homepage" title="Disqus Homepage" src="/assets/img/docker/docker-lifecycle.png" />
</div>


## 1. CREATED STATE

**To create container-** sudo docker container create image-name

This command creates docker container but it does not run it. It creates a writable layer over the image. You can use it to set up configuration in container so that it takes less time when you start it.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker container create ubuntu
8052263e1c9c96e450a480f32cfde9f28d21b25eeb26974353c4b4c2f8268cc0
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
8052263e1c9c        ubuntu              "/bin/bash"         28 seconds ago      Created                                 affectionate_shaw
{% endraw %}{% endhighlight %}

you can see that container is in **Created** state.

## 2. RUNNING STATE

**To start container-** sudo docker container start container-id

This command start docker container. It also start container from the stopped state.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker container start 8052263e1c9c
8052263e1c9c
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
8052263e1c9c        ubuntu              "/bin/bash"         7 minutes ago       Exited (0) 2 seconds ago                       affectionate_shaw
{% endraw %}{% endhighlight %}

Difference between **docker run** and **docker start**-
1. Docker run creates the container and start it i.e docker run = docker create + docker start
2. Docker start launches a container which is in stopped state or in created state. It maintains the settings and data changes previously.

## 3. STOPPED STATE

**To stop container-** sudo docker container stop container-id

This command stops the container gracefully and you can restart it.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
17dca6cd4444        ubuntu              "/bin/bash"         13 seconds ago      Up 12 seconds                           bold_wu
varun@varun-ThinkPad-L490:~$ sudo docker container stop 17dca6cd4444
17dca6cd4444
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                    PORTS               NAMES
17dca6cd4444        ubuntu              "/bin/bash"         29 seconds ago      Exited (0) 1 second ago                       bold_wu
{% endraw %}{% endhighlight %}

## 4. KILLED STATE

**To kill container-** sudo docker container kill container-id

This command kills the container.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
a3483a5f8ca3        ubuntu              "/bin/bash"         3 seconds ago       Up 2 seconds                            nifty_hellman
varun@varun-ThinkPad-L490:~$ sudo docker container kill a3483a5f8ca3
a3483a5f8ca3
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                      PORTS               NAMES
a3483a5f8ca3        ubuntu              "/bin/bash"         20 seconds ago      Exited (137) 1 second ago                       nifty_hellman
{% endraw %}{% endhighlight %}
Difference between **docker stop** and **docker kill**-
1. Docker stop - It kills the container gracefully i.e it sends SIGTERM and then SIGKILL after grace period.
1. Docker kill - It kills the container directly i.e it sends SIGKILL.

## 5. PAUSED STATE

**To puase container-** sudo docker container pause container-id

This command suspends all the processes in the container i.e processes behave like a regular process but scheduler will not assign cpu time to them.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
f6619b8c20c3        ubuntu              "/bin/bash"         4 seconds ago       Up 4 seconds                            jolly_moore
varun@varun-ThinkPad-L490:~$ sudo docker container pause f6619b8c20c3
f6619b8c20c3
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                   PORTS               NAMES
f6619b8c20c3        ubuntu              "/bin/bash"         14 seconds ago      Up 13 seconds (Paused)                       jolly_moore
{% endraw %}{% endhighlight %}

The status of the container is **paused**.
## 6. UN-PAUSED STATE

**To un-pause container-** sudo docker container unpause container-id

This command un-suspends all processes in a container.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker container unpause f6619b8c20c3
f6619b8c20c3
varun@varun-ThinkPad-L490:~$ sudo docker container ls -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
f6619b8c20c3        ubuntu              "/bin/bash"         4 minutes ago       Up 4 minutes                            jolly_moore
{% endraw %}{% endhighlight %}

# Docker Container useful command

## 1. To see docker resource usage statistics

**command-** sudo docker stats container-id

For Eg-
1. to see particular container resource usage- sudo docker stats container-id
2. to see all running container usage- sudo docker stats
{% highlight html %}{% raw %}
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
b30e94715e59        funny_matsumoto     0.00%               2.504MiB / 15.32GiB   0.02%               24.4kB / 0B         0B / 0B             1
{% endraw %}{% endhighlight %}

## 2. To see top process in container

**command-** sudo docker top container-id
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker top b30e94715e59
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                21042               21024               0                   18:54               pts/0               00:00:00            /bin/bash
varun@varun-ThinkPad-L490:~$
{% endraw %}{% endhighlight %}
