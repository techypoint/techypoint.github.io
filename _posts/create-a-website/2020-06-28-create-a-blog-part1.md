---
title: "Create a Blog Part 1"
author: "Varun Bisht"
description: "Create a blog Part 1- Jekyll and Github"
blogDesc: "We first create a new Jekyll project and then move all the things we have build till now to this project."
keywords: "jekyll github,jekyll new blog,install jekyll,blog github markdown,building a blog with jekyll"
category: "create a website"
permalink: "/create-a-website/create-a-blog-part1"
date: 2020-06-28 18:00:00 pm
trending: true
image: "/assets/img/create-a-website/create-a-blog-part1/blog.jpg"
featureImage: "/assets/img/create-a-website/create-a-blog-part1/blog.jpg"
imgText: "Photo by Miguel Á. Padriñán from Pexels"
---
# CREATE A BLOG FOR YOUR WEBSITE - PART 1

Till now, we have created a website(hompage + about us + contact us).

But some of you are looking to integrate blogging or to start blogging. So this tutorial is for those who wants to create a blog website.

I have divided this blog into three parts -
- PART 1 - We first create a new Jekyll project and then move all the things we have build till now to this project.
- PART 2 - We will create blog posts for our website.
- PART 3 - Show all the blog post on the page so that users can navigate.

**Note**- If you are just looking for website not blogs. Then you can skip this tutorial for now and continue with further tutorials.
But Jekyll knowledge is required for further tutorials.

## PREREQUISITE

### 1. Jekyll

Jekyll is a static site generator that transforms your plain text into websites and blogs. It is build on Ruby language.

We will be using Jekyll which is compatible with github and easy to learn.
Jekyll also has free plugins which later simplifies and fast your development.
Trust me, its very easy.

You can use any other tool which is suitable to you but we are going to use Jekyll in further tutorials for development (as it makes development easy and fast).

So before going further, Jekyll knowledge is required.

**Recommendation** - Please watch Jekyll tutorials as it is necessary for futher tutorials.
I have provided some Jekyll video tutorials in **Further Study Material**.

### So lets start -

## Install Jekyll on Ubuntu
1. Run this command on terminal-
   - sudo apt-get install ruby-full build-essential zlib1g-dev
   - gem install jekyll bundler
3. Check jekyll is installed or not
   - jekyll -v

<div class="imgCont">
  <img alt="Jekyll New Project" title="Jekyll New Project" src="/assets/img/create-a-website/create-a-blog-part1/install_jekyll.png"/>
</div>
Link is provided for installation on other systems in **Further Study Material**.

After Installing Ruby and Jekyll, now creates a Jekyll project.

## Create a Jekyll project
- Step 1 - Go to the directory where you want to create project.
- Step 2 - Create new Jekyll project - jekyll new vbisht7038.github.io
<div class="imgCont">
  <img alt="Jekyll New Project" title="Jekyll New Project" src="/assets/img/create-a-website/create-a-blog-part1/jekyll-new-project.png"/>
</div>
- Step 3 - cd vbisht7038.github.io
- Step 4 - To access your website, run command- bundle exec jekyll serve
<div class="imgCont">
  <img alt="Jekyll Serve Command" title="Jekyll Serve Command" src="/assets/img/create-a-website/create-a-blog-part1/jekyll_serve_command.png"/>
</div>
- Step 5 - Open [http://localhost:4000](http://localhost:4000 "http://localhost:4000") url on browser, you will see a dummy website.
<div class="imgCont">
  <img alt="Jekyll Demo Page" title="Jekyll Demo Page" src="/assets/img/create-a-website/create-a-blog-part1/jekyll_demo_page.png"/>
</div>

Now you have successfully created Jekyll project and able to access it on website.

### MOVE EXISTING PROJECT TO JEKYLL

We will create seaparate html file for navigation, contact us, footer and we will include them in main index file.
We are creating separate file for them so that they can be easily integrate in other pages. For Eg- blog posts

Project structure we are going to create-

<div class="imgCont">
  <img alt="Jekyll Project Structure" title="Jekyll Project Structure" src="/assets/img/create-a-website/create-a-blog-part1/jekyll_project_structure.png"/>
</div>

- Create _layouts folder in the base directory.
   - All the page template files are kept here.
- Create home.md (.md is for markdown files)
   - .md files gets convert to .html file by Jekyll.
   - you can see that index.markdown is using home layout.
- Copy your index file content into home.md file.
- Create _includes folder in the base directory.
   - All files which needs to be included or embeded in other pages will place here.
- Create contact.md then cut and paste contact us HTML code from home.md to contact.md and include that file in home.md
{% highlight html %}{% raw %}
{% include contact.md %}
{% endraw %}{% endhighlight %}
Create footer.md and cut and paste footer HTML code and then include  
{% highlight html %}{% raw %}
{% include footer.md %}
{% endraw %}{% endhighlight %}
Create navigation.md and cut and paster navigation HTML code and then include  
{% highlight html %}{% raw %}
{% include navigation.md %}
{% endraw %}{% endhighlight %}
- Now create assets folder - all static files will be kept here
- then copy img, css and js folder inside assets folder.
- change image,css and js path in .md files
   - from to src=”img/logo_red.png to
   {% highlight html %}{% raw %}
   src="{{ "/assets/img/logo.jpg" | prepend: site.url}}
   {% endraw %}{% endhighlight %}
   - from href="css/ to href="/assets/css/
   - from src="js/ to src="/assets/js/
   - from href="#aboutus" to href="/#aboutus"
   - from href="#" to href="/#"
- modify **url: "https://vbisht7038.github.io"** in _config.yml file.
- Go to the browser and refresh URL - localhost:4000

Now you have just recreated your website in Jekyll project.

### PUSH WEBSITE TO GITHUB

For git commands, Take a look at our [Git Use Tutorial]({% post_url create-a-website/2020-06-28-git-use %})

1. Create this directory as Git directory.
2. Then add git repository url which you previously created.
3. Take all the changes from Github Account.
4. Now Push all the changes to the Github Account.
<div class="imgCont">
  <img alt="Recreate Website Push" title="Recreate Website Push" src="/assets/img/create-a-website/create-a-blog-part1/recreate_website_push.png"/>
</div>

You can check website and it needs to be work perfectly.

In Part 1, we are successfully able to recreate our website using Jekyll.

<a href="https://github.com/vbisht7038/vbisht7038.github.io.git">Click to get the full Implementation of this tutorial on Github</a>

### Further Study Material
1. [For Jekyll Installation](https://jekyllrb.com/docs/installation "For Jekyll Installation")
2. For Jekyll - [Jekyll Youtube Playlist](https://www.youtube.com/watch?v=T1itpPvFWHI&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB "Jekyll Youtube Playlist")
3. [Jekyll directory structure](https://jekyllrb.com/docs/structure/ "Jekyll directory structure")

**In Part 2**, we are going to create Blog Posts using Jekyll.
