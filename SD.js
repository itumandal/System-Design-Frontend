/**
 * Load JS Asynchronously | Network Optimization
 * 
 * there are many ways to load javascript in html file
   - after body tag ->{when js is after the body tag -> HTML parsing ->download JS-> Execute JS}
   - when JS is in HEAD tag ->{HTML parsing->HTML parsing paused->  download JS + execute js -> HTML Parsing}

//! Best Optimization way approach 

    //! When Async attribute in HEAD tag
    //? here HTML parsing continues and when it reach to script tag it sees async then it simultaneously download js code from network call & html parsing continues. when js is downloaded it starts executing and that time html parsing stops & execute JS. once done then HTML parsing is continued.

    //! with Defer attribute in HEAD tag
    //? HTML parsing continuos + pre-fetching JS script from network call simultaneously and then when the HTML parsing is completed then JS execution phase starts.
    This is the best optimization loading JS in HTML 
 */

/**
 *! When should we use async over defer ?
 * both the cases it doesn't block the page
 * script with defer always execute when the DOM is ready.
 * defer scripts maintains their relative order meaning order of execution. suppose we have two js scripts : long.js and then small.js .Browsers scan the page for scripts and download them in parallel, to improve performance.both scripts download in parallel. The small.js probably finishes first.But the defer attribute, besides telling the browser “not to block”, ensures that the relative order is kept. So even though small.js loads first, it still waits and runs after long.js executes.
 *
 * in async -> other scripts don’t wait for async scripts, and async scripts don’t wait for them.
 * In other words, async scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded.
 * A smaller script small.js goes second, but probably loads before long.js, so small.js runs first. Although, it might be that long.js loads first, if cached, then it runs first. In other words, async scripts run in the “load-first” order.
 * Async scripts are great when we integrate an independent third-party script into the page: counters, ads and so on, as they don’t depend on our scripts, and our scripts shouldn’t wait for them.
 *
 *! the important thing is that the async attribute doesn't guarantee the order of execution of the scripts, but defer does.so what does that mean?
 *! if we are putting an async attributes in multiple scripts, so suppose you have multiple scripts which are dependent on each others, in such case defer is the optimized way to use. coz defer attributes maintains the order of execution.
 */
