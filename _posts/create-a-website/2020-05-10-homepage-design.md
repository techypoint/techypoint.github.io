---
title: "Design Home Page"
author: "Varun Bisht"
description: "Design cool Home Page for the website."
keywords: "html web page design examples,html code for website design,how to create a webpage using html and css,website layout examples"
category: "create a website"
date: 2020-05-10 07:00:00
permalink: "/create-a-website/homepage-design"
published: false
image: "/assets/img/create-a-website/homepage-design/design.jpg"
featureImage: "/assets/img/create-a-website/homepage-design/design.jpg"
imgText: "Photo by Edho Pratama on Unsplash"
---
# HomePage Design

In this tutorial, we design homepage for the website which includes-
- Navigation
- Front Page
- About Me/About Company
- Contact Us
- Footer

### Basic Structue of the website looks like-

<div class="imgCont">
  <img alt="HomePage Structue" title="HomePage Structue" src="/assets/img/create-a-website/homepage-design/homepage_layout.png"/>
</div>

**Note**- I am not focusing on designing websites that you can learn online or from youtube.

## HTML code for homepage

I am providing you the code piece by piece.
You can write this code in index.html

### Navigation HTML -
{% highlight html %}{% raw %}
<nav class="navbar navbar-expand-md navbar-dark fixed-top" id="mainNav">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img alt="techylane logo" src="img/logo_red.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
      <span class="navbar-toggle-icon"><i class="fa fa-bars fa-1x"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#aboutus">About Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endraw %}{% endhighlight %}

### Front Page HTML -
{% highlight html %}{% raw %}
<header class="masthead">
  <div class="container h-100">
    <div class="image-cont row h-100 align-items-end">
      <div class="col-12 text-center">
        <h1 class="font-weight-light">Check out Latest Cooking Recipe</h1>
        <a class="lead" href="#">EXPLORE</a>
      </div>
    </div>
  </div>
</header>
<div class="bottom-right">Photo by Alyson McPhee on Unsplash</div>
{% endraw %}{% endhighlight %}

### About Me HTML -
{% highlight html %}{% raw %}
<section id="aboutus">
<div class="container-fluid">
<div class="row">
  <div class="col-sm-4">
    <div class="img-wrap">
      <img alt="Photo by Febrian Zakaria on Unsplash" title="Photo by Febrian Zakaria on Unsplash" src="img/profile.jpg"/>
    </div>
  </div>
<div class="col-sm-8">
  <h2>Varun Bisht</h2>
  <h4>Chef</h4>
  <p>Welcome to our cooking channel 'FOODY BLOG'</p>
  <p>Here, we will teach you all kind of food recipes from simple to sophisticated, from North Indian to South Indian,
     Gujarati to Marathi, Punjabi to Oriya.</p>
  </p> Come check out our recipes and travel your journey from a starter Cook to a complete chef.
     It's said that u can win anyone's heart by Good food. We along with mastering you in good food will teach you some kitchen
     hacks and tips which will help you grow better each day.</p>
</div>
</div>
</div>
</section>
{% endraw %}{% endhighlight %}

### Footer HTML -
{% highlight html %}{% raw %}
<footer>
  <div class="container-fluid padding">
    <div class="row text-center">
      <div class="address col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
        <h4>Address:</h4>
        <p>F-9/91, Sector-100</p>
        <p>Rohini, Delhi-110089</p>
      </div>
    </div>
  </div>
</footer>
{% endraw %}{% endhighlight %}

You can find full code(including css and js) - [https://github.com/vbisht7038/vbisht7038.github.io.git](https://github.com/vbisht7038/vbisht7038.github.io.git "https://github.com/vbisht7038/vbisht7038.github.io.git")

We have designed our homepage and now its time to push this code to Github repository so that our awesome website design will be visible to others.

You know the steps, but i will show you again
<div class="imgCont">
  <img alt="Push HomePage Steps" title="Push HomePage Steps" src="/assets/img/create-a-website/homepage-design/push_homepage_steps.png"/>
</div>

<a href="https://github.com/vbisht7038/vbisht7038.github.io.git">Click to get the full Implementation of this tutorial on Github</a>

### Further Study Material
1. Desiging website - youtube

**In the next tutorial**, we will focus on how to add Custom Domain to Github Pages.
