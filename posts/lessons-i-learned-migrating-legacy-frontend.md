---
title: "Lessons learned migrating large scale legacy Vue application"
date: "2021/12/05"
excerpt: "In this blog post I will discuss what I learned migrating a large-scale vue application with different toolings and UI components."
---

When I joined the Alibaba Travels Co. hotel team, I was tasked to maintain and then migrate their CRS (Central Reservation System) panel. It was developed using Vue 2.6, Webpack, bootstrap-vue UI component library. There used to be a lot of issues. It had zero tests, not even cypress was configured on the project, There were a lot of technical issues such as prop-drilling and excess usage of mixins. We were in dire need of a big change.

One other team in the company was working on the shared design language system UI library (called DLS) using Vue 3. Our design roadmap was to integrate that UI library into our panel and get rid of bootstrap-vue which we only used because we could not wait for DLS development to finish.

There were a lot of ups and downs, but after 4 or 5 months we were able to replace Vue 2 to Vue 3, Webpack to Vite, configured cypress and testing environments, resolve breaking changes, last but not least, migrate ALL of the used SFC components to use a totally different UI component library with different props, design, behavior!

All of it happened in the same git repository! I knew we could not afford to do things from scratch. This is how we get to my first point here.

### Prefer changing existing code rather than writing from scratch unless you have to do so

There was a lot of code that I could reuse in the migration without any problem such as the plugins, cloud integration API calls, reusable general components that existed in the codebase, etc.

I tried to do as little change as possible in terms of removing whole code sections or components and rewriting them, but sometimes you can't just do it. I tried to rewrite one of our views about supplier crud actions from scratch, my estimated time for the task was one week. It took three to finish, fixing a lot of bugs in the same period.
I learned something important, when migrating code especially if the requirements are the same as before and there's nothing to drastically change (e.g. changing monolithic to microservices) improve upon code that exists. the heavy lifting is already done. you can deliver faster with higher quality that isn't rushed.

### Don't be afraid to ask questions, embrace humility

You can't know it all, you have to decide how much of a generalist you want to be, and how much of a specialist you want to be.

At the time of migration, I did not know the answer to a lot of my questions. I learned to constantly ask other teams about solutions, alongside my research.

### Be aware of the limitations and pitfalls of your framework or language of choice

you are not able to figure skate on a platform made for basketball.

Declarative programming without a good side-effect management story is just imperative programming with more steps

### Without domain knowledge, you will not be using 100% of your technical skills

No matter how good you are in your tech stack, you need domain knowledge to use it.

Domain knowledge lets you foresee problems that haven't occurred yet and fix them beforehand, whether it is the implementation of complex UIs or the architecture design of a mongo database schema.

Take time to know the business, ask questions, set meetings. remember you're only here to support your business.

### Get in touch with users

ask about their needs and achieve first-class feedback directly from them.

It always feels good when your direct users thank you for your app's features, and it is eye-opening to see how exactly they interact with it and what they expect from it.

The best-case scenario is where a developer can afford regular meetings with users and stakeholders and collect a list of todos that will be added in near future!

### Automate what can be automated during the migration e.g. process of SVG optimizing

one more example of automation was an optimization pipeline for our SVG components. I developed a little script that I run to generate Optimized SVG components to lazy load them where I need them.

The task is to have SVG files on one specific directory from our design team
feed them into SVGO package and save the results in a Vue file into another directory that we expect

I used vs-code find-and-replace tool to swap several of our components used over our entire project. It was about some components with different props and different tag names. You could only imagine how much It would have taken if I were to do it by hand

### Start by laying the first brick - start small and be consistent

Migrating a working panel is daunting, especially to a newer version of the library you use to make it work but the fact of the matter is chopping up this big task into smaller, doable sub-tasks and focus on them one at a time until there's no subtask is left

you can eat an elephant one peace at a time, lay the bricks until the wall is done
fast iteration, fast correction, fast delivery will get you through hell.

### Do not overwork yourself, take breaks to sharpen your axe

I am passionate about my job. I don't count the hours till the day finishes. also, I like the social validation I get from moving my tasks from to-do to done on our kanban board

but, everyone has a limited amount of energy and mental capacity every day and this is just a fact. I think you should be aware of that.

### Premature optimization is the root of all evil

passionate developers tend to over-engineer stuff. furthermore, we crave optimization in our designs and developments. it seems so exciting to us and we spend so much time on it that we forget about the product itself. our number one goal should be to deliver. premature optimization means postponing delivery in favor of making the perfect code which is a fairy tale.
But overengineering is an important part of learning
I agree. However, the question is whether production code is the right place for experimenting.
I learned that perfect code is not written overnight. it's not a linear path to perfection. rather than onions. software dev is like an onion. you have layers upon layers of iteration over the same thing to make it better every day. like a painter that brushes over the same canvas over and over again that it becomes Mona Lisa.

-   effective communication with other team members
-   delegate when you can - it is more about knowing what to say no to than what to do next
-   duplicate code is much better than the wrong abstraction
-   Always implement things when you need them, never when you just foresee that you need them

A good researcher is sometimes better than an expert.

### Take responsibility and burry your burden

take responsibility and get to work. stop blaming legacy code, previous developers, or decisions made before you. it is all gone and past. you're the player now, you're the one everyone will blame or praise. the choice is yours and yours only.
