

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
getElementById: Selects a single element by its unique id attribute
and returns a single Element object, or null if no element with the specified ID is found.
getElementsByClassName:Selects elements by their class name and returns a live HTMLCollection of elements that have the specified class. "Live" means the collection updates automatically if elements are added or removed from the DOM that match the class.
querySelector:Selects the first element that matches a specified CSS selector (e.g., #id, .class, tagname, [attribute], or a combination) and returns a single Element object, or null if no matching element is found.
querySelectorAll:Selects all elements that match a specified CSS selector and returns a static NodeList of elements. "Static" means the collection does not update automatically if the DOM changes after the selection is made.
2. How do you **create and insert a new element into the DOM**?
Creating Element using document.createElement()
    const newParagraph = document.createElement('p');
    then adding content
    newParagraph.textContent = 'This paragraph was added dynamically!';
    then the parent element where the new element shuld be inserted is found
    const containerDiv = document.getElementById('container');
    after that the element is inserted using appendChild()
    containerDiv.appendChild(newParagraph);  
3. What is **Event Bubbling** and how does it work?
Event bubbling is the default JavaScript behavior in which a triggered event on a DOM element "bubbles" or propagates upward through its ancestors in the DOM hierarchy, to the root element
How Event Bubbling Works
Event Firing: An event occurs on a specific, deeply nested element (the target element), such as a click on a button within a div. 
Target Element Handling: The event is initially handled by the target element itself. 
Bubbling Up the DOM Tree: The event then "bubbles up" to the target element's parent. 
Ancestor Handling: If any event handlers are attached to the parent element, they are also triggered. 
Propagation Continues: This process repeats for the grandparent, great-grandparent, and so on, all the way up the DOM tree to the outermost element, like the <html> element or even the document object. 
Event Delegation: This mechanism enables event delegation, where a single event listener on a parent element can manage events for many child elements, making the code more efficient and simpler to manage. 
4. What is **Event Delegation** in JavaScript? Why is it useful?
Event delegation is a JavaScript technique where a single event listener on a parent element handles events for all its child elements, rather than adding individual listeners to each child. 
It's useful because it significantly improves performance and memory usage by reducing the number of event listeners, makes the code more maintainable by handling dynamically added or removed elements automatically, and simplifies event management by centralizing logic on the parent. 
5. What is the difference between **preventDefault() and stopPropagation()** methods?
This method prevents the browser's default action associated with a specific event from occurring.
Example: Clicking a link typically navigates to the href URL. Calling event.preventDefault() within a click handler for that link will prevent the navigation, allowing custom handling of the click. Similarly, calling it on a form's submit event prevents the form from submitting.
stopPropagation()
This method halts the propagation of an event through the DOM tree, preventing it from reaching other elements in the capturing or bubbling phases.
Example: If a button inside a div both have click event listeners, clicking the button would normally trigger both the button's click handler and then the div's click handler due to event bubbling. Calling event.stopPropagation() within the button's click handler would prevent the event from bubbling up to the div, thus only the button's handler would execute.
Key Differences:
Focus:
preventDefault() targets the default behavior of an element for a given event, while stopPropagation() targets the flow of an event through the DOM.
Effect:
preventDefault() stops an action (like navigation or form submission), while stopPropagation() stops the event from being handled by parent or child elements in the event propagation path.
Independence:
These methods are independent. Calling preventDefault() does not stop propagation, and calling stopPropagation() does not prevent default actions. You can use them together if both effects are desired.
---


