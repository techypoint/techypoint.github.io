---
title: "Elastic search — analysis"
description: "The aim of this tutorial is to show how to write bulky or large data in files and which output streams to you use for better performance in java."
keywords: "How to write large data in a file in java,write bulk file in java"
category: "elastic-search"
permalink: "/elastic-search/a"
---
<div class="imgCont">
  <img src="/assets/img/java/first-post/test5.jpg" />
</div>
<h1>How to write large data in a file in java — analysis</h1>
<p>The aim of this tutorial is to show how to write bulky or large data in files and
which output streams to you use for better performance in java.</p>
<p>For the analysis purpose, I write 90 Mb(generated in code) of data in a file around 2000 times.so that I am able to analyze the following points —
1. heap memory used
2. avg time taken to write file
3. CPU performance</p>
<p>To write files in java, I have used the following output stream -
1. FileOutputStream
2. RandomAccessFile
3. BufferedWriter</p>
<h2>1. FileOutputStream</h2>
<h3>Code-</h3>
<script src="https://gist.github.com/techypoint/c0085193c2ca789639ba43f9d6646323.js"></script>
<h3>Analysis data -</h3>
<div class="imgCont">
<img src="/assets/img/java/first-post/a.png" />
</div>
<p>Average Time- 332 ms</p>
<h2>2. RandomAccessFile</h2>
<h3>Code-</h3>
<script src="https://gist.github.com/techypoint/19acef34cb63f91b1524d7c15f0f5c2c.js"></script>
<h3>Analysis data -</h3>
<div class="imgCont">
<img src="/assets/img/java/first-post/b.png" />
</div>
<p>Average Time- 365 ms</p>
<h2>3. BufferedWriter</h2>
<h3>Code-</h3>
<script src="https://gist.github.com/techypoint/baba3bd33613557f7f434657a53e339a.js"></script>
<h3>Analysis data -</h3>
<div class="imgCont">
<img src="/assets/img/java/first-post/c.png" />
</div>
<p>Average Time- 286 ms</p>
<h2>Results -</h2>
<script src="https://gist.github.com/techypoint/9d4824c0e76e5a6f4bea92506951bea6.js"></script>
<h2>CONCLUSION</h2>
<p>From the results, you can choose which output stream to use based on your requirements.</p>
<p>In memory and CPU perspective, choose RandomAccessFile </p>
<p>In speed and CPU perspective, choose BufferedWriter</p>
<p>I hope it helps you.</p>
