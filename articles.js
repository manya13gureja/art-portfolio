  const ARTICLES = {
            designprocess: {
                title: 'Don\'t trust the (design) process',
                author: 'Manya Gureja',
                published: '28 Aug 2025',
                excerpt: 'A reflection on how design has shifted from creating things to worshipping the process and why questioning, ruthless scoping, and building fast matter more than frameworks.',
            content: `
<p>There's a strange trend in design lately, we've stopped designing things and started designing the process of designing them.</p>

<p>Scroll through LinkedIn or a portfolio, and you'll find diagram after diagram worshipping some linear, sacred framework, all while the actual product gets flatter, safer, and more lifeless.</p>

<p>Let's be real in 2025, we've got to stop romanticising "process" like it's the product and know that what users care about isn't whether you went through six rounds of HMWs or filled a Notion doc with empathy maps, it's whether the thing works, feels right, and actually solves their problem. Somewhere along the line, "design thinking" started replacing actual thinking.</p>

<p>This isn't to say process is useless. Having a structured approach can be helpful, especially when you are in a rut, or lost in the chaos. But it's ONLY that, a safety net. Not a map. Not a religion. A good process should feel more like a gut check, not a gated tunnel you have to crawl through every time.</p>

<p>What I've built for myself isn't a universal blueprint. It's not "best practice", it's just what works for me. My process shifts with the project, the people, the pace. Sometimes it's loopy. Sometimes it's fast. Sometimes it's just vibes and one strong hunch.</p>

<h2>We, designers, hear it all the time</h2>

<p>know the what, why and how of the problem before designing, and while I completely agree for doing this, I am also a big procrastinator and have questioned multiple times that why are we even solving this problem right now?can't we solve it tomorrow or could have yesterday? why is it a priority today and not last month? what shifted?</p>

<p>At first, these questions used to sound like stalling, but honestly, approaching things this way led me to answers of questions I didn't even know I had:</p>

<p>What changed in the product, team, or market that makes this worth building now?<br>
(helps define new constraints, business priorities, or technical unlocks that weren't true before.)</p>

<p>What are users doing today that this feature is supposed to fix, replace, or accelerate?<br>
(ties directly to the user behaviours and user pain points)</p>

<p>What outcome are we expecting to shift right now?<br>
(Forces clarity on scope, goal and MVP.)</p>

<p>Honestly this is all the breakthrough I need to have. Understanding why are we building right now, gets me started on working on what results we actually want, i.e., metrics of our product.</p>

<p>If we can't point to a needle we expect to move, we're flying blind.</p>

<p>The metrics we define in this stage should be measurable, visible early and realistic. Something that lets me/my team know that we are headed in the right direction without having to wait until post-launch analytic kicks in.</p>

<h2>This is where both the worlds, design and engineering, pays off</h2>

<p>Taking a Designing first and Engineering second, for me, has saved quite a lot of time and helped me uncover surface gaps in flow logic, before developing time is wasted (guess I am a designer by heart).</p>

<p>In the real and practical world though, even with a solid north star, our well defined metric, something can go misaligned/misinterpreted/or missed completely, and that's the nature of building (that's when these design processes come in handy). Hence, asking yourself and trying to estimate the cost of being wrong here, what's the blast radius? How fast can we course-correct? helps decide how rigorously to measure and how lean the first iteration should be.</p>

<h2>Once you have questioned yourself enough and defined everything you could think of</h2>

<p>there's a rush you'd feel towards building a picture perfect solution. That rush is good, but for finding the smallest version of the solution.</p>

<p>Can't even recall how many times I have jumped straight into building and had to scrap the whole thing down. Try playing around product we building a bit more and finding the shippable version of the solution, that prove or disprove our metrics.</p>

<p>I have named this Ruthless scoping, aka not falling into the trap of building the "perfect thing" too early.</p>

<p>I actively look for the fastest path to learning, even if that means shipping something barebones or ugly. What can I ship that feels embarrassingly small but directionally correct?</p>

<p>I scope around what lets us validate the core assumption:</p>

<p>If we're testing a new layout, does it actually reduce drop-offs?<br>
If we're proposing a new flow, can users get through it without guidance? etc etc</p>

<p>It's critical to pinpoint what must exist versus what's nice to have, early on, and then building the musts'.</p>

<h2>When I am finding the first small thing</h2>

<p>I automatically dive in flows, state machines and experience maps that helps in understanding:</p>

<p>The friction – Friction in our case is the inertia users are facing when using our product. It shows up in understanding workflows clearly.</p>

<p>The dependencies – Designs don't live in isolation. They rely on APIs, constraints, third-party tools. If a feature hinges on a brittle integration or manual ops work, I flag it. Dependencies shape what's possible and what's fragile.</p>

<p>Who touches this system – Understanding the people present in loop is the most crucial thing as the product you are building is not just for your users. Ops? Support? Sales? Devs? If they interact with the system, their workflows must be respected in the solution. If this is ignored, your system breaks down the moment it leaves the prototype bubble.</p>

<p>Where can things go wrong – This is about edge cases, failure states, and entropy. Designing for constraints as well — e.g., What happens if something loads slowly? If a flow is interrupted mid-way?</p>

<p>Doing this has saved lives, and all these answers can be obtained by understanding the product, and understanding the users like they are your roommates. Talk to the users, act like them, think and behave like them. Be them.</p>

<h2>Now, get your hands dirty</h2>

<p>Without getting lost in polish or process. I treat ideas like hypotheses, something to disprove quickly rather than nurture blindly.</p>

<p>The goal is simple to get it out, see how people respond.</p>

<p>Whether that means a janky HTML prototype, a fake no-code flow, or even a clickable button. Engineering first approach works best for the couple of stages here. Each small experiment is a micro-feedback loop,it teaches me what to double down on, what to drop, and what to refine.</p>

<p>I don't just aim to ship here, I aim to grow on that idea. Momentum is built.</p>

<p>From here on, I keep growing and working on the ideas, jumping back and forth in between what I described, building and breaking, till it feels inevitable.</p>

<h2>As you see, I clearly don't just stick to one lane</h2>

<p>I try to constantly move my thinking from engineering, to designing, to acting like a sales person selling my one idea to my another idea.Translating between what's technically possible, what users actually need, what can be sold, and what breaks when it hits the real world.</p>

<p>Whether it's checking with support to validate pain points, or pressure-testing an idea like a marketer, I make sure the product isn't built in a vacuum. But that's only one half of the muscle.</p>

<p>Even in a corporate space, crystal-clear problems rarely get handed off. Instead, it's usually vague: "users are confused here," or "something feels off." That's where I comb through logs, dive into metrics and ideation over and over again, questioning my multiple thoughts, and obsessively testing and breaking the product myself.</p>

<h2>What I believe</h2>

<p>The way good solutions/products come out of is to shape the problems as much as you solve them. It's skipping steps, it's knowing how to bend the process in your favour.</p>

<p>The product is yours to build, so should be the process to build it.</p>
`
            },
            
        };