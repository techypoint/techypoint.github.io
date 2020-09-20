---
title: "Docker Image"
author: "Varun Bisht"
description: "Docker Image is a read only template using which docker container gets created. You can use docker images directly from docker hub or you can create custom images."
blogDesc: "Docker Image is a read only template using which docker container gets created. You can use docker images directly from docker hub or you can create custom images."
keywords: "run docker image,docker images list,docker images command,docker image tutorial"
category: "docker"
permalink: "/docker/images"
trending: true
image: "/assets/img/docker/images/docker-images.png"
featureImage: "/assets/img/docker/images/docker-images.png"
---
Docker Image is a read only template using which docker container gets created. You can use docker images directly from docker hub or you can create custom images. For Eg- you can use linux image and install your application on it with additional configurations.
An image is mostly depend on another image i.e **base image.**

You can create your custom image by creating **Docker File** which contains instructions to create the images.
Each instruction in docker file creates a layer. Whenever you recreate images after doing changes in docker file. Then only those layers which contain those changes gets rebuilt.

## Lets explore operations on image

### 1. To run docker image
**command-** sudo docker run hello-world
<div class="imgCont">
  <img class="object-fit" alt="Hello world Image" title="Hello world Image" src="/assets/img/docker/images/hello-world-image.png" />
</div>
After running this command, read the output of this. It explains what happened in background.

### 2. To list all images

**command-** sudo docker image ls
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
hello-world         latest              bf756fb1ae65        7 months ago        13.3kB
{% endraw %}{% endhighlight %}

There are 5 columns-
1. **REPOSITORY** - It is just like git repository. It can contain versions of the docker image.
Docker Hub is a registry that contains collections of docker repositories.
2. **TAG** - It represent the verison of the docker image. **latest** tag means the last build without a specific tag.
3. **IMAGE ID** - unique identifier of the image.
4. **CREATED** - time when image created.
5. **SIZE** - size of the image.

You can see the options in the command using man command. For Eg- sudo man docker images

### 3. To pull docker image

**command-** sudo docker pull imageName:tag

By default, docker pulls latest tag image.
For Eg-
   1. **Latest tag image-** sudo docker pull nginx
   2. **Image with specific tag-** sudo docker pull nginx:1.19.2
   3. **Image from different registry-** sudo docker pull yourregistry.local:5000/testimage
   4. **To download all version of the image-** sudo docker pull -a nginx

{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker pull nginx
[sudo] password for varun:
Using default tag: latest
latest: Pulling from library/nginx
bf5952930446: Pull complete
cb9a6de05e5a: Pull complete
9513ea0afb93: Pull complete
b49ea07d2e93: Pull complete
a5e4a503d449: Pull complete
Digest: sha256:b0ad43f7ee5edbc0effbc14645ae7055e21bc1973aee5150745632a24a752661
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
{% endraw %}{% endhighlight %}

You can see that it downloads image layer by layer. If you download different image which uses these layers then it will not download it again.

You can check it whether it gets downloaded or not -
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker image ls
[sudo] password for varun:
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              4bb46517cac3        2 days ago          133MB
hello-world         latest              bf756fb1ae65        7 months ago        13.3kB
varun@varun-ThinkPad-L490:~$
{% endraw %}{% endhighlight %}

### 4. To Remove docker image

**command-** sudo docker image rm image:tag

For Eg-
   1. **To remove image-** sudo docker image rm nginx
   2. **To remove image with specific tag-** sudo docker image rm nginx:1-alpine-perl
   3. **To remove all images-** sudo docker rm $(sudo docker images -a -q)
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker image rm nginx
[sudo] password for varun:
Untagged: nginx:latest
Untagged: nginx@sha256:b0ad43f7ee5edbc0effbc14645ae7055e21bc1973aee5150745632a24a752661
Deleted: sha256:4bb46517cac397bdb0bab6eba09b0e1f8e90ddd17cf99662997c3253531136f8
Deleted: sha256:80b21afd8140706d5fe3b7106ae6147e192e6490b402bf2dd2df5df6dac13db8
Deleted: sha256:0f04ae71e99f5ef9021b92f76bac3979e25c98d73a51d33ce76a78da6afa9f27
Deleted: sha256:9a14852344d88a1fdf8297914729834521ec1c77a27e7e7e394f9c1ef9b87f9d
Deleted: sha256:74299126f8099031c5bbd4774147f4
{% endraw %}{% endhighlight %}

### 5. To inspect docker image
**command-** sudo docker inspect image:tag

This command returns the detailed information of the image.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/website/techypoint.github.io$ sudo docker inspect nginx:1.10.0-alpine
[
    {
        "Id": "sha256:8328c23656724eddbc62d20f95bb8dec8f67860127dc1e7884faeb853b5fa82f",
        "RepoTags": [
            "nginx:1.10.0-alpine"
        ],
        "RepoDigests": [
            "nginx@sha256:5b99c2a3ec2b3273a7f77b661941a94e6fa2aa38e5a94c1d90e0924eceefb1e6"
        ],
        "Parent": "",
        "Comment": "",
        "Created": "2016-05-06T15:33:28.663128081Z",
        "Container": "9acb2ce77f87021b30a068eaffb563054e466ca47ea8d832192ac43f55e63543",
        "ContainerConfig": {
            "Hostname": "27c9668b3d5e",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "443/tcp": {},
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.10.0",
                "GPG_KEYS=B0F4253373F8F6F510D42178520A9993A1C052F8",
                "CONFIG=\t--prefix=/etc/nginx \t--sbin-path=/usr/sbin/nginx \t--modules-path=/usr/lib/nginx/modules \t--conf-path=/etc/nginx/nginx.conf \t--error-log-p
{% endraw %}{% endhighlight %}

### Further Study Material
1. [Docker Image Commands](https://docs.docker.com/engine/reference/commandline/image "Docker Image Commands")

**In the next tutorial**, we will talk about the docker containers.
