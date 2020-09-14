---
title: "Docker Hub"
author: "Varun Bisht"
description: "Website basics terms and concepts-hosting, domain name, Git and SEO"
keywords: "web hosting,hosting meaning,domain name meaning,Git,SEO"
category: "docker"
permalink: "/docker/repositories"
date: 2020-08-17 11:00:00 am
image: "/assets/img/docker/docker-hub.png"
featureImage: "/assets/img/docker/docker-hub.png"
---
Docker Hub is a place where you can store your images and make available to others. It is same as Github where you store and share your code with others.

We will teach you how you can push image created in the previous tutorial.

### What we will do-
1. Login to Docker Hub and Create repository
2. Tag local image
3. push image to Docker Hub
4. Pull image from docker hub


### 1. Login to Docker Hub and Create repository

- After Login, Click on the Create a Repository
<div class="imgCont">
  <img class="object-fit" alt="Disqus Homepage" title="Disqus Homepage" src="/assets/img/docker/create-docker-repository.png" />
</div>
- Enter name, description and set visibility to public and then create button.
<div class="imgCont">
  <img class="object-fit" alt="Disqus Homepage" title="Disqus Homepage" src="/assets/img/docker/docker-repository-setup.png" />
</div>

You have successfully created repository.

### 2. Tag local image

Now we need to tag our image which we created in the previous tutorial.
Two ways to tag image
- When you are building image

   **command-** sudo docker build -t hub-user/repo-name:tag

   For Eg- sudo docker build -t techylane/my-app:v1 .
- Tagging an existing image

   **command-** sudo docker tag existing-image-nane hub-user/repo-name:tag

   For Eg- sudo docker tag my-app techylane/my-app:v1
{% highlight html %}{% raw %}
   varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker tag my-app techylane/my-app:v1
   varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker images
   REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
   my-app              latest              47dd272b02dd        29 hours ago        156MB
   techylane/my-app    v1                  47dd272b02dd        29 hours ago        156MB
   nginx               latest              4bb46517cac3        9 days ago          133MB
   ubuntu              latest              1e4467b07108        4 weeks ago         73.9MB
   hello-world         latest              bf756fb1ae65        7 months ago        13.3kB
{% endraw %}{% endhighlight %}
After tagging is done, you are ready to push the image to the docker hub.

### 3. Push image to Docker Hub

- Before pushing image to the docker hub, you need to login on dockerCLI using - sudo docker login.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username: techylane
Password:
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
{% endraw %}{% endhighlight %}
- After login, you can push docker image

   **command-** sudo docker push hub-user/repo-name:tag
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker push techylane/my-app:v1
The push refers to repository [docker.io/techylane/my-app]
fa9196bd5db6: Pushed
81bd7f4cad14: Pushed
112a38f745a2: Pushed
095624243293: Mounted from library/ubuntu
a37e74863e72: Mounted from library/ubuntu
8eeb4a14bcb4: Mounted from library/ubuntu
ce3011290956: Mounted from library/ubuntu
v1: digest: sha256:fdec24129d520340021ec981be3e92027f74c974e84763a0cb5aaf26f3ea126f size: 1783
{% endraw %}{% endhighlight %}
Now you are successfully able to push the image to docker hub.

You can check image on docker hub
<div class="imgCont">
  <img class="object-fit" alt="Disqus Homepage" title="Disqus Homepage" src="/assets/img/docker/docker-hub-images.png" />
</div>

### 4. Pull image from docker hub
- remove image from your local
- Pull image from docker Hub

   **command-** sudo docker pull techylane/my-app:v1
   {% highlight html %}{% raw %}
   varun@varun-ThinkPad-L490:~/my-pro-projects/docker-tutorial-data$ sudo docker pull techylane/my-app:v1
   v1: Pulling from techylane/my-app
   3ff22d22a855: Already exists
   e7cb79d19722: Already exists
   323d0d660b6a: Already exists
   b7f616834fd0: Already exists
   4d04a1aff65a: Pull complete
   55ae92a57e2d: Pull complete
   9d1989ef84df: Pull complete
   Digest: sha256:fdec24129d520340021ec981be3e92027f74c974e84763a0cb5aaf26f3ea126f
   Status: Downloaded newer image for techylane/my-app:v1
   docker.io/techylane/my-app:v1
{% endraw %}{% endhighlight %}
You are successfully able to pull image from docker hub.
