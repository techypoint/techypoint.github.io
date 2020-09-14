---
title: "Docker Internal Concepts"
author: "Varun Bisht"
description: "Website basics terms and concepts-hosting, domain name, Git and SEO"
keywords: "web hosting,hosting meaning,domain name meaning,Git,SEO"
category: "docker"
permalink: "/docker/internal-concepts"
date: 2020-08-19 11:00:00 am
image: "/assets/img/docker/docker-internal-concepts.png"
featureImage: "/assets/img/docker/docker-internal-concepts.png"
---
You must be wondering how docker interally works or what are the underlying technologies used by docker.
Docker Inc company works with the containerization technologies. Containers exist in the linux before docker.

## Underlying Technologies used by docker
1. Namespaces
2. Control Groups
3. Union File System

## Namespaces

Namespaces is a linux feature which helps in making container isolate. It manages what can be seen by the container i.e it basically divides the kernel resources to the set of processes which can not be seen by other set of processes.

Docker creates a set of namespaces for the container. Namespaces created by docker-
1. **Process Id Namespace** -It assign independent set of process ids to the processes from other namespaces.
From the wikipedia, you can see that PID namespaces are nested, this means that inital process can see all the process.
2. **Network Namespace** - It helps in viewing processes to see different set of networking interface.
3. **Mount Namespace** - It controls mount point.
4. **InterProcess Namespace** - It controls access to IPC(Inter Process Communication) resources.
5. **UNIX Time Sharing Namespace** -It controls viewing of different host and domain names to different processes.

This means each container runs in a separate namespaces.

Lets see this with example -

1. We will check whether nginx service process is running on our system or not.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ ps aux|grep nginx
varun    12841  0.0  0.0   6360   848 pts/1    S+   16:14   0:00 grep --color=auto nginx
No nginx service process is running on our system.
2. After that, we will run a nginx container and this container automatically runs nginx service on startup.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker run -d nginx
bc678607bf7c9af588dda37837dbc22e32ae8fbc158426b95a06d6648a8bbfa9
{% endraw %}{% endhighlight %}
3. Then we will check nginx service process running in a container(you need to install ps in docker)
**command to install ps** - apt-get update && apt-get install procps

After installing, check nginx service process
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker run -d nginx
bc678607bf7c9af588dda37837dbc22e32ae8fbc158426b95a06d6648a8bbfa9
varun@varun-ThinkPad-L490:~$ sudo docker container ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
bc678607bf7c        nginx               "/docker-entrypoint.…"   25 seconds ago      Up 24 seconds       80/tcp              clever_jennings
varun@varun-ThinkPad-L490:~$ sudo docker exec -it bc678607bf7c bash
root@bc678607bf7c:/# apt-get update && apt-get install procps
0% [Connecting to deb.debian.org] [Connecting to security.debian.org]
root@bc678607bf7c:/# ps aux|grep nginx
root         1  0.0  0.0  10624  5824 ?        Ss   10:45   0:00 nginx: master process nginx -g daemon off;
nginx       31  0.0  0.0  11020  2564 ?        S    10:45   0:00 nginx: worker process
root       358  0.0  0.0   3080   880 pts/0    S+   10:47   0:00 grep nginx
{% endraw %}{% endhighlight %}

Here, proc  ess exists with PID - 1 and 31
4. After checking nginx service process in a container, we will check nginx service process on our system.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo ps aux|grep nginx
root     12924  0.0  0.0  10624  5824 ?        Ss   16:15   0:00 nginx: master process nginx -g daemon off;
systemd+ 12992  0.0  0.0  11020  2564 ?        S    16:15   0:00 nginx: worker process
varun    13712  0.0  0.0   6360   924 pts/2    S+   16:17   0:00 grep --color=auto nginx
{% endraw %}{% endhighlight %}
On our system, process exits with PID - 12924 and 12992

We can clearly see that process running in our system are not visible inside container but process created in the container are available on our system with different PId. This shows that docker creates container in different namespaces.

