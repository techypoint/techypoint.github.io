---
title: "Interface Default Methods in Java 8"
author: "Varun Bisht"
description: "Default Methods in an interface is a method that has a default implementation. It enables you to add new functionality to the existing interface and ensure compatibility with the code using that interface."
blogDesc: "Default Methods in an interface is a method that has a default implementation. It enables you to add new functionality to the existing interface and ensure compatibility with the code using that interface."
keywords: "can we override default method in java,default method in java 8,how many default methods can an interface have,two interface with same default method in java,overriding a default method"
category: "java"
permalink: "/java/default-methods-in-java"
image: "/assets/img/java/default-methods-in-java/interface-default-methods-in-java.png"
featureImage: "/assets/img/java/default-methods-in-java/interface-default-methods-in-java.png"
---
**Default Methods** in an interface is a method that has a default implementation. It enables you to add new functionality to the existing interface and ensure compatibility with the code using that interface.

Default Methods are introduced in **Java 8**.

Let's understand with an example of why default methods are introduced.

Suppose you have an interface- Operations.java and its implementation- Calculator.java
{% highlight html %}{% raw %}
package techylane.tutorials.default_methods_in_java;
public interface Operations {
  int multiply(int x,int y);
}
{% endraw %}{% endhighlight %}
{% highlight html %}{% raw %}
package techylane.tutorials.default_methods_in_java;

public class Calculator implements Operations {
  public int multiply(int x, int y) {
    return x * y;
  }
}
{% endraw %}{% endhighlight %}
Now in the future, you want to include **sum** functionality and will add **sum(int x,int y)** in Operations.java.
{% highlight html %}{% raw %}
  int sum(int x,int y);
{% endraw %}{% endhighlight %}
Then all those who have implemented this interface have to rewrite this implementation code.
To prevent this, you will add sum function as the default method and provide the default implementation as shown below.
{% highlight html %}{% raw %}
package techylane.tutorials.default_methods_in_java;
public interface Operations {
  int multiply(int x,int y);
  default int sum(int x,int y){
    return x + y;
  }
}
{% endraw %}{% endhighlight %}
This will ensure all those who have implemented the interface can use it without breaking the code and can override if required.

## Key points-
1. Default Methods are **public** by default.
2. You can define as many default methods in an interface.
3. You can override default methods


## Cases exist when extending an interface containing default methods
- Use the default method by inheriting it.
{% highlight html %}{% raw %}
public interface SubOperations1 extends Operations {

  // case 1- when you can use inherited default method

}
{% endraw %}{% endhighlight %}
- Make the default method as abstract
{% highlight html %}{% raw %}
interface SubOperations2 extends Operations {

  // case 2- when you can make it abstract
  int sum(int x, int y);

}
{% endraw %}{% endhighlight %}
- Override the default method implementation
{% highlight html %}{% raw %}
interface SubOperations3 extends Operations {

  // case 3- when you override it
  @Override
  default int sum(int x, int y) {
    // you can provide the different implementation
    return x+y;
  }

}
{% endraw %}{% endhighlight %}

## What happens when we have two interfaces with same default methods

Suppose there are two interfaces- Interface1.java and Interface2.java, both have the same default method **process()**

{% highlight html %}{% raw %}
public interface Interface1 {
  default void process(){
    System.out.println("processing Interface 1");
  }
}

interface Interface2{
  default void process(){
    System.out.println("processing Interface 2");
  }
}
{% endraw %}{% endhighlight %}

Now if some class implements both the interfaces and does not override the default method, then it will give a compile-time error.
{% highlight html %}{% raw %}
// gives compile time error
class Processor implements Interface1,Interface2{
}
{% endraw %}{% endhighlight %}

To implement both the interfaces, you need to override the default method in the Processor class as shown below.
{% highlight html %}{% raw %}
class Processor implements Interface1,Interface2{
  @Override
  public void process() {
    System.out.println("processing Processor");
    Interface1.super.process();
    Interface2.super.process();
  }
}
{% endraw %}{% endhighlight %}

You can also call each interface process function with the help of the super keyword.

<a href="https://github.com/techypoint/JavaTutorials/tree/master/src/main/java/techylane/tutorials/default_methods_in_java">Click to get the full Implementation of this tutorial on Github</a>
