---
title: "[unfinished] Large-scale Vue 3 Migration: Lessons Learned"
date: "2021/12/05"
excerpt: "I will discuss what I learned migrating a large-scale vue application, Improved developer's experience and maintainability."
tags: ""
---

When I joined the hotel team in Alibaba Travels Co. I was tasked to maintain and migrate CRS (Central Reservation System) panel. It was developed using Vue 2.6, Webpack, bootstrap-vue UI component library. There used to be a lot of issues. It had zero tests, There were a lot of technical issues and anti-patterns such as prop-drilling and excess use of mixins, etc. We were in dire need of a big change.

There were a lot of ups and downs, but after 4 or 5 months we were able to replace Vue 2 to Vue 3, Webpack to Vite, configured cypress and testing environments, resolved breaking changes, last but not least, migrate ALL of the used SFC components to use a totally different UI component library with different props, design and behaviour!

All of it happened in the same git repository but in a different branch! Just like natural selection, I knew we could not afford to do things from scratch. This is how we get to my first point here.

### Always prefer changing existing code rather than re-writing from scratch

There was a lot of code that I could reuse in the migration without any problems such as the custom date and currency plugins and utils, cloud integration API calls, reusable general components that existed in the codebase, etc.

I tried to do as little change as possible in terms of removing whole code sections or components and rewriting them, but I have to admit sometimes you just cannot do it.

I tried to rewrite one of our views about supplier crud actions from scratch, my estimated time for the task was one week. It took three to finish, fixing a lot of bugs in the same period. I learned something important, when migrating code especially if the requirements are the same as before and there's nothing to drastically change (e.g. changing monolithic to microservices) improve upon code that exists. the heavy lifting is already done. you can deliver faster with higher quality that isn't rushed.

### Premature optimization is the root of all evil

Always implement things when you need them, never when you just foresee that you _might_ need them

passionate developers tend to overengineer stuff. furthermore, we crave optimization in our designs and developments. it seems so exciting to us and we spend so much time on it that we forget about the product itself. our number one goal should be to deliver value to the business. premature optimization means postponing delivery in favor of making the perfect code/architechture which is a fairy tale. 

overengineering is an important part of learning. However, the question is whether production code is the right place for experimenting or not.

I learned that perfect code is not written overnight. it's not a linear path to perfection. It is like it is layered. The nature of software development is of an onion. You have layers upon layers of iteration over the same thing to make it better every day. Like a painter that brushes over the same canvas over and over again that it becomes _Starry night_.

Always question yourself on why you're doing things you're doing and if that decision you're making is going to limit your future-self or librate

_"Duplicate code is much better than the wrong abstraction" | Addy Osmani_

### Take responsibility and burry your burden

Get to work. stop blaming legacy code, previous developers, or decisions made before you. It is all gone and past. You're the player now, you're the one everyone will blame or praise afterwards. The choice is only yours.

### Know your limitations

Be aware of the limitations and pitfalls of your framework or language of choice

you are not able to figure skate on a platform made for basketball.

Declarative programming without a good side-effect management story is just imperative programming with more steps

### Embrace humility

At the time of migration, I did not know the answer to a lot of my questions. I learned to constantly ask other teams about solutions and suggestions, alongside my own research.

Don't be afraid to ask questions, You can't know it all. As a general rule of thumb you have to decide how much of a generalist you want to be, and how much of a specialist you want to be.

### Gain domain knowledge as soon as possible

Without domain knowledge, you will not be using 100% of your technical skills

No matter how good you are in your tech stack, you need domain knowledge to use it.

Domain knowledge lets you foresee problems that haven't occurred yet and avoid them beforehand, whether it is the implementation of complex UIs or the architecture design of a mongo database schema.

Take time to know the business, ask questions, set meetings. remember you're only here to support your business.

### Get in touch with users

It always feels good when your direct users thank you for your app's features, and it is eye-opening to see how exactly they interact with it and what they expect from it.

The best-case scenario is where a developer can afford regular meetings with users and stakeholders and collect a list of todos that will be added in near future!

### Effective communication with other team members

delegate when you can - it is more about knowing what to say no to than what to do next

### Automate what you can

e.g. process of SVG optimizing

one more example of automation was an optimization pipeline for our SVG components. I developed a little script that I run to generate Optimized SVG components to lazy load them where I need them.

The task is to have SVG files on one specific directory from our design team
feed them into SVGO package and save the results in a Vue file into another directory that we expect

I used vs-code find-and-replace tool to swap several of our components used over our entire project. It was about some components with different props and different tag names. You could only imagine how much It would have taken if I were to do it by hand

### Start small and be consistent

Migrating a working panel is daunting. Chopping up this big task into smaller, doable sub-tasks and focus on them one at a time until there's no subtask is left.

you can eat an elephant one peace at a time, lay the bricks until the wall is done.

fast iteration, fast correction, fast delivery will get you through hell.

### Beware of burnout

I am passionate about my profession. I don't feel time passing by when I'm working, but, everyone has a limited amount of energy and mental capacity each and every day and this is just a fact.

Just take breaks to sharpen your axe. Make sure you have enough physical resources, food and sleep to keep you going.

Take a great care of yourself and health, because it is priceless.


```javascript
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Header />
            <main className="container lg:px-48 mx-auto">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}
```