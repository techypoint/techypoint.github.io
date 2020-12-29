---
title: "Functional Interfaces in Java"
author: "Varun Bisht"
description: "Functional interfaces in java is an interface which has only one abstract method. They can contain as many default and static methods as they are not abstract."
blogDesc: "Functional interfaces in java is an interface which has only one abstract method. They can contain as many default and static methods as they are not abstract. Functional interfaces are introduced in Java 8 and lambda expression can be used to create instances from functional interfaces."
keywords: "built in functional interfaces in java,java functional interface tutorial,java functional interface annotation,java 8 function example,can functional interface have static methods"
category: "java"
permalink: "/java/functional-interfaces"
image: "/assets/img/java/functional-interfaces/functional-interfaces.png"
featureImage: "/assets/img/java/functional-interfaces/functional-interfaces.png"
---
Functional interfaces in java is an interface which has only one abstract method. They can contain as many default and static methods as they are not abstract.

Functional interfaces are introduced in Java 8 and lambda expression can be used to create instances from functional interfaces.

## Why we need functional interfaces?

Before Java 8, we use to create anonymous classes for interfaces to use like Runnable, Comparable. We need to write unnecessary code to create them.
But From Java 8, we can use lambda expression to create an instance of the functional interface which removes this use case.

Let's understand with this example.
{% highlight html %}{% raw %}
package techylane.tutorials.functional_interfaces;

public class Example1 {

  public static void main(String[] args) {

    // before Java 8, we used to create anonymous inner classes
    new Thread(
        new Runnable() {
          @Override
          public void run() {
            System.out.println("perform task");
          }
        }
    ).start();

    // from Java 8, we can use lambda expression to create instance of functional interface
    new Thread(
        () -> {
          System.out.println("perform task");
        }
    ).start();

  }
}
{% endraw %}{% endhighlight %}

### Key points
1. Functional interface can have default and static methods. Example -
{% highlight html %}{% raw %}
package techylane.tutorials.functional_interfaces;
@FunctionalInterface
public interface FunctionalInterface1 {
  void process();
  static void execute(){
    System.out.println("execute");
  }
  default void create(){
    System.out.println("create");
  }
}
{% endraw %}{% endhighlight %}

## @FunctionalInterface annotation

**@FunctionalInterface** annotation is used to mark the interface as a functional interface. It is not mandatory to use it but it is recommended as it gives a compile-time error if you accidentally create more than one abstract method.
Example of functional interface-
{% highlight html %}{% raw %}
package techylane.tutorials.functional_interfaces;
@FunctionalInterface
public interface FunctionalInterface1 {
  void process();
}
{% endraw %}{% endhighlight %}

## BuiltIn Functional Interfaces
There are many built-in functional interfaces defined in **java.util.function** package which you can use.

<div class="imgCont">
  <img class="object-fit" alt="java.util.function" title="java.util.function" src="/assets/img/java/functional-interfaces/builtin-functional-interfaces.png"/>
</div>

We are going to discuss two of them in this tutorial with examples-
### 1. Consumer functional interface

This interface has abstract accept() which accepts a parameter and performs an operation on it. It does not return any value.
It can be used with lambda expression.

Example-
{% highlight html %}{% raw %}
package techylane.tutorials.functional_interfaces;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class ConsumerInterfaceExample {

  public static void main(String[] args) {

    Consumer<Integer> integerConsumer=(i)-> System.out.println(i*2);
    integerConsumer.accept(1);


    Consumer<List<Integer>> listConsumer=(list)->{
      for(Integer i:list){
        System.out.println(i);
      }
    };
    List<Integer> integerList=new ArrayList<>();
    integerList.add(1);
    integerList.add(2);
    listConsumer.accept(integerList);

  }

}
{% endraw %}{% endhighlight %}
### 2. Function functional interface
This interface has abstract apply() which accept a parameter of Type T and returns parameter of Type R.

Example-
{% highlight html %}{% raw %}
package techylane.tutorials.functional_interfaces;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

public class FunctionInterfaceExample {

  public static void main(String[] args) {

    Function<Integer,Integer> integerFunction=(i)->{return i*2;};
    System.out.println(integerFunction.apply(10));

    List<String> stringList=new ArrayList();
    stringList.add("a");
    stringList.add("b");
    stringList.add("c");

    Function<List<String>, Map<Integer,String>> listMapFunction=list ->{
      Map<Integer,String> integerStringMap=new HashMap<>();
      for (int i=0;i<list.size();i++){
        integerStringMap.put(i,list.get(i));
      }
      return integerStringMap;
    };

    System.out.println(listMapFunction.apply(stringList));

  }
}
{% endraw %}{% endhighlight %}

<a href="https://github.com/techypoint/JavaTutorials/tree/master/src/main/java/techylane/tutorials/functional_interfaces">Click to get the full Implementation of this tutorial on Github</a>
