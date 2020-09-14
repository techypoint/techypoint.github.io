---
title: "Docker Image Layering"
author: "Varun Bisht"
description: "Website basics terms and concepts-hosting, domain name, Git and SEO"
keywords: "web hosting,hosting meaning,domain name meaning,Git,SEO"
category: "docker"
permalink: "/docker/image-layers"
date: 2020-08-16 11:00:00 am
image: "/assets/img/docker/docker-image-layering.png"
featureImage: "/assets/img/docker/docker-image-layering.png"
---
In this tutorial, we are gonna discuss how Docker build and store image and how it is used by containers.

When docker builds images it stores it layer by layer so that it does not have to download it again and again.
Each layer in the image describes an instruction.

Let's understand it with an example -

Here is our Dockerfile used in this tutorial.
{% highlight html %}{% raw %}
1- FROM ubuntu
2- RUN apt-get update
3- RUN apt install nginx -y
4- COPY . /var/www/html/
5- CMD nginx -g 'daemon off;'
{% endraw %}{% endhighlight %}

Here, Each instruction creates a layer which are mentioned below.
1. **Layer 1** - Base ubuntu image used
2. **Layer 2** - updates on apt packages
3. **Layer 3** - install Nginx packages
4. **Layer 4** - copy source code
5. **Layer 5** - Update Command to run Nginx

Below is the diagram which helps you in visualize tha layers.

<div class="imgCont">
  <img class="object-fit" alt="Disqus Homepage" title="Disqus Homepage" src="/assets/img/docker/image-layer.png" />
</div>

It stores this instruction layer by layer. Now when you do changes in any layer only that layer is rebuilt.

Let's change the command in the fifth layer and rebuild the image.

Changed Dockerfile content-

{% highlight html %}{% raw %}
# - is used to comment in Dockerfile
# Start from the base image and we used ubuntu
FROM ubuntu
RUN apt-get update
# install nginx
RUN apt install nginx -y
# copy files from current directory to /var/www/html
COPY . /var/www/html/
# command to start nginx in foreground
CMD service nginx start
{% endraw %}{% endhighlight %}

**Build image-** sudo docker build -t my-app:v1 .

{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker build -t my-app:v1 .
Sending build context to Docker daemon  3.072kB
Step 1/5 : FROM ubuntu
 ---> 1e4467b07108
Step 2/5 : RUN apt-get update
 ---> Using cache
 ---> 1bed2bd2e8b0
Step 3/5 : RUN apt install nginx -y
 ---> Using cache
 ---> f13187bdb8b4
Step 4/5 : COPY . /var/www/html/
 ---> f83a61400823
Step 5/5 : CMD service nginx start
 ---> Running in fb7a70e0f06a
Removing intermediate container fb7a70e0f06a
 ---> d093e57d3ec9
Successfully built d093e57d3ec9
Successfully tagged my-app:v1
{% endraw %}{% endhighlight %}

you can see that Steps-1 to 3 are using cache i.e it is using previous layer cache and only rebuild step 4 and 5.
It rebuild step 4 because it copies all the content including Dockerfile which we have changed.

All these layer are read only so you are wondering **how containers works.**

So lets discuss what happen when you create a container.

When you create a container, docker deamon create a **Read-Write** layer on the top of image and make it available to the container.
Any changes made to the container will gets save in this layer. This layer is also known as **Container Layer**.
Below diagram shows when you create more than one container of an image.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Homepage" title="Disqus Homepage" src="/assets/img/docker/container-layer.png" />
</div>

When you remove the container, all the changes made will gets removed and there is no change in image.

You must be wondering how is it possible?
Why there is no change in image layer if a file which exists in image layer is modified by the container ?

**Explanation**-

**Case 1-** When higher layer or container wants to use file in lower layer for reading, it just uses the existing file.

**Case 2-** When higher layer or container wants to modify the file in lower layer. The file first gets copied to that layer and then modified. This concept is known as **copy-on-write**.


The contents of the images layer and container layer is managed by **storage drivers**. Each storage driver manages differently.
Storage drivers supported by docker are-
1. overlay2 or overlay
2. aufs
3. devicemapper
4. btrfs
5. zfs
6. vfs

You can learn about these storage drivers from - [Storage Driver](https://docs.docker.com/storage/storagedriver/select-storage-driver "Storage Driver")
