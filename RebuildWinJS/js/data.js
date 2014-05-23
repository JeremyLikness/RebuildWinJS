(function () {
    "use strict";

    var list = new WinJS.Binding.List();
    var groupedItems = list.createGrouped(
        function groupKeySelector(item) { return item.group.key; },
        function groupDataSelector(item) { return item.group; }
    );

    generateSlideData().forEach(function (item) {
        list.push(item);
    });

    WinJS.Namespace.define("Data", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemReference: getItemReference,
        getItemsFromGroup: getItemsFromGroup,
        getNextItem: getNextItem,
        getPreviousItem: getPreviousItem,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference
    });

    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return [item.group.key, item.title];
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }

    // Get the unique group corresponding to the provided group key.
    function resolveGroupReference(key) {
        return groupedItems.groups.getItemFromKey(key).data;
    }

    // Get a unique item from the provided string array, which should contain a
    // group key and an item title.
    function resolveItemReference(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                return item;
            }
        }
    }

    function getPreviousItem(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                if (i > 0) {
                    return getItemReference(groupedItems.getAt(i - 1));
                };
            }            
        }
        return null;
    }

    function getNextItem(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                if (i < groupedItems.length - 1) {
                    return getItemReference(groupedItems.getAt(i + 1));
                };
            }            
        }
        return null;
    }

    // Returns an array of slide data that can be added to the application's
    // data list. 
    function generateSlideData() {
        
        var slideGroups = [
            {
                key: "01-intro", title: "Introduction", subtitle: "Jeremy Likness and Wintellect",
                backgroundImage: '/images/thumbs/thumb1.png', description: 'Introduction to the speaker, Jeremy Likness, and Wintellect'
            },
            {
                key: "02-today", title: "WinJS Today", subtitle: "The current state of WinJS.", backgroundImage: '/images/thumbs/thumb4.png',
                description: 'What WinJS is capable of today.'
            },
            {
                key: "03-new", title: "What's New", subtitle: "What's new with WinJS as of //build", backgroundImage: '/images/thumbs/thumb7.png',
                description: 'The philosophy that drives the latest features built into WinJS.'
            },
            {
                key: "04-features", title: "Overview of Features", subtitle: "Quick Overview of Latest Features", backgroundImage: '/images/thumbs/thumb13.png',
                description: 'Overview of the specific features shipped with the current WinJS.'
            },
            {
                key: "05-xbox", title: "Xbox Support", subtitle: "Build Xbox apps with JavaScript", backgroundImage: '/images/thumbs/thumb19.png',
                description: 'WinJS is now available for Xbox development.'
            },
            {
                key: "06-future", title: "WinJS Future", subtitle: "What's next with WinJS?", backgroundImage: '/images/thumbs/thumb22.png',
                description: 'Learn about the WinJS future roadmap.'
            },
            {
                key: "07-conclusion", title: "Conclusion", subtitle: "Wrapping Up", backgroundImage: '/images/thumbs/thumb26.png',
                description: 'Wrap-up, next steps and questions.'
            }
        ];

        var slideItems = [

            {
                group: slideGroups[0], title: "WinJS Today", subtitle: "What's New with WinJS", slide: 'slide1.html',
                description: 'Introduction to What\'s New with WinJS.', backgroundImage: '/images/thumbs/thumb1.png'
            },
            {
                group: slideGroups[0], title: "About Wintellect", subtitle: "Consulting and Training", slide: 'slide2.html',
                description: 'Learn about Wintellect, a company that helps you build better software, faster.',
                backgroundImage: '/images/thumbs/thumb2.png'
            },
            {
                group: slideGroups[0], title: "Agenda", subtitle: "What we'll cover", slide: 'slide3.html',
                description: 'Agenda for the presentation.',
                backgroundImage: '/images/thumbs/thumb3.png'
            },            

            {
                group: slideGroups[1], title: "WinJS Today", subtitle: "The state of WinJS 2.0 and 2.1", slide: 'slide4.html',
                description: 'Current WinJS supports several platforms, from desktop and laptop to slate and phone.',
                backgroundImage: '/images/thumbs/thumb4.png'
            },
            {
                group: slideGroups[1], title: "WinJS Architecture", subtitle: "How current apps interact with WinJS", slide: 'slide5.html',
                description: 'The current architecture sits on top of WinRT and JavaScript/HTML5.',
                backgroundImage: '/images/thumbs/thumb5.png'
            },
            {
                group: slideGroups[1], title: "Building apps with JavaScript", subtitle: "Current Versions", slide: 'slide6.html',
                description: 'The current architecture sits on top of 2.0 (with 2.1 for the phone).',
                backgroundImage: '/images/thumbs/thumb6.png'
            },

            {
                group: slideGroups[2], title: "What's New with WinJS", subtitle: "The latest features", slide: 'slide7.html',
                description: 'Focus points of what is new.',
                backgroundImage: '/images/thumbs/thumb7.png'
            },

            {
                group: slideGroups[3], title: "Feature Highlights", subtitle: "The latest features", slide: 'slide8.html',
                description: 'A high level view of the latest features.',
                backgroundImage: '/images/thumbs/thumb8.png'
            },
            {
                group: slideGroups[3], title: "Pivot", subtitle: "Pivot control for phone", slide: 'slide9.html',
                description: 'A flexible JavaScript pivot control.',
                backgroundImage: '/images/thumbs/thumb9.png'
            },
            {
                group: slideGroups[3], title: "Pivot Source", subtitle: "Source for Pivot", slide: 'slide10.html',
                description: 'Source code to set up the pivot control.',
                backgroundImage: '/images/thumbs/thumb10.png'
            },
            {
                group: slideGroups[3], title: "AppBar", subtitle: "Multiple modes", slide: 'slide11.html',
                description: 'The new AppBar for the phone has multiple modes.',
                backgroundImage: '/images/thumbs/thumb11.png'
            },
            {
                group: slideGroups[3], title: "AppBar Source", subtitle: "Source for AppBar", slide: 'slide12.html',
                description: 'Source code to set up the AppBar on the phone.',
                backgroundImage: '/images/thumbs/thumb12.png'
            },
            {
                group: slideGroups[3], title: "ListView", subtitle: "Super responsive ListView", slide: 'slide13.html',
                description: 'The ListView is virtualized and super-responsive.',
                backgroundImage: '/images/thumbs/thumb13.png'
            },
            {
                group: slideGroups[3], title: "ListView Source", subtitle: "Source for ListView", slide: 'slide14.html',
                description: 'Source code to set up the ListView.',
                backgroundImage: '/images/thumbs/thumb14.png'
            },
            {
                group: slideGroups[3], title: "SemanticZoom and JumpList", subtitle: "Faster ways to navigate data", slide: 'slide15.html',
                description: 'Use semantic zoom and jump lists to navigate long lists.',
                backgroundImage: '/images/thumbs/thumb15.png'
            },
            {
                group: slideGroups[3], title: "SemanticZoom Source", subtitle: "Source for SemanticZoom", slide: 'slide16.html',
                description: 'Source code to set up SemanticZoom.',
                backgroundImage: '/images/thumbs/thumb16.png'
            },
            {
                group: slideGroups[3], title: "User Themes", subtitle: "Support for user requested themes", slide: 'slide17.html',
                description: 'Now support the current light or dark theme.',
                backgroundImage: '/images/thumbs/thumb17.png'
            },
            {
                group: slideGroups[3], title: "Themes Source", subtitle: "Source for Themes", slide: 'slide18.html',
                description: 'Source code to support Themes.',
                backgroundImage: '/images/thumbs/thumb18.png'
            },

            {
                group: slideGroups[4], title: "Xbox and WinJS", subtitle: "WinJS for Xbox", slide: 'slide19.html',
                description: 'Support for Xbox development in JavaScript.',
                backgroundImage: '/images/thumbs/thumb19.png'
            },
            {
                group: slideGroups[4], title: "WinJS Platform Features", subtitle: "Cross-platform features", slide: 'slide20.html',
                description: 'List of feature support in WinJS by platform.',
                backgroundImage: '/images/thumbs/thumb20.png'
            },
            {
                group: slideGroups[4], title: "Xbox Notes", subtitle: "Miscellaneous notes", slide: 'slide21.html',
                description: 'Notes about Xbox development with JavaScript.',
                backgroundImage: '/images/thumbs/thumb21.png'
            },

            {
                group: slideGroups[5], title: "WinJS Future", subtitle: "The future of WinJS", slide: 'slide22.html',
                description: 'WinJS is being updated to reach all platforms.',
                backgroundImage: '/images/thumbs/thumb22.png'
            },
            {
                group: slideGroups[5], title: "WinJS Convergence", subtitle: "Converging the versions", slide: 'slide23.html',
                description: 'The goal is to become a single platform by version 3.0.',
                backgroundImage: '/images/thumbs/thumb23.png'
            },
            {
                group: slideGroups[5], title: "WinJS Future Features", subtitle: "Broader support", slide: 'slide24.html',
                description: 'WinJS will be open and integrate well with other libraries.',
                backgroundImage: '/images/thumbs/thumb24.png'
            },
            {
                group: slideGroups[5], title: "WinJS Roadmap", subtitle: "The road ahead", slide: 'slide25.html',
                description: 'Future releases and roadmap.',
                backgroundImage: '/images/thumbs/thumb25.png'
            },

            {
                group: slideGroups[6], title: "Conclusion", subtitle: "Recap and Questions", slide: 'slide26.html',
                description: 'Any questions?',
                backgroundImage: '/images/thumbs/thumb26.png'
            }

        ];

        return slideItems;
    }
})();
