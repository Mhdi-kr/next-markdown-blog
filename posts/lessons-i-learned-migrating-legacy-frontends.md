---
title: "Lessons I learned Migrating Large-scale, Legacy Vue Application"
date: "December 5, 2021"
excerpt: "Django is a very powerful, high level Python framework for building web applications"
---
<script src="https://gist.github.com/Mhdi-kr/ce70fe030fcc5502ea3991a7b700eda3.js"></script>
-   Always prefer changing existing code rather than writing everything from scratch unless you absolutely have to do so
    -   always double check underlying principles are at place
    we wanted to migrate our all-new crs that was written with vue 2 and webpack to vue 3 and vite and our company dls
    we had a lot of problems such as prop drilling, design incosistency etc
    I tried to rewrite one of our views about supplier crud actions from scratch, my estimated time for the task was one week. It took three to finish with fixing a lot of bugs on the period
    I learned somethings important, when migrating code especially if the requirements are the same as before and there's nothing to drasitaclly change (e.g. changing monolithic to microservices) improve upon code that exists. the heavy lifting is already done. you can deliver faster with higher quality that isn't rushed
-   Don't be afraid to ask questions embrace humility

while migrating I did not know the answer to a lot of my questions. I learned to constantly ask other teams about solutions in alongside my own research

I used vs-code find-and-replace tool to swap several of our components used over our entire project. It was about some components with different props and different tag names. You could only imagine how much It would have taken if I were to do it by hand

-   Automate what can be automated during the migration e.g. process of SVG optimizing

one more example of automation was an optomization pipeline for our SVG components. I developed a little script that I run to generate Optimized SVG components to lazy load them where I need them.

The task is to have SVG files on one specefic directory from our design team

feed them into svgo package and save the results in a vue file into another directory that we expect

-   start by laying the first brick - start small and be consistent

Migrating a working panel is daunting, especially to a newer vesion of the library you use to make it work but the fact of the matter is chopping up this big task into smaller, doable sub tasks and focus on them one at a time untill there's no subtask is left

you can eat an ele[hant one peace at a time, lay the bricks until the wall is done

-   Do not overwork yourself

I am passionate about my job. I don't count the hours till the day finishes. also I like the social validation I get from moving my tasks from to-do to done on our kanban board

but, every one has a limited amount of energy and mentall capacity each and every day and this is just a fact

-   Premature optimization is the root of all evil

passionate developers tend to over-engineer stuff. in addition to that we crave optimization in our desings and developments. it seems so exciting to us and we spend so much time on it that we actually forget about the product itself. our nperzumber one goal should be to deliver. premature optimzation means posponing delivery in favor of making the prefect code whcih is fairy tale.

I learned that perfect code is not written over night. it's not a linear path to perfection. rather than onions. software dev is like onion. you have layers upon layers of iteration over the same thing to make it better each and ervery day. like a painter that brushes over the same canvas over and over again that it becomes mona lisa

-   effective communication with other team memebers
-   delegate when you can - it is more more about knowing what to say no to than what to do next
-   duplicate code is much better than wrong abstraction
-   Always implement things when you actually need them, never when you just foresee that you need them

A good researcher is sometimes better than an expert.

## Extras

-   you cant know it all you have to decide how much of a generalist you want to be and how much of a specialist you wanna be
-   Being a system architect is language agnostic
    But overengineering is an important part of learning
    I agree fully. However, question is whether production code is the right place for experimenting.

Declarative programming without a good side-effect management story is just imperative programming with more steps
