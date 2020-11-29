---
title: "Debug out of memory error in java"
author: "Varun Bisht"
description: "We will tell you how to debug OutOfMemory Error in Java using Eclipse Memory Analyzer. We will demonstrate two examples and will debug it step by step. We will also learn what are the configuration required and how to take heap dump in Java."
blogDesc: "We will tell you how to debug OutOfMemory Error in Java using Eclipse Memory Analyzer. We will demonstrate two examples and will debug it step by step. We will also learn what are the configuration required and how to take heap dump in Java."
keywords: "java lang outofmemoryerror java heap space,how to debug outofmemoryerror java heap space,how to analyze out of memory error in java,out of memory exception java example,how to find memory leaks in java using eclipse"
category: "java"
permalink: "/java/debug-outofmemory-error-in-java"
image: "/assets/img/java/debug-outofmemory-error-in-java/outOfMemory.png"
featureImage: "/assets/img/java/debug-outofmemory-error-in-java/outOfMemory.png"
---
In this tutorial, we will learn how to debug out of memory exception in java. We will learn what is this error and causes for it. Then, We will write two programs that produce **OutOfMemory Error** and will take its heap dump and analyze it.

We will run our application with 128mb heap size i.e -Xmx=128m and -Xms=128m

## What is OutOfMemory Error
Whenever there is not enough space to allocate objects in the Java heap space and the garbage collector is not able to create space for new objects then **OutOfMemory Error is thrown**.

## Causes Of OutOfMemory Error
- Heap size specified is not enough
- holding references to objects which are not in use

Now we know what is OutOfMemory Error and how it occurs. Now let us understand how can we debug this issue. We will show how to debug with two examples.

## Steps to debug OutOfMemory Error
1. Write code that produces OutOfMemory Error or maybe you are facing OutOfMemory Error in your application.
2. Enable auto heap dump with the help of configuration on application startup. When an Error occurs, JVM will automatically create a heap dump file.
3. You can also take a heap dump at any time when your application running(optional).
4. Analyze the heap dump file using **Eclipse Memory Analyzer**.
5. After Analyzing, you can fix your code if required.

## Example 1

### 1. Code to produce OutOfMemory Error
{% highlight html %}{% raw %}
package techylane.tutorials.out_of_memory;
import java.util.ArrayList;
import java.util.List;
public class Example1 {
  public void example1(){
    List<Test> testList=new ArrayList<Test>();
    for(int i=0;i<1000000000;i++){
      testList.add(new Test(i+""));
      System.out.println(i);
    }
  }
}
class Test{
  String name;
  public Test(String name) {
    this.name = name;
  }
}
{% endraw %}{% endhighlight %}

In the above code, we are creating an object of the Test class in a loop and adding it to the List object. When we run this code, after some time all the memory assigned gets used by the application and not able to create the further object and JVM will **throw OutOfMemory Error**.

It is a simple example but it will be a good base for us for debugging purposes.

<a href="https://github.com/techypoint/JavaTutorials.git">Click to get the full Implementation of this tutorial on Github</a>
### 2. Enable auto heap dump on application startup
**command** - java -Xmx128m -Xms128m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp -jar application-jar-name.jar

Run your application jar with
- -XX:+HeapDumpOnOutOfMemoryError
- -XX:HeapDumpPath=head-dump-file-path

This config tells the JVM to create a heap dump file whenever there is an OutOfMemory Error. So in the future whenever there is an OutOfMemory Error given by your application, JVM will automatically create a heap dump file.

Now let's run code in step-1 with the above config. You will get OutOfMemory Error and auto-generated heap dump file in the tmp folder.
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/JavaTutorial/target$ java -Xmx128m -Xms128m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp -jar JavaTutorial-1.0-SNAPSHOT.jar
java.lang.OutOfMemoryError: GC overhead limit exceeded
Dumping heap to /tmp/java_pid21837.hprof ...
Heap dump file created [175790383 bytes in 1.458 secs]
Exception in thread "main" java.lang.OutOfMemoryError: GC overhead limit exceeded
	at techylane.tutorials.out_of_memory.Example1.example1(Example1.java:8)
	at techylane.tutorials.out_of_memory.MainLauncher.main(MainLauncher.java:6)
varun@varun-ThinkPad-L490:~/my-pro-projects/JavaTutorial/target$ cd /tmp/
varun@varun-ThinkPad-L490:/tmp$ ll | grep java_pid21837.hprof
-rw-------  1 varun    varun    175790383 Oct  4 13:49 java_pid21837.hprof
{% endraw %}{% endhighlight %}

Pattern of head dump file - **java_pid[process-id].hrof**

### 3. Take heap dump when an application is running(optional)

If you want to analyze the current memory usage of an application, you can take the heap dump at runtime so that you can analyze it.

**command**- jmap -dump:format=b,file=[file-path] [pid]

Here,

**pid**: It is the Java Process Id whose heap dump needs to be captured

**file-path**: It is the location of the head dump file.

Example -
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:/usr/lib/jvm/java-8-openjdk-amd64/bin$ jmap -dump:format=b,file=/tmp/heap-dump.hprof 6796
Dumping heap to /tmp/heap-dump.hprof ...
Heap dump file created
varun@varun-ThinkPad-L490:/usr/lib/jvm/java-8-openjdk-amd64/bin$ ll |grep heap-d
varun@varun-ThinkPad-L490:/usr/lib/jvm/java-8-openjdk-amd64/bin$ ll /tmp/ |grep heap-d
-rw-------  1 varun    varun    2686476 Oct  6 00:23 heap-dump.hprof
{% endraw %}{% endhighlight %}

