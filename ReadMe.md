re//build WinJS
====
An interactive slide deck presenting the latest changes to the WinJS library.

# Notes 
Although I have been writing JavaScript-based applications for 20 years and Windows Store apps using C# and XAML for nearly three years now, this is my first JavaScript Windows Store app. As such, please do not consider this an example of best 
practices or commonly used patterns - it was a fun project to achieve the goal of delivering a presentation through the
use of the technology I was presenting with, but I expect the app will be refactored several times (maybe to use Angular?) 
before I can make it a refereanceable "store-ready" app. 

This app uses pure HTML5 and JavaScript with the benefit of WinJS to recap the //build 2014 announcements relating to 
WinJS. Visit the [WinJS online](https://github.com/winjs/winjs) site for the latest details. I have also pulled in the
[animation.css](http://daneden.github.io/animate.css/) to demonstrate how third-party open-source projects can run without modification in Windows Store apps. This is truly the power of WinJS: the fact that it opens Windows app development to an amazingly large and rich ecosystem of existing frameworks and libraries.

Follow me [@JeremyLikness](http://www.twitter.com/JeremyLikness) and visit my [blog](http://csharperimage.jeremylikness.com/) to stay current with the latest trends in enterprise app development!

# Build re//build WinJS
In order to build //rebuild WinJS, ensure that you have [git](http://git-scm.com/downloads) installed.


Clone a copy of the master //rebuild WinJS git repo:

```
git clone https://github.com/JeremyLikness/RebuildWinJS.git
```

Open in Visual Studio 2013 and build/deploy. 

# Navigation
Use `SPACEBAR` to advance and `BACKSPACE` to return to the previous slide. For slides with dynamic content and bullets,
the `RIGHT ARROW` will make these items appear. Use `UP ARROW` to return to the table of contents from individual
slides.

# TODO 
Currently the app has not been enhanced with gesture recognition or accessibility. 