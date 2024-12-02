
document.addEventListener("mousemove", (event) => {
    const dot = document.createElement("div");
    dot.className = "dot";

    // Set position of the dot to match the mouse
    dot.style.left = `${event.pageX}px`;
    dot.style.top = `${event.pageY}px`;

    // Add dot to the background
    document.body.appendChild(dot);

    // Remove the dot after a short delay
    setTimeout(() => {
        dot.remove();
    }, 2000);
});
