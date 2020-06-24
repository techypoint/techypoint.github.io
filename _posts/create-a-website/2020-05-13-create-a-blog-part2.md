---
title: "Create a Blog Part 2"
author: "Varun Bisht"
description: "Create a blog- creating post using Jekyll"
keywords: "jekyll post,create a blog google,how to create a blog for free,free blog,how to start a blog"
category: "create a website"
permalink: "/create-a-website/create-a-blog-part2"
image: "/assets/img/create-a-website/create-a-blog-part2/blog.jpg"
featureImage: "/assets/img/create-a-website/create-a-blog-part2/blog.jpg"
imgText: "Photo by Miguel Á. Padriñán from Pexels"
---
# CREATE A BLOG FOR YOUR WEBSITE - PART 2

## PREREQUISITE

1. CREATE A BLOG FOR YOUR WEBSITE - PART 1

   In PART 1 - we have created basic website using Jekyll. Before Going further, you need to read [PART 1]({% post_url create-a-website/2020-05-12-create-a-blog-part1 %})

In this part i.e PART 2, we are going to create Blog Posts for our website.

### So lets start -

In the project, there is a _posts folder which will contains all the blog posts.
There is already a post created by Jekyll for your reference.

Lets understand the basics of Blog Post

Open file, you will see something like this -
{% highlight html %}{% raw %}
---
layout: post
title:  "Welcome to Jekyll!"
date:   2020-06-12 23:26:47 +0530
categories: jekyll update
---
{% endraw %}{% endhighlight %}

Here, this blog post is using
- layout- post layout(layout available in default theme by Jekyll).
- title- Title of the Page
- date- post date
- categories- defines post category

Theses key value pairs between triple-dashed lines are called **Front Matters**.

There are many default Front Matter provided by Jekyll which you can use. Link is available in Further Study Material

What we need to create a non veg category recipe blog post
- We will create a custom layout named post.md just like home.md in _layouts folder.
- Rename file from 2020-06-12-welcome-to-jekyll.markdown to 2020-06-12-butterChicken.markdown
   - File Name should be in this format only - YYYY-MM-DD-name-here.md
- We need to provide URL to the post using permalink front matter.
- Then We will modify other Front Matters for our post like title, date and categories.
- Write blog post

### So lets start -
- create post.md in _layouts folder and lets create a layout which has navigation and footer and in between your blog content.
{% highlight html %}{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="/assets/css/blog_style.css" rel="stylesheet">
</head>
<body>
<!-- Navigation -->
{% include navigation.md %}
<!-- Navigation -->
<!-- blog content -->
<div class="container-fluid" id="mainContainer">
  <div class="row">
            <div id="left" class="col-xs-1 col-sm-1 col-md-2 col-lg-2 col-xl-2">
            </div>
<div id="center" class="col-xs-12 col-sm-9 col-md-8 col-lg-8 col-xl-8">
  <div id=post-cont>
  {{ content }}
  </div>
</div>
<div id="right" class="col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2">
</div>
</div>
</div>  
<!-- blog content -->
<!-- footer -->
{% include footer.md %}
<!-- footer -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="/assets/js/script.js"></script>
</body>
</html>
{% endraw %}{% endhighlight %}

Here, we will create a different css file - blog_style.css same as style.css but few changes for our blog design.

Changes -  Removed below css

{% highlight html %}{% raw %}
#mainNav {
    box-shadow: none;
    background-color: transparent;
  }
{% endraw %}{% endhighlight %}

and added

{% highlight html %}{% raw %}
#mainContainer{
  margin-bottom: 25px;
  margin-top: 100px;
}

#mainContainer img{
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  margin-bottom: 10px;
}
#mainContainer div#center #post-cont p{
  line-height: 32px;
  margin-top: 1em;
  font-size: 21px;
  letter-spacing: -.003em;
  margin-bottom: -.46em;
  font-family: medium-content-serif-font,Georgia,Cambria,times new roman,Times,serif;
}
#mainContainer div#center #post-cont h1,h2,h3 {
  margin-top: 1.95em!important;
  font-weight: 600!important;
}
#mainContainer div#center #post-cont li {
    line-height: 32px;
    font-size: 21px;
    letter-spacing: -.003em;
    font-family: medium-content-serif-font,Georgia,Cambria,times new roman,Times,serif;
}
{% endraw %}{% endhighlight %}

{% highlight html %}{% raw %}{{content}}{% endraw %}{% endhighlight %}
will copy the content of the file in which you will use this layout. So blog post data gets replaced by Jekyll.

- Rename file to 2020-06-12-butterChicken.markdown.
- In the post, we added permalink Front Matter to specify the URL of the blog post
- We changed other Front Matters in the post to -
{% highlight html %}{% raw %}
---
layout: post
title:  "Butter Chicken Recipe"
description: "Butter Chicken Recipe For Non veg Lovers"
author: Varun Bisht
date:   2020-06-12 23:26:47 +0530
categories: non-veg
permalink: "/non-veg/butterChicken"
blogImg: "/assets/img/non-veg/butterChicken.jpg"
---
{% endraw %}{% endhighlight %}
   - author and blogImg are Custom Front Matters and we will use them in next tutorial.

- write blog - this need to be done by you
You can use markdown language to write heading, inserting images and links. Its very simple.
For Eg- To write heading, you can use- # Butter Chicken Recipe

Noy you can access this post at [http://localhost:4000/non-veg/butterChicken](http://localhost:4000/non-veg/butterChicken "http://localhost:4000/non-veg/butterChicken")

Now save or push changes to Github Account.
<div class="imgCont">
  <img alt="Save Post" title="Save Post" src="/assets/img/create-a-website/create-a-blog-part2/save_post.png" />
</div>

You can delete old files which we created in PART 1, I am renaming to filename_old so that these files are available to you for reference.

In part 2, we are successfully able to create a blog post.

<a href="https://github.com/vbisht7038/vbisht7038.github.io.git">Click to get the full Implementation of this tutorial on Github</a>

### Further Study Material

1. For Jekyll - [Jekyll Youtube Playlist](https://www.youtube.com/watch?v=T1itpPvFWHI&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB "Jekyll Youtube Playlist")
2. [For Front Matter](https://jekyllrb.com/docs/front-matter "For Front Matter")
3. [For Markdown](https://www.markdownguide.org/basic-syntax "For Markdown")


**In Part 3**, we will create a page to show the blog posts.
