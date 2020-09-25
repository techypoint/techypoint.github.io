---
title: "Docker Storage"
author: "Varun Bisht"
description: "Why docker provides storage options because in docker container, all files are created on container layer. It has many limitations which are listed below"
blogDesc: "Why docker provides storage options because in docker container, all files are created on container layer. It has many limitations which are listed below"
keywords: "docker volume vs bind mount,where are dockervolumes stored,docker volume create,docker volume command"
category: "docker"
permalink: "/docker/storage"
image: "/assets/img/docker/storage/docker-storage.png"
featureImage: "/assets/img/docker/storage/docker-storage.png"
---
Why docker provides storage options because in docker container, all files are created on container layer. It has many limitations which are listed below-
1. When you delete docker container, all data also gets deleted
2. You can not share data between containers.
3. Docker container layer is tightly coupled with the host system
4. Performance is also low as docker has to use **storage driver** to manage filesystem. The storage driver works on union filesystem which is an extra abstraction.

There are some ways to store files -
1. Volumes
2. Bind mount
3. tmpfs mount(availabe when running docker on linux)
4. Named pipe(availabe when running docker on windows)

<div class="imgCont">
  <img class="object-fit" alt="Types of Mount Volume" title="Types of Mount Volume(Source- docker website)" src="/assets/img/docker/storage/types-of-mounts-volume.png" />
</div>
From the above image, it is clear that data looks same from the container side but how data is stored in host file system is different. Lets discuss what are they and later in the tutorial, we will see how it works.

## 1. Volumes  
- It is stored in host filesystem. **Location - /var/lib/docker/volumes/**
- managed by docker
- other processes can not modify them
- volume supports use of volume drivers which allows to store data to remote hosts or cloud.
- an empty volume is created if volume specified by you does not exist
- exist even after the container is removed.

### Advantages
  - data can be shared among multiple containers.
  - can take backup and restore to another docker host container.

## 2. Bind Mount
- stored anywhere on host filesystem
- not managed by docker
- other processes can modify them
- using this allows to change or modify host filesystem from processes within the docker container. i.e there is a **security concern**.
- if file or directory doesnot exist, it will be created on demand
- cannot be manage by docker CLI commands

### Advantages
  - useful for sharing configuration files to container from host machine

## 3. tmpfs mount
- non-persistent data stored in host filesystem memory.
- mount is removed when container stops.

### Advantages
  - use when you dont want to persist data on docker host or in container.

## 4. Named Pipe
You can use it if your docker is running on windows. It can be used for communication between container and docker host.

## Operations On Volumes

### Create volume
sudo docker volume create volume-name
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker volume create vol1
vol1
{% endraw %}{% endhighlight %}
### List volume
sudo docker volume ls
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker volume ls
DRIVER              VOLUME NAME
local               vol1
{% endraw %}{% endhighlight %}
### Inspect volume
sudo docker volume inspect volume-name
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker volume inspect vol1
[
    {
        "CreatedAt": "2020-09-17T00:34:10+05:30",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/vol1/_data",
        "Name": "vol1",
        "Options": {},
        "Scope": "local"
    }
]
{% endraw %}{% endhighlight %}
### Remove volume
sudo docker volume rm volume-name
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker volume rm vol1
vol1
varun@varun-ThinkPad-L490:~$ sudo docker volume ls
DRIVER              VOLUME NAME
{% endraw %}{% endhighlight %}
### Remove all volumes
sudo docker volume prune
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker volume prune
WARNING! This will remove all local volumes not used by at least one container.
Are you sure you want to continue? [y/N] y
Deleted Volumes:
vol1
Total reclaimed space: 5.437MB
{% endraw %}{% endhighlight %}
You are able to perform various operation on volumes. Now mount it to containers.

## Use Volumes
Previously, -v and --volume flags used to mount volume to the container. But from Docker version 17.06, we can use --mount option.

**Difference bewtween -v flag and --mount**
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-jdum{background-color:#9698ed;border-color:inherit;font-size:16px;text-align:left;vertical-align:top}
.tg .tg-zumz{background-color:#ffffc7;border-color:inherit;text-align:left;vertical-align:middle}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-jdum"><span style="font-weight:bold">-v or --volume</span></th>
    <th class="tg-jdum"><span style="font-weight:bold">--mount</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-zumz">creates directory if it doesnot exist</td>
    <td class="tg-zumz">generates error if directory doesnot exist</td>
  </tr>
  <tr>
    <td class="tg-zumz">used for standalone containers</td>
    <td class="tg-zumz">can be used for standalone containers and also in swarm services.</td>
  </tr>
</tbody>
</table>
**command to use volumes**- sudo docker run -d --name nginx-cont --mount type=volume,source=vol1,target=/var nginx

here --mount consist of key-value pairs
- **type** - type of mount. Eg-volume, bind or tmpfs
- **source** - source of the mount
- **destination or target** - path in the container
- **readonly option**
- **volume options**

lets mount a volume in nginx container
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker run -d --name nginx-cont --mount source=vol1,target=/var nginx
[sudo] password for varun:
723969250fe5b28a82e46765426aa2d7db0deeda29cc16916fe63f0b6cb26fc8
{% endraw %}{% endhighlight %}
Here, we have mounted volume to the container. It will create **vol1** volume if it doesnot exist and /var is the directory path in the container.

You can check mount used by the container by inspecting container-
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker inspect nginx-cont
"Mounts": [
            {
                "Type": "volume",
                "Name": "vol1",
                "Source": "/var/lib/docker/volumes/vol1/_data",
                "Destination": "/var",
                "Driver": "local",
                "Mode": "z",
                "RW": true,
                "Propagation": ""
            }
        ]
{% endraw %}{% endhighlight %}
You can see **Mounts** key which gives all the information.

## Use Bind Mounts
In the similar manner, you can use bind mounts. I will show with an example below-
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker run -d --name nginx-cont1 --mount type=bind,source=/home/varun/target,target=/app nginx
ffaf4797c31ab1f1748705f1238e909240718c52692702a2e95b74caa772a5a2
varun@varun-ThinkPad-L490:~$ sudo docker inspect nginx-cont1
"Mounts": [
            {
                "Type": "bind",
                "Source": "/home/varun/target",
                "Destination": "/app",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ]
{% endraw %}{% endhighlight %}

## Use tmpfs Mounts
In the similar manner, you can use tmpfs mounts. I will show with an example below-

sudo docker run -d --name nginx-cont --mount type=tmpfs,target=/app nginx

{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker run -d --name nginx-cont --mount type=tmpfs,target=/app nginx
3f5921e2cf207550077555389e95eecea3e4ae8199490cd03998c1dbe8911764
varun@varun-ThinkPad-L490:~$ sudo docker inspect nginx-cont
"Mounts": [
            {
                "Type": "tmpfs",
                "Source": "",
                "Destination": "/app",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ]
{% endraw %}{% endhighlight %}

You can also provide configuration options -
1. **tmpfs-size** - size in bytes. by default, it is unlimited
2. **tmpfs-mode** - file mode in octal

Example for above configuration-  
sudo docker run -d --name nginx-cont --mount type=tmpfs,target=/app,tmpfs-size=5000 nginx

### Further Study Material
1. [Docker Storage](https://docs.docker.com/storage "Docker Storage")

**In the next tutorial**, we will talk about the docker networking.
