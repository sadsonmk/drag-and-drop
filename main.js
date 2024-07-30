// draggable and droppable elements
const items = document.querySelectorAll('.item');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

// We use three event handlers here:
// in the dragstart event handler, we get a reference to the element that the user dragged
items.forEach(item => {
    item.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    } )
})

// in the dragover event handler for the target container, we call event.preventDefault(), which enables it to receive drop events.
const sections = [left, right];
sections.forEach(section => {
    section.addEventListener('dragover', function(e) {
        e.preventDefault();
    })

    // in the drop event handler for the drop zone, we handle moving the draggable element from the original container to the drop zone.
    section.addEventListener('drop', function(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const elem = document.getElementById(id);
        section.appendChild(elem);
    })
})