We can also check namespaces assigned to process
- To check current process - sudo ls -lah /proc/$$/ns
- To check specific process - sudo ls -lah /proc/pid/ns
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo ls -lah /proc/12924/ns
total 0
dr-x--x--x 2 root root 0 Sep  6 16:15 .
dr-xr-xr-x 9 root root 0 Sep  6 16:15 ..
lrwxrwxrwx 1 root root 0 Sep  6 16:30 cgroup -> 'cgroup:[4026531835]'
lrwxrwxrwx 1 root root 0 Sep  6 16:15 ipc -> 'ipc:[4026532799]'
lrwxrwxrwx 1 root root 0 Sep  6 16:15 mnt -> 'mnt:[4026532797]'
lrwxrwxrwx 1 root root 0 Sep  6 16:15 net -> 'net:[4026532802]'
lrwxrwxrwx 1 root root 0 Sep  6 16:15 pid -> 'pid:[4026532800]'
lrwxrwxrwx 1 root root 0 Sep  6 16:30 pid_for_children -> 'pid:[4026532800]'
lrwxrwxrwx 1 root root 0 Sep  6 16:30 user -> 'user:[4026531837]'
lrwxrwxrwx 1 root root 0 Sep  6 16:15 uts -> 'uts:[4026532798]'
varun@varun-ThinkPad-L490:~$ sudo ls -lah /proc/$$/ns
total 0
dr-x--x--x 2 varun varun 0 Sep  6 16:31 .
dr-xr-xr-x 9 varun varun 0 Sep  6 16:17 ..
lrwxrwxrwx 1 varun varun 0 Sep  6 16:31 cgroup -> 'cgroup:[4026531835]'
lrwxrwxrwx 1 varun varun 0 Sep  6 16:31 ipc -> 'ipc:[4026531839]'
lrwxrwxrwx 1 varun varun 0 Sep  6 16:31 mnt -> 'mnt:[4026531840]'
lrwxrwxrwx 1 varun varun 0 Sep  6 16:31 net -> 'net:[4026532008]'
lrwxrwxrwx 1 varun varun 0 Sep  6 16:31 pid -> 'pid:[4026531836]'
lrwxrwxrwx 1 varun varun 0 Sep  6 16:31 pid_for_children -> 'pid:[4026531836]'
lrwxrwxrwx 1 varun varun 0 Sep  6 16:31 user -> 'user:[4026531837]'
lrwxrwxrwx 1 varun varun 0 Sep  6 16:31 uts -> 'uts:[4026531838]'
{% endraw %}{% endhighlight %}

You can easily see that these process have different namespaces id

**Note-** This also shows that they share resources with system and this is not the case with Virtual Machine(VM).

## Control Groups

Namespaces tells what container can see but Control groups tells us how much it can see. This means it limits the memory, CPU, disk I/O and network for processes.

By default, containers has no resource usage limit but you can enforce hard limit by providing flags while running container.

**command**- sudo docker run -d -m 1g --cpus="1" nginx

You can check all options in [docker documentation](https://docs.docker.com/config/containers/resource_constraints "docker documentation")

For Eg-
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker run -d -m 1g --cpus="1" nginx
WARNING: Your kernel does not support swap limit capabilities or the cgroup is not mounted. Memory limited without swap.
{% endraw %}{% endhighlight %}

If you get above error or you can also check using **docker info**-
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker info | grep WRANING
WARNING: No swap limit support
{% endraw %}{% endhighlight %}
If you get above warning, then you need to enable limiting resources.

- To enable, add **GRUB_CMDLINE_LINUX="cdgroup_enable=memory swapaccount=1"** in grub config file.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Homepage" title="Disqus Homepage" src="/assets/img/docker/grub_configuration.png" />
</div>
- Then update grub configuration
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/website/techypoint.github.io$ sudo update-grub
Sourcing file `/etc/default/grub'
Sourcing file `/etc/default/grub.d/init-select.cfg'
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-5.3.0-64-generic
Found initrd image: /boot/initrd.img-5.3.0-64-generic
Found linux image: /boot/vmlinuz-5.3.0-62-generic
Found initrd image: /boot/initrd.img-5.3.0-62-generic
Adding boot menu entry for EFI firmware configuration
done
{% endraw %}{% endhighlight %}
- After update, restart your system for the chages to reflect.

## Union File System

UnionFS is a feature through which different files system files and directories can be combined to form a union.
You can learn more aboout this from [UnionFS wikipedia](https://en.wikipedia.org/wiki/UnionFS "UnionFS wikipedia") in detail.
It helps docker in managing by creating layer which makes it fast and lightweight.

Above are the features which are used by docker to create containers.


## Overview Of Runtime Containers

Docker uses containerd, runc
