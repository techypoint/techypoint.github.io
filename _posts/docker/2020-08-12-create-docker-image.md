---
title: "DockerFile"
author: "Varun Bisht"
description: ""
keywords: ""
category: "docker"
permalink: "/docker/create-docker-image"
date: 2020-08-15 11:00:00 am
image: "/assets/img/docker/docker-file.png"
featureImage: "/assets/img/docker/docker-file.png"
---
In the previous tutorials, we are using images like ubuntu from the docker hub official library.
There are also many images on docker hub like mysql, jenkins, centos, elastic etc which you can use. But sometimes you need to create your own image for packaging your application so that you can easily distibute to others.

You can create your own image by creating a file named **Dockerfile**.

**Dockerfile** is a text file which contains set of instructions with arguments on how to build image.
For Eg-

Dockerfile contains
{% highlight html %}{% raw %}
FROM ubuntu
RUN apt-get update
{% endraw %}{% endhighlight %}
Here, **FROM** and **RUN** are instructions.

**ubuntu** and **apt-get update** are arguments.

So lets create an image of an application. But Before building image lets understand the application.

**APPLICATION EXPLANATION -** Our application installs nginx and runs it.

Below are the steps to build our application-
- install nginx
- create index.html at /var/www/html
- write text-'Hey, I am your application' in index.html
- run nginx service

Test Nginx server by opening docker container ip. Now this is a simple application so lets dockerize it.

Lets Dockerize application-

- We have created index.html file already.
- Dockerfile content -
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
CMD nginx -g 'daemon off;'
{% endraw %}{% endhighlight %}
Now we successfully created Dockerfile. Here in docker file we just instructed how to build image(our application image).
You can learn in detail of Dockerfile from [DockerFile Reference](https://docs.docker.com/engine/reference/builder "DockerFile Reference")

- run this command on the directory where your Dockerfile lies.

   **command-** sudo docker build -t image_name:tag_name dir

   For Eg-
   1. without tag- sudo docker build -t my-app .
   2. with tag- sudo docker build -t my-app:v1 .

{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker build -t my-app .
Sending build context to Docker daemon  3.072kB
Step 1/6 : FROM ubuntu
 ---> 1e4467b07108
Step 2/6 : RUN apt-get update
 ---> Running in 03e7d7b8a8e6
Get:1 http://archive.ubuntu.com/ubuntu focal InRelease [265 kB]
Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [107 kB]
Get:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease [111 kB]
Get:4 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [64.9 kB]
Reading package lists...
Removing intermediate container 03e7d7b8a8e6
 ---> 1bed2bd2e8b0
Step 3/6 : RUN apt install nginx -y
 ---> Running in b2d1eb9ed8b9
WARNING: apt does not have a stable CLI interface. Use with caution in scripts.
Reading package lists...
Building dependency tree...
Reading state information...
The following additional packages will be installed:
setting up nginx (1.18.0-0ubuntu1) ...
Processing triggers for libc-bin (2.31-0ubuntu9) ...
Removing intermediate container b2d1eb9ed8b9
 ---> f13187bdb8b4
Step 4/6 : COPY . /var/www/html/
 ---> cc36cb387461
Step 5/6 : WORKDIR /var/www/html/
 ---> Running in 68e01fa1e859
Removing intermediate container 68e01fa1e859
 ---> f76b023f07ea
Step 6/6 : CMD nginx -g 'daemon off;'
 ---> Running in 07648d6427ba
Removing intermediate container 07648d6427ba
 ---> 47dd272b02dd
Successfully built 47dd272b02dd
Successfully tagged my-app:latest
{% endraw %}{% endhighlight %}

You can easily see from above output that docker runs instructions of your Dockerfile one by one.
This one by one execution forms the layers which we will dicsuss in further tutorials.

Now you can see the image created by you-
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
my-app              latest              47dd272b02dd        About an hour ago   156MB
nginx               latest              4bb46517cac3        8 days ago          133MB
ubuntu              latest              1e4467b07108        4 weeks ago         73.9MB
hello-world         latest              bf756fb1ae65        7 months ago        13.3kB
{% endraw %}{% endhighlight %}

You are successfully able to create custom image and you can run this image's container by **sudo docker run my-app**.