### 4. Analyze heap dump file using Eclipse Memory Analyzer

Now download Eclipse Memory Analyzer and open it. You will get the below screen.

[Download Eclipse Memory Analyzer](https://www.eclipse.org/mat/downloads.php "Download Eclipse Memory Analyzer")

<div class="imgCont">
  <img class="object-fit" alt="eclipse memory analyzer homescreen" title="eclipse memory analyzer homescreen" src="/assets/img/java/debug-outofmemory-error-in-java/eclipse-memory-analyzer-homescreen.png" />
</div>

Open the heap dump file generated in Step-2, you will get below screen

<div class="imgCont">
  <img class="object-fit" alt="heap dump analyzer" title="heap dump analyzer" src="/assets/img/java/debug-outofmemory-error-in-java/heap_dump_analyzer.png" />
</div>

Now our motive is to find out which object is taking so much memory.

The Pie chart shows the percentage of memory occupied by the biggest objects.
<div class="imgCont">
  <img class="object-fit" alt="list objects" title="list objects" src="/assets/img/java/debug-outofmemory-error-in-java/list-objects.png" />
</div>
You can click and list objects to check the heap size occupied by them in the above image.

<div class="imgCont">
  <img class="object-fit" alt="test objects heap usage" title="test objects heap usage" src="/assets/img/java/debug-outofmemory-error-in-java/test-objects-heap-usage.png" />
</div>
In the above image of the object tree, you can clearly see that the techylane.tutorials.out_of_memory.Test objects have occupied the heap. We have highlighted the lines for you. This way you can identify that Test class objects are the culprit for this OutOfMemory error.

**Eclipse Memory Analyzer tool** also generates some views for you which are listed below the pie chart like **Lead Suspects** and **Top Components**.
These views can be very useful in analyzing.

### 5. After Analyzing, you can fix your code if required
Now you have identified which objects are the cause of OutOfMemory Error. Now you need to fix this in your code.
There might be chances that you have given less heap memory to your application than its actually required.

## Example 2

### 1. Code-
{% highlight html %}{% raw %}
package techylane.tutorials.out_of_memory;
import java.util.ArrayList;
import java.util.List;
public class Example2 {
  /**
   * In this example, You are maintaining reference to the created threads in the arrayList
   * that's why these threads are not removed by garbage collector.
   * Hence OutOfMemoryError occurs
   */
  public void example2WithOutOfMemoryError(){
    List<Thread> threadList=new ArrayList<Thread>();
    for(int i=0;i<1000000;i++){
      System.out.println(i);
      Thread thread=new Thread();
      threadList.add(thread);
      thread.start();
    }
  }
}
{% endraw %}{% endhighlight %}
In this example, we have created Threads inside the loop and keeps it reference in a List. keeping its reference in a List will not allow it to be collected by the garbage collector.
### 2. Run jar with heap dump configuration
{% highlight html %}{% raw %}
varun@varun-ThinkPad-L490:~/my-pro-projects/JavaTutorial/target$ java -Xmx128m -Xms128m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp -jar JavaTutorial-1.0-SNAPSHOT.jar
java.lang.OutOfMemoryError: Java heap space
Dumping heap to /tmp/java_pid26516.hprof ...
Heap dump file created [79249363 bytes in 0.732 secs]
Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
	at java.util.Arrays.copyOfRange(Arrays.java:3664)
	at java.lang.String.<init>(String.java:207)
	at java.lang.StringBuilder.toString(StringBuilder.java:407)
	at java.lang.Thread.<init>(Thread.java:448)
	at techylane.tutorials.out_of_memory.Example2.example2WithOutOfMemoryError(Example2.java:17)
	at techylane.tutorials.out_of_memory.MainLauncher.main(MainLauncher.java:7)
{% endraw %}{% endhighlight %}

The above output shows that a heap dump file is created with the name- java_pid26516.hprof
### 3. Analyze heap dump
Open above heap dump in the **Eclipse Memory Analyzer** in the same way as done in Example1
<div class="imgCont">
  <img class="object-fit" alt="heap dump analyzer example2" title="heap dump analyzer example2" src="/assets/img/java/debug-outofmemory-error-in-java/heap_dump_analyzer_example2.png" />
</div>
<div class="imgCont">
  <img class="object-fit" alt="list objects example2" title="list objects example2" src="/assets/img/java/debug-outofmemory-error-in-java/list-objects-example2.png" />
</div>
<div class="imgCont">
  <img class="object-fit" alt="thread objects heap usage" title="thread objects heap usage" src="/assets/img/java/debug-outofmemory-error-in-java/thread-objects-heap-usage.png" />
</div>
In the above object tree, you can clearly see the Thread class objects occupied the heap size.
### 4. Code Fix
{% highlight html %}{% raw %}
package techylane.tutorials.out_of_memory;
import java.util.ArrayList;
import java.util.List;
public class Example2 {
  /**
   * In this example, we are not maintaining reference to the created threads
   * that's why these threads are easily removed by garbage collector.
   * Hence no OutOfMemoryError
   */
  public void example2WithoutOutOfMemoryError(){
    for(int i=0;i<1000000;i++){
      Thread thread=new Thread();
      thread.start();
    }
  }
}
{% endraw %}{% endhighlight %}
In the above fix code, the garbage collector collects the Thread objects as we are not storing Thread object reference in the List.

Now we are successfully able to debug the OutOfMemory Error. In your application, there are many objects which occupied the heap memory. So you need to check the most suspected objects first.

<a href="https://github.com/techypoint/JavaTutorials.git">Click to get the full Implementation of this tutorial on Github</a>
