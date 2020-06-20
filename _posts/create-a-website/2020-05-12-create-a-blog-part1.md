---
title: "Design Home Page "
author: "Varun Bisht"
description: "Design cool Home Page for the webiste."
keywords: ""
category: "create a webiste"
permalink: "/create-a-webiste/create-a-blog-part1"
image: "/assets/img/create-a-webiste/create-a-blog/"
---
# CREATE A BLOG FOR YOUR WEBSITE - PART 1

Till now, we have created a website(hompage + about us + contact us).
But some of you are looking to Integrate blogging or to start blogging.
So this tutorial is for those who wants to create a blog website.
I have divided this blog into three parts -
PART 1 - We first create a new Jekyll project and then move all the things we have build till now to this project.
PART 2 - We will create blog posts for your webiste.
PART 3 - Show all the blog post on the page so that people can search it.

Note- If you are just looking for website not blogs. Then you can skip this tutorial for now and continue with further tutorials.
But Jekyll knowledge is required for further tutorials.

**PREREQUISITE**

1. Jekyll

Jekyll is a static site generator that transforms your plain text into websites and blogs.It is build on Ruby language.

We will be using Jekyll which is compatible with github and easy to learn.
Jekyll also has free plugins which later simplifies and fast your development.
Trust me, its very easy.

You can use any other tool which is suitable to you but we are going to use Jekyll in further tutorial for development (as it makes development easy and fast).

So before going further, Jekyll knowledge is required.
Recommendation - Please watch Jekyll tutorials as it is necessary for futher tutorials.
I have provided some Jekyll Video tutorials in Further Study Material.

So lets start

## Install Jekyll on Ubuntu
1. run this command on terminal- sudo apt-get install ruby-full build-essential zlib1g-dev
2. gem install jekyll bundler
3. check jekyll is installed or not - jekyll -v

Link is provided for installation on other systems.

After Installing Ruby and Jekyll, now creates a Jekyll project.

## Create a Jekyll project
1. Go to the directory where you want to create project.
2. create new Jekyll project - jekyll new vbisht7038.github.io
<div class="imgCont">
  <img alt="Jekyll New Project" title="Jekyll New Project" src="/assets/img/create-a-website/create-a-blog-part1/jekyll-new-project.png"/>
</div>
3. cd vbisht7038.github.io
4. To access your website, run command- bundle exec jekyll serve
<div class="imgCont">
  <img alt="Jekyll Serve Command" title="Jekyll Serve Command" src="/assets/img/create-a-website/create-a-blog-part1/jekyll_serve_command.png"/>
</div>
5. Open localhost:4000 url on browser, you will see a dummy website.
<div class="imgCont">
  <img alt="Jekyll Demo Page" title="Jekyll Demo Page" src="/assets/img/create-a-website/create-a-blog-part1/jekyll_demo_page.png"/>
</div>

Now you have successfully created Jekyll project and able to access it on website.

### MOVE EXISTING PROJECT TO JEKYLL

we will create seaparate html file for navigation, contact us, footer and we will include them in main index file.
We are creating seaparte file for them so that they can be easily Integrate in other pages.For Eg - Blog posts
Project structure we are going to crate-

1. Copy _layouts folder in the base directory.
All the page template files are kept here.
2. create home.md (.md is for markdown files)
.md files get convertes to .html file by Jekyll.
You can see that Index.markdown is using home layout.
3. copy your index file content into home.md file.
4. create _includes folder in the base directory.
All files which needs to be included or embeded in other pages will place here.
5. create contact.md then cut and paste contact us HTML code from home.md to contact.md
and include that file in home.md by - {% highlight html %}{% raw %}{% include contact.md %}{% endraw %}{% endhighlight %}
6. In the similar mannner,
create footer.md and cut and paster footer HTML and then include  {% highlight html %}{% raw %}{% include footer.md %}{% endraw %}{% endhighlight %}
create navigation.md and cut and paster navigation HTML and then include  {% highlight html %}{% raw %}{% include navigation.md %}{% endraw %}{% endhighlight %}
7. Now create assets folder - all static files will be kept here
8. then copy img, css and js folder inside assets folder.
9. change image,css and js path in .md files
from img/ to src="{{ "/assets/img/logo.jpg" | prepend: site.url}}"
from css/ to /assets/css/
from js/ to /assets/js/
from href="#aboutus" to href="/#aboutus"
from href="#" to href="/#"
10. Go to the browser and refresh URL - localhost:4000
Now you jave recreated yout website in Jekyll project.

PUSH WEBSITE TO GITHUB

For git commands, Take a look at our Git Use Tutorial.

1. create this directory as git directory.
2. Then add git repository url which you previously created.
3. Take all the changes from Github Account.
4. Now Push all the changes to the Github Account.
<div class="imgCont">
  <img alt="Recreate Website Push" title="Recreate Website Push" src="/assets/img/create-a-website/create-a-blog-part1/recreate_website_push.png"/>
</div>

You can check your website and it needs to be working perfectly.

In Part 1, we are successfully able to recreate our website using Jekyll.

Further Study Material
1. For Jekyll Installation- https://jekyllrb.com/docs/installation/
2. For Jekyll - https://www.youtube.com/watch?v=T1itpPvFWHI&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB
3. Jekyll directory structure- https://jekyllrb.com/docs/structure/

In Part 2. we are going to crate Blog Posts using Jekyll.
