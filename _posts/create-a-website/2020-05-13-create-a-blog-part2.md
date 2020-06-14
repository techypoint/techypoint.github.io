---
title: "Design Home Page "
author: "Varun Bisht"
description: "Design cool Home Page for the webiste."
keywords: ""
category: "create a webiste"
permalink: "/create-a-webiste/create-a-blog-part2"
image: "/assets/img/create-a-webiste/create-a-blog/"
---
# CREATE A BLOG FOR YOUR WEBSITE - PART 2

**PREREQUISITE**
1. CREATE A BLOG FOR YOUR WEBSITE - PART 1
In PART 1 - we have created basic wesbite Using Jekyll. Before Going further, you need to read PART 1.
So link for PART 1 is - CREATE A BLOG FOR YOUR WEBSITE - PART 1 link

In this part i.e PART 2, we are going to create Blog Posts for our webiste.

So lets start

In the project, there is a _posts folder which will contains all the blog posts.
There is already a post create by Jekyll for your reference.

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
layout - post layout(default layout available in default theme by Jekyll).
title - Title of the Page
date - post created date
categories - defines post category

Theses key value pairs between triple-dashed lines are called Front Matters.
There are many default Front Matter provided by Jekyll which you can use.Front Matter Link -

What we need to create a non veg category recipe blog post
1. We will create a custom layout named post.md just like home.md in _layouts folder.
2. Rename file from 2020-06-12-welcome-to-jekyll.markdown to 2020-06-12-butterChicken.markdown
File Name should be in this formate only - YYYY-MM-DD-name-here.md
3. We need to provide URL to the post using permalink front matter.
4. Then We will modify other Front Matters for our post like title, date and categories.
5. Write Blog post

### So lets start -
1. create post.md in _layouts folder and lets create a layout which has navigation and footer and in between your blog content.
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

{{content}} - will copy the content of the file in which you will use this layout.
So blog post data gets replaced by Jekyll.

2. Rename file to 2020-06-12-butterChicken.markdown.
3. In the post, we added permalink Front Matter to specify the URL of the blog post
4. We changed other Front Matters in the post to -
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

author and blogImg are Custom Front Matters and we will use them in next tutorial.

5. write blog - this need to be done by you
You can use markdown language to write heading, inserting images and links.Its very simple.
For Eg- To write heading, you can use -
# Butter Chicken Recipe

Noy you can access this post at http://localhost:4000/non-veg/butterChicken

Now save or push changes to Github Account.
file:///home/varun/my-pro-projects/website/techypoint.github.io/assets/img/create-a-website/create-a-blog-part2/save_post.png

In part 2, we successfully able to create a blog post.

Further Study Material
1. For Jekyll Installation- https://jekyllrb.com/docs/installation/
2. For Jekyll- https://www.youtube.com/watch?v=T1itpPvFWHI&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB
3. For Front Matter- https://jekyllrb.com/docs/front-matter
4. For Markdown- https://www.markdownguide.org/basic-syntax/


In Part 3, we will create a page to show the blog posts.
